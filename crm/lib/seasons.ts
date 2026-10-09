// 四季紅簿：人脈分類（取代《四季紅簿 2026》嘅分類部分）

export type Season = "SPRING" | "SUMMER" | "AUTUMN" | "WINTER";
export const NO_SEASON = "NONE";
export type SeasonColumn = Season | typeof NO_SEASON;

export type SeasonDef = {
  key: Season;
  label: string;
  emoji: string;
  state: string; // 有心／有力
  focus: string; // 行動方向
  actions: string[]; // 對應行動清單（紙本嗰九至十點，待補）
};

export const SEASONS: SeasonDef[] = [
  { key: "SPRING", label: "春", emoji: "🌱", state: "有力無心", focus: "建立信任", actions: [] },
  { key: "SUMMER", label: "夏", emoji: "☀️", state: "有心有力", focus: "專注成交", actions: [] },
  { key: "AUTUMN", label: "秋", emoji: "🍂", state: "有心無力", focus: "培養中心人物", actions: [] },
  { key: "WINTER", label: "冬", emoji: "❄️", state: "無心無力", focus: "招募人才", actions: [] },
];

export const isSeason = (v: unknown): v is Season => SEASONS.some((s) => s.key === v);
export const seasonLabel = (s: string | null | undefined) => {
  const d = SEASONS.find((x) => x.key === s);
  return d ? `${d.emoji} ${d.label}` : "未分類";
};
