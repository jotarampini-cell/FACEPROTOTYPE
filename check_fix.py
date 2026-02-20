import re, os
root = r'c:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'
CLEAN_URLS = ['/home', '/blog', '/programas', '/metodologia', '/evaluacion',
              '/quiz', '/podcasts', '/recursos', '/innova', '/blog/innovacion-japonesa', '/blog/post']
checks = [
    ('index.html', 'href="/home"'),
    ('index.html', 'href="/programas"'),
    ('index.html', 'href="/evaluacion"'),
    ('index.html', 'href="/quiz"'),
    ('blog-post.html', 'href="/blog/innovacion-japonesa"'),
    ('blog-innovation-japonesa.html', 'href="/programas"'),
    ('blog-innovation-japonesa.html', 'href="/innova"'),
]
for fn, search in checks:
    path = os.path.join(root, fn)
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    found = search in content
    print(('[OK]  ' if found else '[FAIL]') + ' ' + fn + ': ' + search)
