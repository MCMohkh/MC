# MC Joint — mcjoint.in

Static site (HTML/CSS/JS), deployed on Netlify. Primary domain: `https://mcjoint.in` (apex).

## Structure
- `/` home · `/about.html` · `/contact.html`
- `/services.html` — core services (production, music & sound, talent management, digital strategy), Branding & Design, Digital Footprint
  - `/services/branding-design.html`, `/services/digital-footprint.html`, `imdb-management`, `wikipedia-consulting`, `google-knowledge-panel`, `pr-notability`
- `/clients/` — hub · `businesses.html` (ongoing working relationships) · `associates.html` (friends we occasionally work with) · `talent.html` + `talent/<slug>.html` (individuals)
- `/works.html` — work for client businesses · `/works/projects.html` — individual projects, each at `/works/<slug>.html`
- `/get-represented.html` — intake form (music distribution / representation) · `/contact-talent.html` — enquiries for a specific artist (noindex; every talent profile links to it with `?talent=<slug>`)
- `/talent-management-hyderabad.html`, `/music-distribution-hyderabad.html`, `/film-marketing-hyderabad.html` — Hyderabad landing pages · `/faq.html` (FAQPage schema)
- `/case-studies/` — hub + `avanti-cinema`, `tapeloop-records`, `pickpocket`
- `/blog.html` — journal index; posts live in `/blog/<slug>.html` (add new posts to `feed.xml` and `sitemap.xml`)
- `/thestylemill/` — event microsite · `/PR-DB/` — private, noindex

## Conventions
- Images: WebP in `/images/…`, lowercase kebab-case names, each under 2 MB. Social-card (`og:image`) images stay JPG/PNG.
- Header, mobile menu and footer are identical on every page — change them everywhere together.
- Talent page templates live in `clients/talent/template-*.html` and are blocked from serving by `_redirects`.
- Merged/removed pages are redirected in `_redirects`.

## Forms (Netlify Forms)
`contact`, `representation`, `talent-enquiry` — all post to `/thanks.html`. Set up email notifications in Netlify → Forms → Form notifications.
