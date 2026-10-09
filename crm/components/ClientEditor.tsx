"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";
import { deleteClientAction, moveStageAction, saveFormAction, updateInfoAction, type ActionResult } from "@/app/(app)/clients/actions";
import InfoFields from "./InfoFields";
import {
  FORMS,
  STAGES,
  fnaSummary,
  missingChecks,
  type CheckKey,
  type Checks,
  type Field,
  type FormColumn,
  type FormDef,
  type Stage,
} from "@/lib/stages";

type Info = { name: string; age: string; gender: string; occupation: string; marital: string };

export type EditorClient = {
  id: string;
  stage: Stage;
  info: Info;
  checks: Checks;
  forms: Record<FormColumn, Record<string, string>>;
};

type Tab = "info" | FormColumn;

const money = (n: number | null) =>
  n === null ? "—" : `HK$ ${n.toLocaleString("en-HK", { maximumFractionDigits: 2 })}`;

function FieldInput({
  f,
  value,
  onChange,
  disabled,
}: {
  f: Field;
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  if (f.type === "rating") {
    return (
      <div className="rating" role="radiogroup" aria-label={f.label}>
        {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
          <button
            type="button"
            key={n}
            className={value === n ? "on" : undefined}
            disabled={disabled}
            aria-pressed={value === n}
            onClick={() => onChange(value === n ? "" : n)}
          >
            {n}
          </button>
        ))}
      </div>
    );
  }
  if (f.type === "text" || f.type === "number" || f.type === "date") {
    return (
      <input
        type={f.type === "number" ? "text" : f.type}
        inputMode={f.type === "number" ? "decimal" : undefined}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  return <textarea value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
}

export default function ClientEditor({ client, readOnly }: { client: EditorClient; readOnly: boolean }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("info");
  const [info, setInfo] = useState<Info>(client.info);
  const [forms, setForms] = useState(client.forms);
  const [checks, setChecks] = useState<Checks>(client.checks);
  const [stage, setStage] = useState<Stage>(client.stage);
  const [dirty, setDirty] = useState<Set<Tab>>(new Set());
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  // 有未儲存嘢時離開頁面要提醒
  useEffect(() => {
    if (dirty.size === 0) return;
    const h = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  const markDirty = (t: Tab) => setDirty((d) => new Set(d).add(t));
  const missing = useMemo(() => missingChecks(checks), [checks]);
  const ready = missing.length === 0;
  const checksDirty = dirty.has("form_rr") || dirty.has("form_nr2");

  const run = (fn: () => Promise<ActionResult>, onOk?: () => void) => {
    setMsg(null);
    startTransition(async () => {
      const res = await fn();
      if (res.ok) {
        setMsg({ ok: true, text: "已儲存" });
        onOk?.();
        router.refresh();
      } else {
        setMsg({ ok: false, text: res.error });
      }
    });
  };

  const clearDirty = (t: Tab) =>
    setDirty((d) => {
      const n = new Set(d);
      n.delete(t);
      return n;
    });

  const save = () => {
    if (tab === "info") {
      run(() => updateInfoAction(client.id, info), () => clearDirty("info"));
      return;
    }
    const def = FORMS.find((f) => f.column === tab)!;
    const cs: Partial<Record<CheckKey, boolean>> = {};
    for (const c of def.checks?.items ?? []) cs[c.key] = checks[c.key];
    run(() => saveFormAction(client.id, def.stage, forms[tab], cs), () => clearDirty(tab));
  };

  const changeStage = (to: Stage) => {
    if ((to === "SIGNED" || to === "ISSUED") && !ready) {
      if (!window.confirm(`仲差 ${missing.length} 格先具備簽單條件，確定移去「${STAGES.find((s) => s.key === to)?.short}」？`)) return;
    }
    const prev = stage;
    setStage(to);
    setMsg(null);
    startTransition(async () => {
      const res = await moveStageAction(client.id, to);
      if (!res.ok) {
        setStage(prev);
        setMsg({ ok: false, text: res.error });
      } else {
        setMsg({ ok: true, text: "已轉階段" });
        router.refresh();
      }
    });
  };

  const remove = () => {
    if (!window.confirm(`確定永久刪除「${client.info.name}」？刪除後無法復原（審計記錄會保留刪除紀錄）。`)) return;
    run(() => deleteClientAction(client.id));
  };

  const setField = (col: FormColumn, key: string, v: string) => {
    setForms((f) => ({ ...f, [col]: { ...f[col], [key]: v } }));
    markDirty(col);
  };

  const renderForm = (def: FormDef) => {
    const values = forms[def.column] ?? {};
    const fna = def.stage === "FNA" ? fnaSummary(values) : null;
    return (
      <div>
        <p className="muted small" style={{ marginTop: 0 }}>
          {def.title}（{def.timing}）
        </p>
        {def.sections.map((s, i) => (
          <div key={i}>
            {s.title && <h3>{s.title}</h3>}
            {s.note && <div className="section-note">{s.note}</div>}
            {s.fields.map((f) => (
              <label className="field" key={f.key}>
                <span>{f.label}</span>
                <FieldInput f={f} value={values[f.key] ?? ""} disabled={readOnly} onChange={(v) => setField(def.column, f.key, v)} />
              </label>
            ))}
          </div>
        ))}
        {fna && (
          <div className="calc">
            <div className="stat">
              每月現金流（收入－支出）
              <b className={fna.cashflow !== null && fna.cashflow < 0 ? "neg" : "pos"}>{money(fna.cashflow)}</b>
            </div>
            <div className="stat">
              淨資產（資產－負債）
              <b className={fna.netWorth !== null && fna.netWorth < 0 ? "neg" : "pos"}>{money(fna.netWorth)}</b>
            </div>
          </div>
        )}
        {def.checks && (
          <div className="checklist">
            <h3 style={{ marginTop: 0 }}>{def.checks.title}</h3>
            {def.checks.items.map((c) => (
              <div className="check-row" key={c.key}>
                <input
                  type="checkbox"
                  id={c.key}
                  checked={checks[c.key]}
                  disabled={readOnly}
                  onChange={(e) => {
                    setChecks((x) => ({ ...x, [c.key]: e.target.checked }));
                    markDirty(def.column);
                  }}
                />
                <label className="label" htmlFor={c.key}>
                  {c.label}
                </label>
                {c.fill && (
                  <div className="fill">
                    <FieldInput
                      f={{ ...c.fill, type: c.fill.type ?? "text" }}
                      value={values[c.fill.key] ?? ""}
                      disabled={readOnly}
                      onChange={(v) => setField(def.column, c.fill!.key, v)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "info", label: "基本資料" },
    ...FORMS.map((f) => ({ key: f.column as Tab, label: f.stage })),
  ];

  return (
    <div>
      <div className="row">
        <h1 style={{ margin: 0 }}>{client.info.name || "（未命名）"}</h1>
        <span className="spacer" />
        <label className="row small">
          階段
          <select
            value={stage}
            disabled={readOnly || pending}
            onChange={(e) => changeStage(e.target.value as Stage)}
            style={{ width: "auto" }}
            aria-label="階段"
          >
            {STAGES.map((s) => (
              <option key={s.key} value={s.key}>
                {s.short}
              </option>
            ))}
          </select>
        </label>
      </div>

      {ready ? (
        <div className="ready-box ok" data-testid="ready-box">
          ✅ 具備簽單條件{checksDirty && "（未儲存）"}
        </div>
      ) : (
        <div className="ready-box no" data-testid="ready-box">
          <b>未具備簽單條件 — 仲差 {missing.length} 格</b>
          {checksDirty && "（未儲存）"}
          <ul>
            {missing.map((m) => (
              <li key={m.label}>
                {m.stage}：{m.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            className={`tab${tab === t.key ? " active" : ""}`}
            onClick={() => {
              setTab(t.key);
              setMsg(null);
            }}
          >
            {t.label}
            {dirty.has(t.key) && <span className="dot" title="未儲存" />}
          </button>
        ))}
      </div>

      <div className="card">
        {tab === "info" ? (
          <InfoFields
            value={info}
            disabled={readOnly}
            onChange={(v) => {
              setInfo(v);
              markDirty("info");
            }}
          />
        ) : (
          renderForm(FORMS.find((f) => f.column === tab)!)
        )}

        {!readOnly && (
          <div className="savebar">
            <button className="btn btn-primary" onClick={save} disabled={pending || !dirty.has(tab)}>
              {pending ? "儲存中…" : "儲存"}
            </button>
            {msg && <span className={msg.ok ? "notice" : "error"}>{msg.text}</span>}
            <span className="spacer" />
            {tab === "info" && (
              <button className="btn btn-danger btn-sm" onClick={remove} disabled={pending}>
                刪除客戶
              </button>
            )}
          </div>
        )}
        {readOnly && msg && !msg.ok && <p className="error">{msg.text}</p>}
      </div>
    </div>
  );
}
