# 海洋 · 估波遊戲 (Ocean — Sports Prediction Game)

A points-only sports **prediction** game. Players predict match winners, earn points for correct picks, and climb a leaderboard.

> **Not gambling / 唔係賭博:** points are a game score only — they cannot be bought, cannot be cashed out, and are not connected to any money. Predicting is free; a correct pick **earns** points and a wrong pick **deducts nothing** (gain-only). Real odds are used only to weight scoring difficulty (a correct underdog pick is worth more) and for display — there is no staking and no odds-based payout on a wager.

## Status
- **v1 prototype** — single file `海洋.html`, runs in any browser, mobile-first.
- Accounts + points currently stored client-side (localStorage) for demo.
- Uses **sample fixtures** so you can see the flow.

## Screens
- **Login / Register** — players self-register (name + password).
- **賽事 (Matches)** — real fixtures; tap to predict a winner; correct picks earn `round(odds × 10)` points, wrong picks earn 0.
- **排行榜 (Leaderboard)** — ranked by total points (game score only).

## Run it
Open `海洋.html` in a browser. Add `?demo=1` to preview gameplay without logging in.

## Next: live data (betsapi)
`fetchMatches()` in `海洋.html` is the single integration point. Plug a betsapi (or the-odds-api / api-sports.io) call there to return live fixtures, odds, and results — everything else already works off that shape:
```js
{ id, lg, t, h:{n,f}, a:{n,f}, o:{home,draw,away}, result }
```
`result` is used only to grade predictions after a match finishes.

## Theme
Ocean — deep blue / light blue / white.
