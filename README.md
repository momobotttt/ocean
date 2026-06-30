# ScorePlay — 預測積分遊戲

純積分波經遊戲（**唔涉及任何金錢交易或真實投注** / virtual points only, no real money, 18+）。
前台俾玩家預測賽果贏積分，後台俾管理員管賽事、賠率、賽果同玩家積分。

## 快速開始
```bash
npm install
npm start
```
- 玩家：http://localhost:3000
- 後台：http://localhost:3000/admin  （預設 `admin` / `admin123`，登入後請改密碼）

## 技術
- Node.js + Express
- 資料存 `data.json`（JSON 檔案，零資料庫設定；首次啟動自動建立 + 種子）
- 真實賽程來自免費數據源 TheSportsDB（賠率為自動生成嘅亞洲讓球盤）
- 即場比分/賠率為伺服器端模擬，營造真實感

## 結構
- `server.js` — API + 伺服器
- `public/index.html` — 玩家前台
- `public/admin.html` — 管理後台（淺藍主題 + 儀表板）
- `README.txt` — 詳細中文說明

## 合作
歡迎一齊 fork / branch / PR。賠率模型、版面、盤口種類都可以再擴充。
