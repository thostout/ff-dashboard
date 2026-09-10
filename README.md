# Fantasy Football Co-Pilot

A tool for managing an ESPN fantasy football team: live scoreboard, roster
conflict checks, waiver/trade suggestions, and a news layer — built to
practice the full lifecycle of a real web app, not just the happy path.

**Status:**  In progress — Step 0 (repo setup)

## Stack

- **Frontend:** React + TypeScript (Vite)
- **Backend:** Express + TypeScript
- **Database:** SQLite
- **CI:** GitHub Actions
- **Data source:** ESPN Fantasy Football API (private league, auth via cookies)

## Why this project

Built to deliberately practice, in order:

- Breaking a vague goal into shippable pieces
- Version control discipline (branches, PRs, not breaking `main`)
- Handling failure — bad data, dead APIs, empty states
- Modeling and storing data sensibly
- Deploying and keeping something alive
- Reading unfamiliar code/docs quickly (ESPN's API is undocumented)

## Roadmap

- [x] **0** — Repo, `.gitignore`, README, branch/PR workflow
- [ ] **1** — Skeleton: `web/` (Vite + React) + `server/` (Express), TS, one working fetch
- [ ] **2** — CI: typecheck + dummy test on every PR, branch protection on
- [ ] **3** — ESPN API auth (league ID + cookies in `.env`), render roster names
- [ ] **3.5** — Live scoreboard for current matchup
- [ ] **4** — SQLite schema + refresh script
- [ ] **5** — Bye weeks + roster conflict flags
- [ ] **5.5** — Saturday check: injured/questionable/bye flagged in red
- [ ] **6** — Player valuation function
- [ ] **7** — Waiver wire view
- [ ] **8** — Trade finder
- [ ] **9** — News layer via Claude API
- [ ] **10** — Deploy

## Project structure (planned)

```
.
├── web/       # React frontend (Vite)
├── server/    # Express backend
├── .github/   # CI workflows
└── README.md
```

## Local setup

_Coming in Step 1._

## Development workflow

1. Branch off `main`: `git checkout -b <type>/<short-description>`
   (types: `feat`, `fix`, `chore`, `docs`)
2. Commit in small, focused chunks with clear messages
3. Push and open a PR into `main`
4. CI must pass before merging (once Step 2 is set up)
5. Delete the branch after merging
