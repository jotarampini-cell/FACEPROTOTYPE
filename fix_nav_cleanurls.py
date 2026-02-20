"""
Fix all navigation links to use the correct clean URL format
(matching the actual filename without .html extension).
This works with Vercel's cleanUrls: true feature.
"""
import os

root = r'c:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'

# Map: what we currently have -> what it should be (matching filename without .html)
REPLACEMENTS = [
    # Fix wrong aliases back to proper cleanUrl paths
    ('href="/innova"',              'href="/innova-desde-adentro"'),
    ('href="/recursos"',            'href="/recursos-gratis"'),
    ('href="/metodologia"',         'href="/metodologia-face"'),
    ('href="/podcast-detalle"',     'href="/podcast-detail"'),
    ('href="/blog/innovacion-japonesa"', 'href="/blog-innovation-japonesa"'),
    ('href="/blog/post"',           'href="/blog-post"'),
    # /home should stay as /home since it redirects to / (index)
    # /blog, /programas, /quiz, /evaluacion, /podcasts, /quiz-diagnostico, /quiz-reto-ingenio already match filenames -> OK
    # JS window.location
    ("window.location = '/innova'",              "window.location = '/innova-desde-adentro'"),
    ("window.location = '/recursos'",            "window.location = '/recursos-gratis'"),
    ("window.location = '/metodologia'",         "window.location = '/metodologia-face'"),
    ("window.location.href = '/innova'",         "window.location.href = '/innova-desde-adentro'"),
    ("window.location.href = '/recursos'",       "window.location.href = '/recursos-gratis'"),
]

SKIP_PREFIXES = ('temp_', 'old_', 'index_', 'index_FOUND', 'face_master',
                 'final_restore', 'fix_urls', 'fix_all', 'audit_links',
                 'nav_check', 'check_fix', 'fix_urls_final')

changed = []

def fix_file(path, label):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    original = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        changed.append(label)
        print('[UPDATED] ' + label)

# Root HTML and JS files
for fn in os.listdir(root):
    ext = fn.lower().rsplit('.', 1)[-1]
    if ext not in ('html', 'js'):
        continue
    if any(fn.startswith(p) for p in SKIP_PREFIXES):
        continue
    fix_file(os.path.join(root, fn), fn)

# js/ subdirectory
js_dir = os.path.join(root, 'js')
if os.path.isdir(js_dir):
    for fn in os.listdir(js_dir):
        if fn.endswith('.js'):
            fix_file(os.path.join(js_dir, fn), 'js/' + fn)

print('\nTotal updated: %d' % len(changed))
print(', '.join(changed) if changed else 'No changes needed.')
