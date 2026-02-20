import re, os

root = r'c:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'

# Map of old .html references -> new clean URLs
# Also handles href="index.html" -> href="/home"
URL_MAP = {
    'index.html':                  '/home',
    'blog.html':                   '/blog',
    'programas.html':              '/programas',
    'metodologia-face.html':       '/metodologia',
    'evaluacion.html':             '/evaluacion',
    'quiz.html':                   '/quiz',
    'quiz-diagnostico.html':       '/quiz-diagnostico',
    'quiz-reto-ingenio.html':      '/quiz-reto-ingenio',
    'podcasts.html':               '/podcasts',
    'podcast-detail.html':         '/podcast-detalle',
    'recursos-gratis.html':        '/recursos',
    'innova-desde-adentro.html':   '/innova',
    'blog-innovation-japonesa.html': '/blog/innovacion-japonesa',
    'blog-post.html':              '/blog/post',
    'reto-de-ingenio.html':        '/quiz-reto-ingenio',
    'galaxy_section.html':         '/galaxy',
}

# Files to process (skip temp/old/backup files)
SKIP_PREFIXES = ('temp_', 'old_', 'index_', 'index_FOUND', 'face_master', 'final_restore', 'fix_urls')

files = [f for f in os.listdir(root)
         if f.endswith('.html') and not any(f.startswith(p) for p in SKIP_PREFIXES)]

changed_files = []

for fn in sorted(files):
    path = os.path.join(root, fn)
    with open(path, encoding='utf-8', errors='ignore') as f:
        content = f.read()

    original = content

    for old, new in URL_MAP.items():
        # Replace href="old.html" and href="./old.html"
        content = content.replace(f'href="{old}"', f'href="{new}"')
        content = content.replace(f'href="./{old}"', f'href="{new}"')
        # Also fix share URLs in social links that say tudominio.com/file.html
        content = content.replace(f'tudominio.com/{old}', f'modeloface.com{new}')
        content = content.replace(f'tudominio.com/blog-post.html', 'modeloface.com/blog/post')
        content = content.replace(f'tudominio.com/blog-innovation-japonesa.html', 'modeloface.com/blog/innovacion-japonesa')

    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        changed_files.append(fn)
        print(f'  [OK] Updated: {fn}')

print(f'\nDone! Updated {len(changed_files)} files.')
