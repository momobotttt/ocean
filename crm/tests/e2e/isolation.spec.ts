import { expect, test, type Page } from "@playwright/test";
import { createClient } from "@supabase/supabase-js";

const cred = (v: string | undefined) => {
  const [email, password] = (v ?? "").split(":");
  return { email, password };
};
const ADMIN = cred(process.env.E2E_ADMIN);
const A = cred(process.env.E2E_AGENT_A);
const B = cred(process.env.E2E_AGENT_B);
const stamp = Date.now().toString().slice(-5);
const CLIENT_1 = `測試陳大文${stamp}`;
const CLIENT_2 = `測試李小美${stamp}`;

async function login(page: Page, who: { email: string; password: string }) {
  await page.context().clearCookies();
  await page.goto("/login");
  await page.getByLabel("電郵").fill(who.email);
  await page.getByLabel("密碼").fill(who.password);
  await page.getByRole("button", { name: "登入" }).click();
  await page.waitForURL((u) => !u.pathname.startsWith("/login"));
}

async function apiAs(who: { email: string; password: string }) {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { persistSession: false },
  });
  const { error } = await sb.auth.signInWithPassword(who);
  if (error) throw error;
  return sb;
}

let client1Url = "";
let client1Id = "";

test.describe.serial("權限隔離", () => {
  test("員工 A 開客、填 RR／NR2、自動標具備簽單條件", async ({ page }) => {
    await login(page, A);
    await expect(page).toHaveURL(/\/board/);

    await page.goto("/clients/new");
    await page.getByLabel("姓名 *").fill(CLIENT_1);
    await page.getByLabel("年齡").fill("35");
    await page.getByLabel("性別").selectOption("M");
    await page.getByLabel("職業").fill("會計師");
    await page.getByLabel("婚姻狀況").selectOption("married");
    await page.getByRole("button", { name: "建立客戶卡" }).click();
    await page.waitForURL(/\/clients\/[0-9a-f-]{36}$/);
    client1Url = new URL(page.url()).pathname;
    client1Id = client1Url.split("/").pop()!;

    await expect(page.getByTestId("ready-box")).toContainText("仲差 8 格");

    await page.getByRole("tab", { name: "RR" }).click();
    await page.getByLabel("家庭").fill("已婚，一個仔讀小學");
    await page.getByLabel("A 點（現況）").fill("冇保障");
    for (const l of ["客人喜歡和信任你", "有穩定收入或淨資產", "與你有交情或共同經歷", "了解到客人現況與目標"]) {
      await page.getByLabel(l).check();
    }
    await page.getByRole("button", { name: "儲存" }).click();
    await expect(page.getByText("已儲存")).toBeVisible();
    await expect(page.getByTestId("ready-box")).toContainText("仲差 4 格");

    await page.getByRole("tab", { name: "NR2" }).click();
    for (const l of ["確認需要", "預演計劃內容", "確立預算", "確定下次會面"]) {
      await page.getByLabel(l, { exact: true }).check();
    }
    await page.getByRole("button", { name: "儲存" }).click();
    await expect(page.getByText("已儲存")).toBeVisible();
    await expect(page.getByTestId("ready-box")).toContainText("具備簽單條件");

    await page.getByRole("tab", { name: "FNA" }).click();
    await page.getByLabel("每月收入（HK$）").fill("50000");
    await page.getByLabel("每月支出（HK$）").fill("32000");
    await expect(page.getByText("HK$ 18,000")).toBeVisible();
    await page.getByRole("button", { name: "儲存" }).click();
    await expect(page.getByText("已儲存")).toBeVisible();

    await page.goto("/clients/new");
    await page.getByLabel("姓名 *").fill(CLIENT_2);
    await page.getByRole("button", { name: "建立客戶卡" }).click();
    await page.waitForURL(/\/clients\/[0-9a-f-]{36}$/);

    await page.goto("/board");
    const card = page.getByTestId("client-card").filter({ hasText: CLIENT_1 });
    await expect(card).toContainText("具備簽單條件");
    await expect(page.locator('[data-stage="RR"]')).toContainText(CLIENT_1);
  });

  test("員工 A 拖拉卡片轉階段", async ({ page }) => {
    await login(page, A);
    await page.goto("/board");
    const card = page.getByTestId("client-card").filter({ hasText: CLIENT_2 });
    const target = page.locator('[data-stage="NR1"]');
    const from = (await card.boundingBox())!;
    const to = (await target.boundingBox())!;
    await page.mouse.move(from.x + 20, from.y + 15);
    await page.mouse.down();
    await page.mouse.move(from.x + 40, from.y + 30, { steps: 5 });
    await page.mouse.move(to.x + to.width / 2, to.y + 80, { steps: 15 });
    await page.mouse.up();
    await expect(target).toContainText(CLIENT_2);
    await page.reload();
    await expect(page.locator('[data-stage="NR1"]')).toContainText(CLIENT_2);
  });

  test("員工 B 睇唔到、攞唔到、改唔到員工 A 嘅客", async ({ page }) => {
    await login(page, B);
    await page.goto("/board");
    await expect(page.getByText(CLIENT_1)).toHaveCount(0);
    await expect(page.getByText(CLIENT_2)).toHaveCount(0);

    // 直接打網址
    await page.goto(client1Url);
    await expect(page.getByRole("heading", { name: "搵唔到" })).toBeVisible();
    await expect(page.getByText(CLIENT_1)).toHaveCount(0);

    // 主管頁
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/board/);

    // 繞過介面直接打 API
    const sb = await apiAs(B);
    const { data: rows } = await sb.from("clients").select("id, owner_id");
    expect(rows!.every((r) => r.owner_id !== undefined && r.id !== client1Id)).toBe(true);
    const { data: one } = await sb.from("clients").select("*").eq("id", client1Id);
    expect(one).toEqual([]);
    const { data: upd } = await sb.from("clients").update({ stage: "ISSUED" }).eq("id", client1Id).select("id");
    expect(upd).toEqual([]);
    const { data: del } = await sb.from("clients").delete().eq("id", client1Id).select("id");
    expect(del).toEqual([]);
    const { data: audit } = await sb.from("audit_log").select("id").eq("record_id", client1Id);
    expect(audit).toEqual([]);
    const { data: people } = await sb.from("profiles").select("email");
    expect(people!.map((p) => p.email)).toEqual([B.email]);
  });

  test("主管睇到全組，但只係唯讀", async ({ page }) => {
    await login(page, ADMIN);
    await expect(page).toHaveURL(/\/admin$/);
    await expect(page.getByTestId("team-table")).toBeVisible();
    await page.getByRole("link", { name: CLIENT_1 }).click();
    await expect(page.getByText("唯讀模式")).toBeVisible();
    await expect(page.getByLabel("姓名 *")).toBeDisabled();
    await expect(page.getByRole("button", { name: "儲存" })).toHaveCount(0);
    await page.getByRole("tab", { name: "RR" }).click();
    await expect(page.getByLabel("家庭")).toHaveValue("已婚，一個仔讀小學");
    await expect(page.getByText("RR・家庭").first()).toBeVisible(); // 修改記錄

    const sb = await apiAs(ADMIN);
    const { data: upd } = await sb.from("clients").update({ stage: "ISSUED" }).eq("id", client1Id).select("id");
    expect(upd).toEqual([]);

    await page.goto("/admin/audit");
    await expect(page.getByText(`客戶：${CLIENT_1}`).first()).toBeVisible();
  });

  test("主管停用員工 B 後，B 登入唔到、API 都攞唔到資料", async ({ page }) => {
    const sbB = await apiAs(B); // 停用前已登入嘅 session
    await login(page, ADMIN);
    await page.goto("/admin/staff");
    page.once("dialog", (d) => d.accept());
    await page.getByRole("row").filter({ hasText: B.email }).getByRole("button", { name: "停用" }).click();
    await expect(page.getByText("已停用（即時")).toBeVisible();

    const { data } = await sbB.from("clients").select("id");
    expect(data).toEqual([]);

    await page.context().clearCookies();
    await page.goto("/login");
    await page.getByLabel("電郵").fill(B.email);
    await page.getByLabel("密碼").fill(B.password);
    await page.getByRole("button", { name: "登入" }).click();
    await expect(page.getByText("電郵或密碼唔啱，或者帳戶已停用")).toBeVisible();

    // 還原
    await login(page, ADMIN);
    await page.goto("/admin/staff");
    await page.getByRole("row").filter({ hasText: B.email }).getByRole("button", { name: "重新啟用" }).click();
    await expect(page.getByText("已重新啟用")).toBeVisible();
  });
});
