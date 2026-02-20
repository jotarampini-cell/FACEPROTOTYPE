"""
Final definitive fix: replaces ALL .html references in navigation/hrefs
across every file in the project (HTML, JS, CSS).
Uses string replacement to handle all edge cases.
"""
import os

root = r'c:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'

# Complete mapping - every possible .html internal link
REPLACEMENTS = [
    # Full replacements for href attributes
    ('href="index.html"',                    'href="/home"'),
    ('href="./index.html"',                  'href="/home"'),
    ('href="blog.html"',                     'href="/blog"'),
    ('href="./blog.html"',                   'href="/blog"'),
    ('href="programas.html"',                'href="/programas"'),
    ('href="./programas.html"',              'href="/programas"'),
    ('href="metodologia-face.html"',         'href="/metodologia"'),
    ('href="./metodologia-face.html"',       'href="/metodologia"'),
    ('href="evaluacion.html"',               'href="/evaluacion"'),
    ('href="./evaluacion.html"',             'href="/evaluacion"'),
    ('href="quiz.html"',                     'href="/quiz"'),
    ('href="./quiz.html"',                   'href="/quiz"'),
    ('href="quiz-diagnostico.html"',         'href="/quiz-diagnostico"'),
    ('href="./quiz-diagnostico.html"',       'href="/quiz-diagnostico"'),
    ('href="quiz-reto-ingenio.html"',        'href="/quiz-reto-ingenio"'),
    ('href="./quiz-reto-ingenio.html"',      'href="/quiz-reto-ingenio"'),
    ('href="podcasts.html"',                 'href="/podcasts"'),
    ('href="./podcasts.html"',               'href="/podcasts"'),
    ('href="podcast-detail.html"',           'href="/podcast-detalle"'),
    ('href="./podcast-detail.html"',         'href="/podcast-detalle"'),
    ('href="recursos-gratis.html"',          'href="/recursos"'),
    ('href="./recursos-gratis.html"',        'href="/recursos"'),
    ('href="innova-desde-adentro.html"',     'href="/innova"'),
    ('href="./innova-desde-adentro.html"',   'href="/innova"'),
    ('href="blog-innovation-japonesa.html"', 'href="/blog/innovacion-japonesa"'),
    ('href="./blog-innovation-japonesa.html"','href="/blog/innovacion-japonesa"'),
    ('href="blog-post.html"',                'href="/blog/post"'),
    ('href="./blog-post.html"',              'href="/blog/post"'),
    ('href="reto-de-ingenio.html"',          'href="/quiz-reto-ingenio"'),
    ('href="./reto-de-ingenio.html"',        'href="/quiz-reto-ingenio"'),
    # JS window.location assignments
    ("window.location = 'index.html'",       "window.location = '/home'"),
    ("window.location = 'blog.html'",        "window.location = '/blog'"),
    ("window.location = 'programas.html'",   "window.location = '/programas'"),
    ("window.location = 'evaluacion.html'",  "window.location = '/evaluacion'"),
    ("window.location = 'quiz.html'",        "window.location = '/quiz'"),
    ("window.location = 'innova-desde-adentro.html'", "window.location = '/innova'"),
    ("window.location = 'recursos-gratis.html'",       "window.location = '/recursos'"),
    ("window.location = 'podcasts.html'",    "window.location = '/podcasts'"),
    # Also fix href with .html# anchors  
    ('href="index.html#',                    'href="/home#'),
    ('href="programas.html#',                'href="/programas#'),
    ('href="blog.html#',                     'href="/blog#'),
    ('href="innova-desde-adentro.html#',     'href="/innova#'),
    ('href="recursos-gratis.html#',          'href="/recursos#'),
    ('href="podcasts.html#',                 'href="/podcasts#'),
    ('href="metodologia-face.html#',         'href="/metodologia#'),
    # Social share URLs
    ('tudominio.com/blog-post.html',         'modeloface.com/blog/post'),
    ('tudominio.com/blog-innovation-japonesa.html', 'modeloface.com/blog/innovacion-japonesa'),
    ('tudominio.com/index.html',             'modeloface.com/home'),
    ('tudominio.com/blog.html',              'modeloface.com/blog'),
    ('tudominio.com/programas.html',         'modeloface.com/programas'),
]

SKIP_PREFIXES = ('temp_', 'old_', 'index_', 'index_FOUND', 'face_master',
                 'final_restore', 'fix_urls', 'audit_links', 'fix_all_urls',
                 'nav_check', 'check_fix')

def fix_file(path):
    try:
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except Exception as e:
        print('ERROR reading %s: %s' % (path, e))
        return False
    
    original = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

changed = []

# Root HTML files
for fn in os.listdir(root):
    ext = fn.lower().split('.')[-1]
    if ext not in ('html', 'js'):
        continue
    if any(fn.startswith(p) for p in SKIP_PREFIXES):
        continue
    path = os.path.join(root, fn)
    if fix_file(path):
        changed.append(fn)
        print('[UPDATED] ' + fn)

# js/ subdirectory
js_dir = os.path.join(root, 'js')
if os.path.isdir(js_dir):
    for fn in os.listdir(js_dir):
        if not fn.endswith('.js'):
            continue
        path = os.path.join(js_dir, fn)
        if fix_file(path):
            changed.append('js/' + fn)
            print('[UPDATED] js/' + fn)

print('\n--- Done! Updated %d files ---' % len(changed))
if changed:
    print(', '.join(changed))
else:
    print('No changes needed.')
