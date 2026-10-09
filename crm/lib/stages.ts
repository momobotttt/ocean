// 準客戶卡嘅階段、表格欄位、簽單條件定義（取代《Prospect Check List》）

export type Stage = "RR" | "NR1" | "NR2" | "FNA" | "PC" | "SIGNED" | "ISSUED";
export type FormStage = "RR" | "NR1" | "NR2" | "FNA" | "PC";
export type FormColumn = "form_rr" | "form_nr1" | "form_nr2" | "form_fna" | "form_pc";

export const STAGES: { key: Stage; label: string; short: string }[] = [
  { key: "RR", label: "RR（Fact Finding）", short: "RR" },
  { key: "NR1", label: "NR1（開口）", short: "NR1" },
  { key: "NR2", label: "NR2（深度發掘需要）", short: "NR2" },
  { key: "FNA", label: "FNA 財務分析", short: "FNA" },
  { key: "PC", label: "PC（提供方案／成交）", short: "PC" },
  { key: "SIGNED", label: "已簽", short: "已簽" },
  { key: "ISSUED", label: "已出單", short: "已出單" },
];

export const STAGE_KEYS = STAGES.map((s) => s.key);
export const stageLabel = (s: Stage) => STAGES.find((x) => x.key === s)?.short ?? s;
export const isStage = (v: unknown): v is Stage => typeof v === "string" && (STAGE_KEYS as string[]).includes(v);

export type Field = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "date" | "rating";
  hint?: string;
};

export type Section = { title?: string; note?: string; fields: Field[] };

export type CheckKey =
  | "rr_like_trust"
  | "rr_stable_income"
  | "rr_relationship"
  | "rr_understand_goal"
  | "nr2_need_confirmed"
  | "nr2_plan_previewed"
  | "nr2_budget_set"
  | "nr2_next_meeting";

export type Check = { key: CheckKey; label: string; fill?: Field };

export type FormDef = {
  stage: FormStage;
  column: FormColumn;
  title: string;
  timing: string;
  sections: Section[];
  checks?: { title: string; items: Check[] };
};

export const RR_CHECKS: Check[] = [
  { key: "rr_like_trust", label: "客人喜歡和信任你" },
  { key: "rr_stable_income", label: "有穩定收入或淨資產" },
  { key: "rr_relationship", label: "與你有交情或共同經歷" },
  { key: "rr_understand_goal", label: "了解到客人現況與目標" },
];

export const NR2_CHECKS: Check[] = [
  { key: "nr2_need_confirmed", label: "確認需要", fill: { key: "need_text", label: "需要" } },
  { key: "nr2_plan_previewed", label: "預演計劃內容", fill: { key: "product_text", label: "產品" } },
  { key: "nr2_budget_set", label: "確立預算", fill: { key: "budget_text", label: "金額" } },
  { key: "nr2_next_meeting", label: "確定下次會面", fill: { key: "next_meeting_date", label: "日期", type: "date" } },
];

export const ALL_CHECKS: Check[] = [...RR_CHECKS, ...NR2_CHECKS];
export const CHECK_KEYS: CheckKey[] = ALL_CHECKS.map((c) => c.key);

