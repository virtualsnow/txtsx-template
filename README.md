# txt.sx theme

### Templates and styles for txt.sx and it's children, using an ultralight and simple static generator.

**`/output` is neither synced with git nor safe from destructive changes**

Hierarchy:
- `base` -  Basic templates for any page (header, skeleton, footer, etc.)
- `blog` -  Themes for [readme.txt.sx](https://readme.txt.sx), a static blog built on Pelican.
- `directory` - Basic content pages for [txt.sx](https://txt.sx) providing a basic directory.

**Requires:**

- Jinja2  - templating (`pip install Jinja2`)

- Flask  (optional) for development and testing. (`pip install Flask`)

**Options:**

- `STATIC_PREFIX` can be supplied to point to location of static content.

**Run:**

- `test-server.py` - to test templates in browser during development.

- `build-static.py` - to generate static "output" directory that can be copied to nginx or apache.

**Todo:**

- Safer path checking.

- Subdirectory crawling.

- Better templates.

=================================================

**Links:**
- https://jinja.palletsprojects.com/en/2.10.x/api/
