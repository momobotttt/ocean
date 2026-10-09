import Link from "next/link";
import { requireAdmin, displayName, type Profile } from "@/lib/auth";
import { listClientCards } from "@/lib/data";
import { STAGES } from "@/lib/stages";

export default async function AdminOverview() {
  const { supabase } = await requireAdmin();
  const [{ data: people }, cards] = await Promise.all([
    supabase.from("profiles").select("id, email, full_name, role, active").order("full_name"),
    listClientCards(supabase),
  ]);
  const staff = ((people as Profile[] | null) ?? []).filter((p) => p.active || cards.some((c) => c.owner_id === p.id));

  const openStage = (s: string) => s !== "SIGNED" && s !== "ISSUED";
  const readyCards = cards.filter((c) => c.ready_to_sign && openStage(c.stage));
  const names = new Map(staff.map((p) => [p.id, displayName(p)]));

  const rows = staff.map((p) => {
    const mine = cards.filter((c) => c.owner_id === p.id);
    return {
      p,
      total: mine.length,
      byStage: Object.fromEntries(STAGES.map((s) => [s.key, mine.filter((c) => c.stage === s.key).length])),
      ready: mine.filter((c) => c.ready_to_sign && openStage(c.stage)).length,
    };
  });

  return (
    <>
      <h1>主管總覽</h1>
      <div className="stats">
        <div className="card">
          全組客戶
          <b>{cards.length}</b>
        </div>
        <div className="card">
          具備簽單條件
          <b style={{ color: "var(--green)" }}>{readyCards.length}</b>
        </div>
        <div className="card">
          已簽
          <b>{cards.filter((c) => c.stage === "SIGNED").length}</b>
        </div>
        <div className="card">
          已出單
          <b>{cards.filter((c) => c.stage === "ISSUED").length}</b>
        </div>
      </div>

      <h2>每個員工嘅客喺邊個階段</h2>
      <div className="table-wrap">
        <table data-testid="team-table">
          <thead>
            <tr>
              <th>員工</th>
              {STAGES.map((s) => (
                <th key={s.key} className="num">
                  {s.short}
                </th>
              ))}
              <th className="num">具備簽單條件</th>
              <th className="num">今週活動分</th>
              <th className="num">本月 AFYP／佣金 vs 目標</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ p, byStage, ready }) => (
              <tr key={p.id}>
                <td>
                  <Link href={`/admin/agents/${p.id}`}>{displayName(p)}</Link>
                  {p.role === "admin" && <span className="muted small">（主管）</span>}
                  {!p.active && <span className="badge badge-red" style={{ marginLeft: 6 }}>已停用</span>}
                </td>
                {STAGES.map((s) => (
                  <td key={s.key} className="num">
                    {byStage[s.key] || <span className="muted">0</span>}
                  </td>
                ))}
                <td className="num">
                  {ready > 0 ? <span className="badge badge-green">{ready}</span> : <span className="muted">0</span>}
                </td>
                <td className="num">
                  <span className="badge badge-grey" title="功能二（每週活動分）上線後顯示">未啟用</span>
                </td>
                <td className="num">
                  <span className="badge badge-grey" title="功能四（四季紅簿）上線後顯示">未啟用</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>合計</td>
              {STAGES.map((s) => (
                <td key={s.key} className="num">
                  {cards.filter((c) => c.stage === s.key).length}
                </td>
              ))}
              <td className="num">{readyCards.length}</td>
              <td />
              <td />
            </tr>
          </tfoot>
        </table>
      </div>

      <h2>具備簽單條件嘅客（未簽）</h2>
      {readyCards.length === 0 ? (
        <p className="muted">暫時冇</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>客戶</th>
                <th>負責員工</th>
                <th>階段</th>
              </tr>
            </thead>
            <tbody>
              {readyCards.map((c) => (
                <tr key={c.id}>
                  <td>
                    <Link href={`/clients/${c.id}`}>{c.info.name}</Link>
                  </td>
                  <td>{names.get(c.owner_id) ?? "—"}</td>
                  <td>{STAGES.find((s) => s.key === c.stage)?.short}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
