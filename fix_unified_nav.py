"""
Script to unify navigation across all HTML pages:
1. Remove hardcoded <header>...</header> blocks
2. Ensure premium-menu.css and menu.js are linked in <head> / before </body>
"""

import re
import os

BASE_DIR = r"C:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing"

PAGES = [
    "blog.html",
    "blog-post.html",
    "blog-innovation-japonesa.html",
    "programas.html",
    "podcasts.html",
    "podcast-detail.html",
    "recursos-gratis.html",
    "quiz.html",
    "quiz-diagnostico.html",
    "quiz-reto-ingenio.html",
    "evaluacion.html",
    "app.html",
    "index.html",
    "innova-desde-adentro.html",
    "metodologia-face.html",
]

CSS_INJECT = '    <link rel="stylesheet" href="premium-menu.css">\n    <link rel="stylesheet" href="css/face-master.css">\n'
JS_INJECT = '\n    <script src="menu.js"></script>\n'
FONT_INJECT = '''    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
'''

def inject_if_missing(content, marker, snippet, before=None, after=None):
    if marker in content:
        return content  # already there
    if before and before in content:
        return content.replace(before, snippet + before, 1)
    if after and after in content:
        return content.replace(after, after + snippet, 1)
    return content

def remove_hardcoded_header(content):
    # Remove hardcoded <header ...>...</header> blocks
    cleaned = re.sub(
        r'<!--\s*(Header|Global Header)[^-]*-->\s*(<header[^>]*>.*?</header>)',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )
    # Also remove bare <header>...</header> blocks not from JS injection
    cleaned = re.sub(
        r'<header\b[^>]*id=["\']main-header["\'][^>]*>.*?</header>',
        '',
        cleaned,
        flags=re.DOTALL | re.IGNORECASE
    )
    # Remove old fullscreen-menu divs that are hardcoded
    cleaned = re.sub(
        r'<div\b[^>]*id=["\']fullscreen-menu["\'][^>]*>.*?</div>\s*(?=\s*<)',
        '',
        cleaned,
        flags=re.DOTALL | re.IGNORECASE
    )
    return cleaned

for page in PAGES:
    filepath = os.path.join(BASE_DIR, page)
    if not os.path.exists(filepath):
        print(f"SKIP (not found): {page}")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Remove hardcoded headers
    content = remove_hardcoded_header(content)

    # 2. Inject CSS if missing
    if 'premium-menu.css' not in content:
        content = inject_if_missing(content, 'premium-menu.css', CSS_INJECT, before='</head>')

    if 'face-master.css' not in content:
        content = inject_if_missing(content, 'face-master.css', '    <link rel="stylesheet" href="css/face-master.css">\n', before='</head>')

    # 3. Inject JS if missing
    if 'menu.js' not in content:
        content = inject_if_missing(content, 'menu.js', JS_INJECT, before='</body>')

    # 4. Write back if changed
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"UPDATED: {page}")
    else:
        print(f"NO CHANGE: {page}")

print("\nDone!")
