/* ============================================================
   ScorePlay — 後台伺服器 (Node + Express + JSON 檔案儲存)
   純積分遊戲，唔涉及任何金錢。原創程式碼。
   行法：  npm install   然後   node server.js
   開：    玩家  http://localhost:3000
          後台  http://localhost:3000/admin
   預設管理員：admin / admin123  （第一次行會自動建立，記得改密碼）
   ============================================================ */
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const https = require('https');

const DB_FILE = path.join(__dirname, 'data.json');
const PORT = process.env.PORT || 3000;

/* ---------- 簡單 JSON 儲存 ---------- */
let db;
function loadDB() {
  try { db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
  catch (e) { db = null; }
  if (!db) db = seed();
  db.users   = db.users   || [];
  db.matches = db.matches || [];
  db.bets    = db.bets    || [];
  db.seq     = db.seq     || { user: 1, match: 1, bet: 1 };
  if (db.announcement == null) db.announcement = '歡迎嚟到 ScorePlay！純積分遊戲，祝你眼光精準 🎯';
}
let saveTimer = null;
function saveDB() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2)), 120);
}
function nextId(k) { const v = db.seq[k]++; return v; }

/* ---------- 密碼雜湊 ---------- */
function hashPw(pw, salt) {
  salt = salt || crypto.randomBytes(16).toString('hex');
  const h = crypto.scryptSync(pw, salt, 32).toString('hex');
  return { salt, hash: h };
}
function checkPw(pw, salt, hash) {
  return crypto.scryptSync(pw, salt, 32).toString('hex') === hash;
}

/* ---------- token (記憶體) ---------- */
const tokens = new Map(); // token -> userId
function makeToken(uid) { const t = crypto.randomBytes(24).toString('hex'); tokens.set(t, uid); return t; }
function userFromReq(req) {
  const a = req.headers.authorization || '';
  const t = a.replace(/^Bearer\s+/i, '');
  const uid = tokens.get(t);
  if (!uid) return null;
  return db.users.find(u => u.id === uid) || null;
}
function auth(req, res, next) {
  const u = userFromReq(req);
  if (!u) return res.status(401).json({ error: '請先登入' });
  req.user = u; next();
}
function adminOnly(req, res, next) {
  if (!req.user || !req.user.isAdmin) return res.status(403).json({ error: '需要管理員權限' });
  next();
}
function pubUser(u) { return { id: u.id, username: u.username, points: u.points, isAdmin: !!u.isAdmin }; }

/* ---------- 種子資料 ---------- */
function seed() {
  const admin = hashPw('admin123');
  return {
    seq: { user: 2, match: 1, bet: 1 },
    users: [{ id: 1, username: 'admin', salt: admin.salt, hash: admin.hash, points: 0, isAdmin: true, createdAt: Date.now() }],
    announcement: '歡迎嚟到 ScorePlay！純積分遊戲，祝你眼光精準 🎯',
    matches: [],
    bets: []
  };
}

