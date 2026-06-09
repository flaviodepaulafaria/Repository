# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config, JS/JSX only)
- `npm run preview` — Preview production build

## Git Workflow

### Branch Naming

Branches follow the pattern `<type>/<short-description>` using kebab-case:

| Type | When to use |
|---|---|
| `feat/` | New feature or functionality |
| `fix/` | Bug fix |
| `refactor/` | Code restructuring without behavior change |
| `chore/` | Tooling, deps, config, CI — no production code |
| `docs/` | Documentation only |
| `test/` | Adding or fixing tests |
| `hotfix/` | Urgent fix that goes directly to `master` |

Examples: `feat/employer-dashboard`, `fix/login-redirect-loop`, `chore/update-vite-7`.

- Keep descriptions short (2–4 words) and in English.
- No ticket numbers in branch names unless the team starts using an issue tracker — keep names self-explanatory.
- Delete branches after merging (`git branch -d` locally, delete on remote).

### Commit Messages

Follow **Conventional Commits** (`<type>(<scope>): <subject>`):

```
feat(auth): add remember-me checkbox to login form
fix(jobs): prevent duplicate application on double-click
refactor(context): split JobContext into apply and save slices
chore(deps): upgrade react-router to 7.6
```

Rules:
- Subject line ≤ 72 characters, imperative mood ("add", not "added" or "adds").
- No period at the end of the subject line.
- Leave a blank line before the optional body.
- Body explains **why**, not what — the diff already shows what changed.
- Never use `--no-verify` to skip hooks; fix the underlying lint/test issue instead.

Allowed types: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `style`, `perf`, `ci`.
Allowed scopes (loose): `auth`, `jobs`, `employer`, `admin`, `ui`, `context`, `services`, `deps`, `config`.

### Pull Requests

**Before opening a PR:**
1. `npm run lint` must pass with zero errors.
2. `npm run build` must succeed.
3. Manually smoke-test the feature/fix in the browser (`npm run dev`).
4. Rebase or merge `master` into your branch to stay current — resolve all conflicts locally.

**PR title** mirrors the commit subject: `feat(employer): add applicant status filter`.

**PR description must include:**
- **What** — one-sentence summary of the change.
- **Why** — motivation or linked issue.
- **How to test** — concrete steps a reviewer can follow in the browser.
- **Screenshots** — required for any UI change.

**Review checklist (author self-review before requesting):**
- [ ] No `console.log` or debug statements left in code.
- [ ] No hardcoded strings that should be constants or config.
- [ ] New localStorage keys added to the key list in this file.
- [ ] Context provider nesting order in `App.jsx` unchanged (or updated here if it changed).
- [ ] ESLint passes; no new `eslint-disable` comments without explanation.
- [ ] Accessible: interactive elements have labels, color is not the sole indicator.

**Reviewer responsibilities:**
- Approve only when all checklist items are satisfied.
- Leave actionable comments — "nit:", "suggestion:", or "blocker:" prefixes help triage.
- Do not approve your own PR unless it is a solo `chore` or `docs` commit.

**Merge strategy:** Squash-and-merge into `master` to keep history linear. The squash commit message must follow Conventional Commits format.

## Architecture

React 19 SPA using Vite 7, Tailwind CSS 4, and React Router 7. No TypeScript — plain JSX throughout.

### State Management

Two layers of React Context:

- **`src/context/`** — Core contexts: `AuthContext` (auth + dummy users + localStorage persistence), `JobContext` (applications, saved jobs, employer job CRUD), `ThemeContext`
- **`src/contexts/`** — Data-fetching contexts: `JobsDataContext` (cached job list with 5-min TTL), `CompaniesContext`

Provider nesting order (in App.jsx): AuthProvider → JobsDataProvider → JobProvider → CompaniesProvider → ThemeProvider

### Data Layer

Currently uses **mock data** with localStorage persistence — no real backend. Services in `src/services/` simulate async API calls using `delay()` from `src/utils/delay.js`. Data originates from `src/data/mockData.js`.

Key localStorage keys: `jobPortalUser`, `authToken`, `registeredUsers`, `globalPostedJobs`, `jobApplications_{userId}`, `savedJobs_{userId}`, `postedJobs_{userId}`.

### Routing & Roles

Three roles with route protection via `ProtectedRoute` component:
- **ROLE_JOB_SEEKER** — profile, applied-jobs, saved-jobs
- **ROLE_EMPLOYER** — post-job, employer/jobs, job-applicants/:jobId
- **ROLE_ADMIN** — admin/*, admin pages in `src/pages/admin/`

### Key Libraries

- Font Awesome + Lucide React for icons
- react-toastify for notifications

### ESLint

Flat config (`eslint.config.js`). The `no-unused-vars` rule ignores variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`).