export const FORMS: FormDef[] = [
  {
    stage: "RR",
    column: "form_rr",
    title: "RR — Fact Finding",
    timing: "多方面了解客人（事後紀錄）",
    sections: [
      {
        fields: [
          { key: "family", label: "家庭", type: "textarea" },
          { key: "work", label: "工作", type: "textarea" },
          { key: "hobbies", label: "娛樂及興趣", type: "textarea" },
          { key: "finance", label: "財務情況", type: "textarea" },
          { key: "personality", label: "性格及人生目標", type: "textarea" },
          { key: "helped", label: "幫助過對方什麼", type: "textarea" },
          { key: "knowledge", label: "已有理財知識及觀念", type: "textarea" },
          { key: "existing", label: "進行中的理財配置", type: "textarea" },
          { key: "needs", label: "鑑定需要", type: "textarea" },
        ],
      },
      {
        title: "A 點 → B 點",
        fields: [
          { key: "point_a", label: "A 點（現況）", type: "textarea" },
          { key: "point_b", label: "B 點（目標）", type: "textarea" },
        ],
      },
    ],
    checks: { title: "RR 四個條件", items: RR_CHECKS },
  },
  {
    stage: "NR1",
    column: "form_nr1",
    title: "NR1 — 開口",
    timing: "事前準備",
    sections: [
      {
        fields: [
          { key: "situation", label: "客人現況、處境、想法、感受、方向", type: "textarea" },
          { key: "common_issues", label: "同類客人普遍問題", type: "textarea" },
          { key: "point_c", label: "客人需要明白的概念／知識／故事（C 點）", type: "textarea" },
          { key: "summary", label: "總結痛點及我能創造的價值", type: "textarea" },
        ],
      },
    ],
  },
  {
    stage: "NR2",
    column: "form_nr2",
    title: "NR2 — 深度發掘需要",
    timing: "事後紀錄",
    sections: [
      {
        fields: [
          { key: "values", label: "重要價值觀", type: "textarea" },
          { key: "vision", label: "人生願景及目的", type: "textarea" },
          { key: "risks", label: "實現願景會遇見的風險及障礙", type: "textarea" },
          { key: "outcome", label: "具體想達致的效果", type: "textarea" },
        ],
      },
      {
        title: "配置總結方程式",
        note: "重申願景 ＋ 面對阻礙 ＋ 想要效果 ＝ 產品設計概念 ＋ 一分鐘產品簡介",
        fields: [
          { key: "f_vision", label: "重申願景", type: "textarea" },
          { key: "f_obstacles", label: "面對阻礙", type: "textarea" },
          { key: "f_effect", label: "想要效果", type: "textarea" },
          { key: "f_design", label: "產品設計概念", type: "textarea" },
          { key: "f_pitch", label: "一分鐘產品簡介", type: "textarea" },
        ],
      },
    ],
    checks: { title: "NR2 完結前四個條件", items: NR2_CHECKS },
  },
  {
    stage: "FNA",
    column: "form_fna",
    title: "FNA — 財務分析",
    timing: "金額以港幣（每月）計",
    sections: [
      {
        fields: [
          { key: "income", label: "每月收入（HK$）", type: "number" },
          { key: "income_note", label: "收入明細", type: "textarea" },
          { key: "expense", label: "每月支出（HK$）", type: "number" },
          { key: "expense_note", label: "支出明細", type: "textarea" },
          { key: "assets", label: "資產總值（HK$）", type: "number" },
          { key: "assets_note", label: "資產明細", type: "textarea" },
          { key: "liabilities", label: "負債總額（HK$）", type: "number" },
          { key: "liabilities_note", label: "負債明細", type: "textarea" },
        ],
      },
    ],
  },
  {
    stage: "PC",
    column: "form_pc",
    title: "PC — 提供方案／成交",
    timing: "事前準備",
    sections: [
      {
        title: "重申配置總結方程式",
        fields: [
          { key: "r_purpose", label: "目的", type: "textarea" },
          { key: "r_effect", label: "效果", type: "textarea" },
          { key: "r_content", label: "內容", type: "textarea" },
        ],
      },
      {
        title: "最大價值陳述",
        fields: [
          { key: "value_before", label: "前段", type: "textarea" },
          { key: "value_middle", label: "中段", type: "textarea" },
          { key: "value_after", label: "後段", type: "textarea" },
        ],
      },
      {
        fields: [{ key: "objections", label: "客人可能出現的異議", type: "textarea" }],
      },
      {
        title: "自評（1–10 分）",
        fields: [
          { key: "conf_concept", label: "概念", type: "rating" },
          { key: "conf_content", label: "內容", type: "rating" },
          { key: "conf_confidence", label: "信心", type: "rating" },
        ],
      },
    ],
  },
];

export const formFor = (stage: FormStage) => FORMS.find((f) => f.stage === stage)!;

export function formFieldKeys(def: FormDef): string[] {
  const keys = def.sections.flatMap((s) => s.fields.map((f) => f.key));
  for (const c of def.checks?.items ?? []) if (c.fill) keys.push(c.fill.key);
  return keys;
}

export type Checks = Record<CheckKey, boolean>;

/** 仲差邊幾格先具備簽單條件 */
export function missingChecks(checks: Partial<Checks>): { stage: "RR" | "NR2"; label: string }[] {
  return ALL_CHECKS.filter((c) => !checks[c.key]).map((c) => ({
    stage: c.key.startsWith("rr_") ? "RR" : "NR2",
    label: c.label,
  }));
}

export const isReady = (checks: Partial<Checks>) => missingChecks(checks).length === 0;

const num = (v: string | undefined) => {
  if (v === undefined || v.trim() === "") return null;
  const n = Number(v.replace(/[,\s]/g, ""));
  return Number.isFinite(n) ? n : null;
};

/** FNA 自動計算：現金流＝收入－支出；淨資產＝資產－負債 */
export function fnaSummary(form: Record<string, string>) {
  const income = num(form.income);
  const expense = num(form.expense);
  const assets = num(form.assets);
  const liabilities = num(form.liabilities);
  return {
    cashflow: income !== null && expense !== null ? income - expense : null,
    netWorth: assets !== null && liabilities !== null ? assets - liabilities : null,
  };
}

export const GENDERS = [
  { value: "M", label: "男" },
  { value: "F", label: "女" },
];

export const MARITAL = [
  { value: "single", label: "單身" },
  { value: "dating", label: "拍拖中" },
  { value: "married", label: "已婚" },
  { value: "divorced", label: "離婚" },
  { value: "widowed", label: "喪偶" },
];

export const INFO_KEYS = ["name", "age", "gender", "occupation", "marital"] as const;