/* ---------- 真實賽程：免費數據源 TheSportsDB（唔使登記） ---------- */
const FEEDS = [
  { id: '4346', sport: '足球', name: '美職聯' },
  { id: '4351', sport: '足球', name: '巴甲' },
  { id: '4328', sport: '足球', name: '英超' },
  { id: '4335', sport: '足球', name: '西甲' },
  { id: '4332', sport: '足球', name: '意甲' },
  { id: '4331', sport: '足球', name: '德甲' },
  { id: '4334', sport: '足球', name: '法甲' }
];
function httpsGetJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
    }).on('error', reject);
  });
}
/* 由勝率產生「皇冠款」亞洲盤賠率（原創計法，加水位 margin） */
function genOdds(pHome) {
  pHome = Math.max(0.18, Math.min(0.72, pHome));
  let pDraw = 0.22 + (0.5 - Math.abs(0.5 - pHome)) * 0.2;
  let pAway = 1 - pHome - pDraw;
  if (pAway < 0.08) { pAway = 0.08; pDraw = 1 - pHome - pAway; }
  const M = 1.07; // overround / 水位
  const od = p => Math.max(1.05, +((1 / p) / M).toFixed(2));
  // 亞洲讓球：強弱差 -> 盤口
  const diff = pHome - pAway;
  let line = '0';
  if (diff > 0.34) line = '-1.5'; else if (diff > 0.18) line = '-1'; else if (diff > 0.06) line = '-0.5';
  else if (diff < -0.34) line = '+1.5'; else if (diff < -0.18) line = '+1'; else if (diff < -0.06) line = '+0.5';
  const water = () => +(1.78 + Math.random() * 0.18).toFixed(2); // 0.85~0.95 水位
  return {
    o: [od(pHome), od(pDraw), od(pAway)],
    hdp: { line, h: water(), a: water() },
    ou: { line: ['2.0', '2.5', '3.0'][Math.floor(Math.random() * 3)], o: water(), u: water() }
  };
}
function fmtTime(ts) {
  if (!ts) return '待定';
  const d = new Date(ts + 'Z'.replace('Z', '')); // ts already ISO
  try { const dt = new Date(ts); return dt.toLocaleString('zh-HK', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }); }
  catch (e) { return ts; }
}
function mapEvent(ev, feed) {
  const strength = 0.30 + Math.random() * 0.40; // 隨機主隊強度（示範；真賠率要付費feed）
  return Object.assign({
    id: nextId('match'), src: ev.idEvent, sport: feed.sport, league: ev.strLeague || feed.name,
    live: false, status: 'upcoming', time: fmtTime(ev.strTimestamp || ev.dateEvent),
    home: ev.strHomeTeam, away: ev.strAwayTeam, hs: '-', as: '-', result: null
  }, genOdds(strength));
}
async function importFixtures(leagueId, makeLiveN) {
  const feed = FEEDS.find(f => f.id === String(leagueId)) || { id: String(leagueId), sport: '足球', name: '聯賽' };
  const j = await httpsGetJson(`https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=${feed.id}`);
  const events = (j && j.events) || [];
  let added = 0;
  events.slice(0, 8).forEach((ev, i) => {
    if (!ev.strHomeTeam || !ev.strAwayTeam) return;
    if (db.matches.find(m => m.src === ev.idEvent)) return;
    const m = mapEvent(ev, feed);
    if (i < (makeLiveN || 0)) { m.live = true; m.status = 'live'; m.time = "進行中 " + (5 + i * 12) + "'"; m.hs = 0; m.as = 0; }
    db.matches.push(m); added++;
  });
  saveDB();
  return added;
}

