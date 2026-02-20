import re, os

root = r'c:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'

# Find ALL internal hrefs in the main HTML files (no external, no css, no #)
pattern = re.compile(r'href="((?!http|#|mailto|tel|//)[^"]+)"')
files_to_check = [
    'index.html', 'blog.html', 'programas.html', 'blog-post.html',
    'blog-innovation-japonesa.html', 'innova-desde-adentro.html',
    'recursos-gratis.html', 'podcasts.html', 'menu.js'
]
for fn in files_to_check:
    path = os.path.join(root, fn)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    results = []
    for m in pattern.finditer(content):
        v = m.group(1)
        # Only show page links (not CSS/fonts/images/anchors/assets)
        if any(ext in v for ext in ['.css', '.js', '.png', '.jpg', '.svg', '.ico', '.webp', '.woff', '.ttf', 'fonts.google', '/assets/']):
            continue
        results.append(v)
    if results:
        unique = sorted(set(results))
        print(fn + ':')
        for r in unique:
            flag = ' <-- HAS .html' if '.html' in r else ''
            print('  ' + r + flag)
        print()
