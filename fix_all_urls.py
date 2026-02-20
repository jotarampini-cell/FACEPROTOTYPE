"""
Comprehensive fix for ALL .html internal links across all HTML and JS files.
Handles large files like index.html, innova-desde-adentro.html etc.
"""
import os, re

root = r'c:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'

URL_MAP = {
    'index.html':                    '/home',
    'blog.html':                     '/blog',
    'programas.html':                '/programas',
    'metodologia-face.html':         '/metodologia',
    'evaluacion.html':               '/evaluacion',
    'quiz.html':                     '/quiz',
    'quiz-diagnostico.html':         '/quiz-diagnostico',
    'quiz-reto-ingenio.html':        '/quiz-reto-ingenio',
    'podcasts.html':                 '/podcasts',
    'podcast-detail.html':           '/podcast-detalle',
    'recursos-gratis.html':          '/recursos',
    'innova-desde-adentro.html':     '/innova',
    'blog-innovation-japonesa.html': '/blog/innovacion-japonesa',
    'blog-post.html':                '/blog/post',
    'reto-de-ingenio.html':          '/quiz-reto-ingenio',
    'galaxy_section.html':           '/galaxy',
}

SKIP_PREFIXES = ('temp_', 'old_', 'index_', 'index_FOUND', 'face_master',
                 'final_restore', 'fix_urls', 'audit_links', 'fix_all_urls')

def fix_content(content):
    original = content
    for old, new in URL_MAP.items():
        # href="old.html"  or  href="./old.html"
        content = content.replace('href="%s"' % old, 'href="%s"' % new)
        content = content.replace('href="./%s"' % old, 'href="%s"' % new)
        # JS: window.location = 'old.html' or "old.html"
        content = content.replace("'%s'" % old, "'%s'" % new)
        # share URLs
        content = content.replace('tudominio.com/%s' % old, 'modeloface.com%s' % new)
        content = content.replace('modeloface.com/%s' % old, 'modeloface.com%s' % new)
    return content, content != original

changed = []

# Process root HTML files
for fn in os.listdir(root):
    if not fn.endswith('.html'):
        continue
    if any(fn.startswith(p) for p in SKIP_PREFIXES):
        continue
    path = os.path.join(root, fn)
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    content, was_changed = fix_content(content)
    if was_changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        changed.append(fn)
        print('[UPDATED] %s' % fn)

# Process JS files in /js
js_dir = os.path.join(root, 'js')
if os.path.isdir(js_dir):
    for fn in os.listdir(js_dir):
        if not fn.endswith('.js'):
            continue
        path = os.path.join(js_dir, fn)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        content, was_changed = fix_content(content)
        if was_changed:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            changed.append('js/' + fn)
            print('[UPDATED] js/%s' % fn)

# Process root JS files
for fn in ['script.js', 'menu.js', 'mobile.js']:
    path = os.path.join(root, fn)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    content, was_changed = fix_content(content)
    if was_changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        changed.append(fn)
        print('[UPDATED] %s' % fn)

print('\nTotal files updated: %d' % len(changed))
print('Files: %s' % ', '.join(changed))