/* ---------- 伺服器端即時模擬（賠率浮動 / 比分跳動） ---------- */
function nudge(v) { if (!v) return v; const d = (Math.random() - 0.5) * 0.14; return Math.max(1.05, Math.min(9.90, +(v + d).toFixed(2))); }
function simulate() {
  let changed = false;
  for (const m of db.matches) {
    if (m.status !== 'live') continue;
    changed = true;
    m.o = m.o.map(v => nudge(v));
    m.hdp.h = nudge(m.hdp.h); m.hdp.a = nudge(m.hdp.a);
    m.ou.o = nudge(m.ou.o);   m.ou.u = nudge(m.ou.u);
    const mm = String(m.time).match(/(\d+)'/);
    if (mm) { const mn = Math.min(90, +mm[1] + 1); m.time = m.time.replace(/\d+'/, mn + "'"); }
    if (Math.random() < 0.05) {
      if (Math.random() < 0.5) m.hs = (+m.hs || 0) + 1; else m.as = (+m.as || 0) + 1;
    }
  }
  if (changed) saveDB();
}
setInterval(simulate, 3000);

/* ---------- 結算：開賽果 -> 派彩 ---------- */
function settleMatch(m) {
  if (!m.result) return 0;
  let settled = 0;
  for (const b of db.bets) {
    if (b.matchId !== m.id || b.status !== 'open') continue;
    let won = false;
    if (b.market === '1x2') won = (b.pick === m.result);          // pick: '1'|'X'|'2'
    else if (b.market === 'hdp') won = false;                      // 讓球/大細：示範用，預設不自動派(可手動)
    else if (b.market === 'ou') won = false;
    // 簡化：示範版淨係自動結算 1X2；其他盤口可喺後台手動調整積分
    if (b.market === '1x2') {
      b.status = won ? 'won' : 'lost';
      if (won) { const u = db.users.find(x => x.id === b.userId); if (u) u.points += b.potential; }
      settled++;
    }
  }
  return settled;
}

/* ============================================================
   HTTP
   ============================================================ */
function fallbackMatches() {
  const demo = [
    ['足球','英超','利物浦','阿仙奴',true],['足球','英超','曼城','車路士',false],
    ['足球','西甲','皇馬','巴塞',false],['足球','德甲','拜仁','多蒙特',false]
  ];
  demo.forEach((d, i) => {
    const m = Object.assign({ id: nextId('match'), src: 'demo' + i, sport: d[0], league: d[1],
      live: d[4], status: d[4] ? 'live' : 'upcoming', time: d[4] ? "進行中 " + (10 + i * 8) + "'" : '稍後開賽',
      home: d[2], away: d[3], hs: d[4] ? 0 : '-', as: d[4] ? 0 : '-', result: null }, genOdds(0.35 + Math.random() * 0.3));
    db.matches.push(m);
  });
  saveDB();
}

loadDB();
(async () => {
  if (db.matches.length === 0) {
    try {
      await importFixtures('4346', 2);   // 美職聯（夏季有波），頭2場做即場demo
      await importFixtures('4351', 0);   // 巴甲
      await importFixtures('4328', 0);   // 英超
      await importFixtures('4335', 0);   // 西甲
      if (db.matches.length < 5) fallbackMatches();  // 真實賽程太少（淡季）就補樣板
      console.log('已匯入真實賽程，共 ' + db.matches.length + ' 場');
    } catch (e) {
      console.log('匯入真實賽程失敗（可能離線），改用備用樣板：' + e.message);
      fallbackMatches();
    }
  }
})();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ---- 帳戶 ---- */
app.post('/api/register', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: '請填用戶名同密碼' });
  if (String(username).length < 2) return res.status(400).json({ error: '用戶名太短' });
  if (db.users.find(u => u.username.toLowerCase() === String(username).toLowerCase()))
    return res.status(400).json({ error: '呢個用戶名已經有人用' });
  const { salt, hash } = hashPw(String(password));
  const u = { id: nextId('user'), username: String(username), salt, hash, points: 1000, isAdmin: false, createdAt: Date.now() };
  db.users.push(u); saveDB();
  res.json({ token: makeToken(u.id), user: pubUser(u) });
});
app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};
  const u = db.users.find(x => x.username.toLowerCase() === String(username || '').toLowerCase());
  if (!u || !checkPw(String(password || ''), u.salt, u.hash)) return res.status(401).json({ error: '用戶名或密碼錯誤' });
  res.json({ token: makeToken(u.id), user: pubUser(u) });
});
app.get('/api/me', auth, (req, res) => res.json({ user: pubUser(req.user) }));

/* ---- 公開資料 ---- */
app.get('/api/matches', (req, res) => res.json({ matches: db.matches, announcement: db.announcement }));
app.get('/api/leaderboard', (req, res) => {
  const top = db.users.filter(u => !u.isAdmin).sort((a, b) => b.points - a.points).slice(0, 20)
    .map((u, i) => ({ rank: i + 1, username: u.username, points: u.points }));
  res.json({ leaderboard: top });
});

/* ---- 預測（落注） ---- */
app.post('/api/predict', auth, (req, res) => {
  const { matchId, market, pick, label, odd, stake } = req.body || {};
  const m = db.matches.find(x => x.id === matchId);
  if (!m) return res.status(404).json({ error: '搵唔到呢場賽事' });
  if (m.status === 'finished') return res.status(400).json({ error: '呢場已經完咗' });
  const st = Math.floor(+stake);
  if (!st || st < 1) return res.status(400).json({ error: '請輸入有效積分' });
  if (st > req.user.points) return res.status(400).json({ error: '積分唔夠' });
  const od = +odd || 1;
  req.user.points -= st;
  const bet = { id: nextId('bet'), userId: req.user.id, matchId, market, pick, label,
    odd: od, stake: st, potential: Math.round(st * od), status: 'open', createdAt: Date.now() };
  db.bets.push(bet); saveDB();
  res.json({ bet, points: req.user.points });
});
app.get('/api/mybets', auth, (req, res) => {
  const list = db.bets.filter(b => b.userId === req.user.id).sort((a, b) => b.createdAt - a.createdAt);
  res.json({ bets: list });
});

