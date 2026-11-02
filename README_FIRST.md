# TechEdz — Classroom Quest Offline Product Website

This is a **complete, ready-to-publish static product website**. It has four linked pages:

- `index.html` — landing page and product introduction
- `impact.html` — potential educational impact and classroom uses (not claims of proven efficacy)
- `download.html` — Windows installer, portable app, source code, and setup instructions
- `support.html` — optional donations with your supplied InstaPay QR image

## Open locally

Double-click `index.html` in a browser to preview the website. The navigation works locally.

## Publish for free

**Option A: Cloudflare Pages** — create a Pages project using Direct Upload, then upload the **extracted folder contents** or the supplied deployment ZIP. Be sure `index.html` is at the root of the published site, not nested inside another folder. This site needs no build command, framework, or database. Individual included files are under the commonly documented 25 MiB asset limit.

**Option B: GitHub Pages** — create a repository, upload this website's files at the repository root, then enable Pages from the repository branch. Alternatively use GitHub Releases for the installer files and update the download links in `download.html`.

The website is public and online once deployed; **only the Classroom Quest game works offline**.

## InstaPay donation QR now configured

The supplied InstaPay QR is embedded and enabled on the Support page:
- `assets/img/donation-qr.png` — the original QR image with an added white quiet zone for more reliable scanning (the original code artwork is unchanged)
- `assets/img/donation-qr-original.png` — the original uploaded image
- `assets/js/config.js` — `donation.enabled = true`, provider shown as `InstaPay QR`

The donation QR remains still and crisp (it is **never animated**). Visitors can open or save the image at full size, including on a phone. On-site payments are not collected or processed. **Before publishing, scan the QR using your actual payment app and confirm it shows the intended recipient.** The developer has not independently verified the account holder. Donations are optional and never required for downloads.

To replace the QR in future, replace `assets/img/donation-qr.png` and adjust `assets/js/config.js`; use a sharp, provider-issued QR image with a white border. To temporarily disable donations, set `donation.enabled = false`.

## Motion and accessibility

- Subtle hero entry animation, score bar appearance, scroll-triggered section/card reveals, and hover effects on desktop.
- The donation QR remains stationary and high contrast.
- All animations honor `prefers-reduced-motion: reduce` and never require external animation libraries.
- Content remains visible without JavaScript; scroll reveals are opt-in enhancements only.
- Fully static website, no cookies/analytics, trackers or external assets.

## Change product downloads

Actual v3.0 release artifacts are already included under `downloads/`:

- `ClassroomQuest-Setup.exe` — Windows 64-bit installer
- `ClassroomQuest-Portable.exe` — Windows 64-bit portable application
- `ClassroomQuest-v3-Source.zip` — MIT-licensed app source code
- `QUICK_START.txt` — user guide
- `SHA256SUMS.txt` — download checksums

When releasing a new version, replace files under `downloads/`, update the product version and relative file links in `download.html` and regenerate checksums. **Never replace the downloadable application without checking its provenance and testing it.** Current v3.0 binaries are unsigned and should be tested on a real Windows computer before broad deployment.

### Using GitHub Releases instead

If you prefer keeping large executable files out of your website repository, upload them to a GitHub Release and change the href values of the Download buttons in `download.html` to the exact release asset URLs. The website can stay on a static host.

## Link your public source repository

After you publish the source, add the actual `https://...` repository URL into `githubRepositoryUrl` in `assets/js/config.js`. Source-code links in the footer will appear automatically. Leave blank if no repository exists yet.

## Edit site pages and branding

- All text lives in the `.html` pages and can be edited with a text editor.
- Colors, layout and responsive behavior: `assets/css/styles.css` (CSS variables at the top)
- Navigation, QR logic and mobile menu: `assets/js/site.js`
- Developer configuration: `assets/js/config.js`
- Logo: `assets/img/logo-mark.svg` (original vector graphic)
- No third-party scripts, fonts, cookies, analytics, build steps, or server are required.

## Accuracy & scope

- The website's illustration is a product concept, not a live screenshot.
- The game is **two-team and multiple-choice only** in the packaged v3.0 release.
- The game can run without internet over a **working local hotspot or router**, but not every hotspot allows local device-to-device traffic.
- No formal learning-improvement claim is made. It can be used as part of action research but results must be evaluated independently.
- The app is MIT licensed; the included release archive retains its LICENSE file.
- Donation access is optional and never a prerequisite for downloads.

## Basic web security

This is a static site with no server-side logins or payment processing. QR images and release files should come from accounts you control. Use HTTPS once deployed via a hosting provider. Do not place private contact information, credentials, API keys, or sensitive school data in these public files.
