# TACIB Website — First Version

A responsive, static website for TACIB built with HTML, CSS, and JavaScript.

## Before publishing
1. Review every claim and service description for accuracy.
2. Replace `contact@tacib.net` in `index.html` if you use a different public contact address. Search for all occurrences.
3. Add real social media links only after verifying the exact profile URLs.
4. Do not publish client data, private reports, or claims of government affiliation.
5. The current contact button opens an email application; it is not a backend contact form.

## Local preview
Open `index.html` in a browser. For a closer local-server preview, use VS Code with Live Server.

## Recommended deployment: GitHub + Cloudflare Pages
1. Create a new GitHub repository named `tacib-website` (public or private is your choice).
2. Upload the contents of this folder to the repository root. Ensure `index.html`, `styles.css`, and `script.js` are at the root, not nested inside another folder.
3. In Cloudflare, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Choose the `tacib-website` repository.
5. Framework preset: **None**. Build command: `exit 0`. Build output directory: `/` if accepted by the dashboard; if the UI requires a relative folder, use the repository root / leave the build output set to the root as the UI permits.
6. Deploy and test the generated `*.pages.dev` address.
7. Open the project → **Custom domains** → **Set up a domain** → enter `tacib.net`. Follow the Cloudflare prompts.
8. Add `www.tacib.net` as a second custom domain if desired, then set up a redirect so one canonical version is used.

Cloudflare Pages Git integration automatically deploys new commits. Cloudflare states that a Git-integrated Pages project cannot later be converted into a Direct Upload project; create the project with Git integration if you want Git-based updates.

## Important
- Domain registration and website hosting are separate.
- Keep domain nameservers and DNS settings as Cloudflare instructs during custom-domain setup.
- Do not delete existing DNS records for email services. If you already use email on this domain, preserve its MX, SPF, DKIM, and DMARC records.
- Static hosting does not provide a database, user accounts, a server-side contact form, or a CMS.
