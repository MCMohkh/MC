# MC Joint — mcjoint.in

Static site (HTML/CSS/JS), deployed on Netlify. Primary domain: `https://mcjoint.in` (apex).

## Structure
- `/` home · `/about.html` · `/contact.html`
- `/services.html` — core services (production, music & sound, talent management, digital strategy), Branding & Design, Digital Footprint
  - `/services/branding-design.html`, `/services/digital-footprint.html`, `imdb-management`, `wikipedia-consulting`, `google-knowledge-panel`, `pr-notability`
- `/clients/` — hub · `businesses.html` (ongoing working relationships) · `associates.html` (friends we occasionally work with) · `talent.html` + `talent/<slug>.html` (individuals)
- `/works.html` — work for client businesses · `/works/projects.html` — individual projects, each at `/works/<slug>.html`
- `/blog.html` — journal index; posts live in `/blog/<slug>.html` (add new posts to `feed.xml` and `sitemap.xml`)
- `/thestylemill/` — event microsite · `/PR-DB/` — private, noindex

## Conventions
- Images: WebP in `/images/…`, lowercase kebab-case names, each under 2 MB. Social-card (`og:image`) images stay JPG/PNG.
- Header, mobile menu and footer are identical on every page — change them everywhere together.
- Talent page templates live in `clients/talent/template-*.html` and are blocked from serving by `_redirects`.
- Merged/removed pages are redirected in `_redirects`.
