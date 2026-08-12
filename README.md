# jobready.za

Landing page for South African CVs, cover letters and LinkedIn. Every CTA opens WhatsApp at **+27 68 251 0828**.

## Hosting: GitHub Pages (best Student Pack option)

This is a static site. Of the GitHub Education hosts, **GitHub Pages is the one to use**:

| Offer | Cost after student status | Fit for this site |
| --- | --- | --- |
| **GitHub Pages** | Free forever, HTTPS included | Best. Built for static sites. |
| Namecheap / Name.com / .TECH | Free domain for 1 year | Point the domain at Pages. |
| DigitalOcean ($200 credit) | Credits expire in 12 months | Overkill for a landing page. |
| Azure ($100 credit) | Credits expire | Overkill. Static Web Apps works, then you pay. |
| Heroku ($13/mo × 24 months) | Ends after 2 years | Built for apps, not static sites. |

GitHub Pages is listed in the [Student Developer Pack](https://education.github.com/pack): one user site plus unlimited project sites.

### Deploy in about a minute

1. Create a public repo (e.g. `jobready-za`) and push this project to `main`.
2. GitHub → **Settings → Pages → Source → GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` builds and publishes on every push.
4. Site URL will be `https://<your-username>.github.io/jobready-za/`.

For a cleaner URL, create a repo named `<your-username>.github.io` and push there instead. Then the site is `https://<your-username>.github.io/`.

### Optional: free student domain

Redeem a 1-year domain from the pack (Namecheap `.me`, Name.com `.dev` / `.app`, or `.TECH`) and add a `CNAME` file in `public/` with that domain. In the registrar, set an ALIAS / ANAME to `<user>.github.io`, or A records to GitHub Pages IPs.

## WhatsApp funnel

All primary buttons open:

`https://wa.me/27682510828`

with a pre-filled message that matches where the tap came from (hero, pricing plan, LinkedIn, etc.).
