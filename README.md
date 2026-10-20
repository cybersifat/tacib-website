# TACIB Website Redesign — Cloudflare Pages Starter

This is a multi-page, static website using HTML, CSS, and JavaScript. It requires no package manager, build tool, database, or paid hosting for normal static deployment.

## Pages included
- Home
- About TACIB and operating principles
- Services and scope boundaries
- Intelligence & Research
- Knowledge Center with client-side guide search
- Cyber Help & Reporting with official Bangladesh resources
- Contact inquiry builder (opens visitor's email application; does not submit/store a form)
- Responsible Disclosure
- Privacy Notice (draft to review)
- Terms of Use (draft to review)
- Careers & Collaboration
- Four practical guides
- 404 page, robots.txt, sitemap.xml

## IMPORTANT before going live
1. Open `site-config.js` and verify `contactEmail`. It currently uses `tacib.info@gmail.com`, an address shown on the previous public TACIB site. Replace it if the inbox is no longer monitored. This address appears in the email builder fallback and user-visible contact page.
2. Review service descriptions to ensure they match real capability, authorized scope, and available time. Advanced services such as 24/7 monitoring, forensics, malware cleanup, guaranteed account recovery, and emergency takedowns are intentionally not advertised as available.
3. The Privacy Notice and Terms of Use are drafts; review for your actual practices and applicable requirements before publication.
4. Confirm official resource URLs and contact details periodically.
5. There is no backend contact form, blog CMS, customer portal, payment system, analytics integration, or automatic threat feed. The inquiry form prepares an email draft locally in the visitor's email application.
6. The site uses Google Fonts by CSS import. If you prefer no third-party font request, remove the `@import` from `styles.css`; system fonts will be used as fallback. For stricter privacy, self-host a licensed font or remove the import.

## Local preview
Open `index.html` in a browser. For better route testing, use VS Code with Live Server or any static local web server.

## GitHub + Cloudflare Pages deployment
1. Download and extract this ZIP.
2. Create or open your `tacib-website` GitHub repository.
3. Replace the previous starter files with the full contents of this package. `index.html`, `styles.css`, `script.js`, and `site-config.js` must be in the repository root. Also upload the root HTML pages, `knowledge/`, `assets/`, `robots.txt`, `sitemap.xml`, and `404.html`.
4. In Cloudflare Dashboard → Workers & Pages → your Pages project, verify that Git integration points at the correct repository and branch.
5. Plain static site: Framework preset `None`, build command `exit 0` (or empty if the dashboard accepts that), build output directory `.` / repository root. Redeploy.
6. Test the generated `*.pages.dev` preview before connecting the production domain.
7. In Pages → Custom domains, confirm `tacib.net` is attached. Also add `www.tacib.net` as a custom domain if desired, then configure a redirect from `www.tacib.net` to `https://tacib.net` or the reverse, consistently. Test both.
8. Because the site was previously a single-page starter, verify all old links and page names after deployment. Commit changes through GitHub to trigger redeployment.

## Email and DNS warning
Do not delete DNS records for domain email when connecting hosting. Preserve MX, SPF, DKIM, and DMARC records if the domain is configured to send or receive mail. A visible email address does not prove that the mailbox exists or is monitored.

## Suggested next improvements (after launch)
- Add professionally reviewed Bangla translations and a real language switch.
- Add an editorial workflow and original research articles with publication date/source references.
- Add a privacy-reviewed contact backend only when there is a safe, maintained method for receiving and handling submissions.
- Add a scoped service request/authorization form after the intake process is ready.
- Set up redirects from old Jimdo URLs where possible to relevant new pages; retain the old site until critical links are mapped.
