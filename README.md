# Sun Direct Renewable

Production-ready static Next.js website for Sun Direct Renewable, built for Cloudflare Workers static assets.

## Local development

```powershell
npm.cmd install
npm.cmd run dev -- --webpack
```

## Build and deploy

Cloudflare dashboard settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Output directory configured in `wrangler.jsonc`: `out`

```powershell
npm.cmd run build
npx.cmd wrangler deploy
```

Set `NEXT_PUBLIC_FORM_ENDPOINT` in Cloudflare before enabling proposal-form delivery. Configure its delivery destination as `info@sundirect.ca`; this is the required destination for every website inquiry and solar assessment. The form also submits `recipient` and `_to` as `info@sundirect.ca` for providers that support recipient fields. Without an endpoint, the form clearly reports that the submission was not sent.

## Content and media

Company information lives in `data/site.ts`. Page and FAQ content lives in `data/content.ts`; the installation gallery is managed in `data/media.ts`.

Authentic supplied photos are stored as optimized WebP files under `public/media/installations`. The two supplied MP4 videos are under `public/media/videos`.

Review `CLIENT-CONTENT-CHECKLIST.md` before launch.
