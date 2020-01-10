#txt.sx theme

Templates and styles for txt.sx and it's children, using an ultralight and simple static generator.

**`/output` is neither synced with git nor safe from destructive changes**

Requires:
Jinja2  - templating (pip install Jinja2)
Flask  (optional) for development and testing. (pip install Flask)

Options:
-STATIC_PREFIX can be supplied to point to location of static content.

Run:
-test-server.py - to test templates in browser during development.
-build-static.py - to generate static "output" directory that can be copied to nginx or apache.



=================================================
Links
-https://jinja.palletsprojects.com/en/2.10.x/api/