/* ============================================================
   管理後台 API
   ============================================================ */
app.post('/api/admin/match', auth, adminOnly, (req, res) => {
  const m = req.body || {};
  if (m.id) {
    const ex = db.matches.find(x => x.id === m.id);
    if (!ex) return res.status(404).json({ error: '搵唔到' });
    Object.assign(ex, m);
    if (ex.live && ex.status === 'upcoming') ex.status = 'live';
  } else {
    m.id = nextId('match');
    m.status = m.live ? 'live' : 'upcoming';
    m.result = null;
    m.o = m.o || [2.0, 3.0, 3.0];
    m.hdp = m.hdp || { line: '0', h: 1.9, a: 1.9 };
    m.ou = m.ou || { line: '2.5', o: 1.9, u: 1.9 };
    if (m.hs == null) m.hs = '-'; if (m.as == null) m.as = '-';
    db.matches.push(m);
  }
  saveDB(); res.json({ ok: true, match: m });
});
app.delete('/api/admin/match/:id', auth, adminOnly, (req, res) => {
  const id = +req.params.id;
  db.matches = db.matches.filter(x => x.id !== id);
  saveDB(); res.json({ ok: true });
});
app.post('/api/admin/result', auth, adminOnly, (req, res) => {
  const { matchId, hs, as, result, status } = req.body || {};
  const m = db.matches.find(x => x.id === matchId);
  if (!m) return res.status(404).json({ error: '搵唔到' });
  if (hs != null) m.hs = hs;
  if (as != null) m.as = as;
  if (status) { m.status = status; if (status !== 'live') m.live = false; if (status === 'live') m.live = true; }
  let settled = 0;
  if (result) { m.result = result; m.status = 'finished'; m.live = false; settled = settleMatch(m); }
  saveDB(); res.json({ ok: true, match: m, settled });
});
app.post('/api/admin/announcement', auth, adminOnly, (req, res) => {
  db.announcement = String((req.body || {}).text || ''); saveDB(); res.json({ ok: true });
});
app.get('/api/admin/users', auth, adminOnly, (req, res) => {
  res.json({ users: db.users.map(u => ({ id: u.id, username: u.username, points: u.points, isAdmin: !!u.isAdmin })) });
});
app.post('/api/admin/points', auth, adminOnly, (req, res) => {
  const { userId, delta, set } = req.body || {};
  const u = db.users.find(x => x.id === userId);
  if (!u) return res.status(404).json({ error: '搵唔到用戶' });
  if (set != null) u.points = Math.floor(+set); else u.points += Math.floor(+delta || 0);
  saveDB(); res.json({ ok: true, points: u.points });
});

app.post('/api/admin/import', auth, adminOnly, async (req, res) => {
  const { leagueId, live } = req.body || {};
  try { const n = await importFixtures(leagueId || '4328', +live || 0); res.json({ ok: true, added: n, total: db.matches.length }); }
  catch (e) { res.status(500).json({ error: '匯入失敗（伺服器要連到網絡）：' + e.message }); }
});
app.get('/api/admin/feeds', auth, adminOnly, (req, res) => res.json({ feeds: FEEDS }));
app.get('/api/admin/stats', auth, adminOnly, (req, res) => {
  const players = db.users.filter(u => !u.isAdmin);
  const openBets = db.bets.filter(b => b.status === 'open');
  const totalPoints = players.reduce((s, u) => s + (u.points || 0), 0);
  const wagered = openBets.reduce((s, b) => s + (b.stake || 0), 0);
  const top = players.slice().sort((a, b) => b.points - a.points)[0];
  res.json({
    players: players.length,
    totalPoints,
    wagered,
    openBets: openBets.length,
    bets: db.bets.length,
    matches: {
      total: db.matches.length,
      live: db.matches.filter(m => m.status === 'live').length,
      upcoming: db.matches.filter(m => m.status === 'upcoming').length,
      finished: db.matches.filter(m => m.status === 'finished').length
    },
    topPlayer: top ? { username: top.username, points: top.points } : null
  });
});

app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));

app.listen(PORT, () => {
  console.log('ScorePlay 伺服器已啟動');
  console.log('  玩家： http://localhost:' + PORT);
  console.log('  後台： http://localhost:' + PORT + '/admin   (admin / admin123)');
});
