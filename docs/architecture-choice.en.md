# Architecture Decision: Why This Template Uses Multi-Entry Instead of Monorepo + Turborepo

## Short Answer

For this template's goal (web + admin in one repo, heavy code sharing, fast onboarding, low ops overhead), `Vite multi-entry` is a better fit than `Monorepo + Turborepo`.

## Why Multi-Entry Is Preferred Here

### 1) Lower complexity, faster onboarding

- One `package.json`, one dependency graph, one build config.
- New contributors can run `npm install && npm run dev` and start immediately.
- For a starter template, cognitive load is significantly lower than workspace/task-pipeline setups.

### 2) Better for tightly coupled web/admin apps

- Web and admin usually share components, API wrappers, utilities, and conventions.
- In multi-entry, shared code naturally stays in one `src` tree.
- No cross-package versioning/sync overhead.

### 3) Straightforward local DX

- One dev server serves both entries:
  - `/` (web)
  - `/admin.html` (admin)
- No extra orchestrator process or task-graph learning curve.

### 4) Simpler CI/CD for template-scale projects

- A single pipeline can cover lint/type-check/build.
- Lower maintenance cost for small-to-medium teams and starter projects.

## When Monorepo + Turborepo Becomes Better

Consider monorepo when you have:

- Multiple semi-independent apps (web, admin, mobile web, docs, CLI, etc.).
- Independently versioned/published shared packages (e.g. `@company/ui`, `@company/sdk`).
- Strong need for incremental builds, remote caching, and cross-package task orchestration.
- Repo/team scale where a single-project setup becomes a bottleneck.

## Practical Recommendation

- Current template stage: keep `single-project multi-entry` for simplicity and reliability.
- Migration threshold: move to Monorepo + Turborepo when you reach both:
  - `>= 3` independent apps, and
  - shared packages that need independent lifecycle/release.

## Current Template Positioning

This template is designed for quick enterprise-style bootstrapping with:

- dual entry routing
- unified axios wrapper
- shared components/utilities
- consistent engineering standards (ESLint, Commitlint, Husky, lint-staged)

Given these goals, multi-entry is the pragmatic and correct choice at this stage.
