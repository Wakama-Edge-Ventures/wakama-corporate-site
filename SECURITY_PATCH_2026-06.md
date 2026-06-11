# SECURITY PATCH 2026-06

## Scope

- Repository: `wakama-corporate-site`
- Production targets: `https://wakama.farm`, `https://www.wakama.farm`
- Coolify resource expected: `wakama-web-site-corporate`
- Goal: patch runtime dependencies without changing design, content, routes, or functional behavior

## Next.js Version

- Before: `15.5.15`
- After: `15.5.19`

Related lock/runtime tree after patch:

- `next@15.5.19`
- `eslint-config-next@15.5.19`
- `next -> postcss@8.5.15` via `overrides`
- `brace-expansion@5.0.6` via `overrides`

## Advisories Concerned

Initial `npm audit --omit=dev`:

- `next` high severity advisory bundle reported by npm audit, including:
  - `GHSA-8h8q-6873-q5fj`
  - `GHSA-26hh-7cqf-hhc6`
  - `GHSA-3g8h-86w9-wvmq`
  - `GHSA-ffhc-5mcf-pf4q`
  - `GHSA-vfv6-92ff-j949`
  - `GHSA-gx5p-jg67-6x7h`
  - `GHSA-mg66-mrh9-m8jx`
  - `GHSA-h64f-5h5j-jqjh`
  - `GHSA-c4j6-fc7j-m34r`
  - `GHSA-492v-c6pp-mqqv`
  - `GHSA-wfc6-r584-vfw7`
  - `GHSA-267c-6grr-h53f`
  - `GHSA-36qx-fr4f-26g5`
- `postcss` moderate: `GHSA-qx2v-qp2m-jg93`

Initial full `npm audit` also reported:

- `brace-expansion` moderate: `GHSA-jxxr-4gwj-5jf2`

## Audit Results

Before patch:

- `npm audit --omit=dev`: `2` vulnerabilities (`1 high`, `1 moderate`)
- `npm audit`: `3` vulnerabilities (`1 high`, `2 moderate`)

After patch:

- `npm audit --omit=dev`: `0 vulnerabilities`
- `npm audit`: `0 vulnerabilities`

Audit artifacts generated:

- `/tmp/wakama-corporate-audit-full.json`
- `/tmp/wakama-corporate-audit-prod.json`
- `/tmp/wakama-corporate-audit-full-final.json`
- `/tmp/wakama-corporate-audit-prod-final.json`

## Files Modified

- `package.json`
- `package-lock.json`
- `SECURITY_PATCH_2026-06.md`

## Secrets Verification

Checks performed:

- `git ls-files | grep -E '(^|/)\\.env($|\\.)'`
- `git check-ignore -v .env.local`
- `git grep -n "process\\.env"`
- `git grep -n "NEXT_PUBLIC_"`

Results:

- Only `.env.example` is tracked
- `.env.local` is ignored by `.gitignore`
- No `NEXT_PUBLIC_` variables were found
- `process.env` usage is limited to server-side SMTP handling in `src/app/api/pilot-request/route.ts`
- No hardcoded keys, tokens, or passwords were found in tracked source files during this pass

## Server Routes And System Call Search

Relevant routes reviewed:

- `src/app/api/pilot-request/route.ts`
- `src/middleware.ts`

System call search performed:

- `git grep -n -E 'child_process|execSync|exec\\(|spawn\\(|eval\\(|new Function|wget|curl ' -- ':!package-lock.json'`

Results:

- No `child_process`, `exec`, `spawn`, `eval`, `new Function`, `wget`, or shelling-out patterns found in tracked app code
- The API route returns generic `400` / `500` JSON responses and does not expose stack traces to clients
- Middleware is limited to locale routing with `next-intl`

## Node And Coolify

Repository constraints after patch:

- `package.json` now includes:
  - `"engines": { "node": "20.x" }`

Files checked:

- `.nvmrc`: not present
- `.node-version`: not present
- `nixpacks.toml`: not present

Coolify requirement to set:

- `NIXPACKS_NODE_VERSION=20`

Application variables still required at deploy time, without values:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM_EMAIL`
- `SMTP_TO_EMAIL`
- optional compatibility variables still read by the route:
  - `RESEND_FROM_EMAIL`
  - `RESEND_TO_EMAIL`

## Validation Results

Clean install flow executed on Node `20.20.2`:

1. `rm -rf node_modules && npm install`
2. `rm -rf node_modules && npm ci`

Dependency tree validation:

- `next@15.5.19`
- `react@19.2.5`
- `react-dom@19.2.5`
- root `postcss@8.5.12`
- nested `next -> postcss@8.5.15` via override

Checks executed:

- `npm audit --omit=dev`: green
- `npm audit`: green
- `npm run lint`: green
- `npm run build`: green

Build result:

- Production build completed successfully on `Next.js 15.5.19`
- App routes and static generation completed successfully

## HTTP Smoke Tests

Local production server tested with `PORT=3014 npm run start`.

Headers observed:

- `GET /` -> `307 Temporary Redirect` to `/fr`
- `GET /fr` -> `200 OK`
- `GET /en` -> `200 OK`
- `GET /fr/company` -> `200 OK`
- `GET /en/pilot` -> `200 OK`
- `GET /fr/platform` -> `200 OK`

## Residual Risks

- Install still emits deprecation warnings from older lint/tooling packages, but these are not currently audit findings
- `X-Powered-By: Next.js` remains enabled; preserved to avoid changing behavior/config unexpectedly
- The working tree already contained unrelated user changes and suspicious `Zone.Identifier` filename artifacts before this patch; they were not modified by this work

## Verdict

`READY_FOR_REDEPLOYMENT`

The application is locally validated, audit-clean, and constrained to Node 20 for the next clean deployment. Push/deployment should still respect the unrelated working tree state noted above.
