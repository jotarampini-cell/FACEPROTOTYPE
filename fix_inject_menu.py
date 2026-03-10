import os

PAGES_DIR = r'C:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'

CSS_SNIPPET = '    <link rel="stylesheet" href="premium-menu.css">\n    <link rel="stylesheet" href="css/face-master.css">'
JS_SNIPPET = '    <script src="menu.js"></script>'

SKIP = ['temp_','index_','old_','face_master','final_restore','restored_','galaxy_','quiz_section','widget']

pages = [f for f in os.listdir(PAGES_DIR) if f.endswith('.html') and not any(x in f for x in SKIP)]

for page in sorted(pages):
    path = os.path.join(PAGES_DIR, page)
    with open(path, encoding='utf-8', errors='replace') as f:
        content = f.read()

    changed = False

    if 'premium-menu.css' not in content:
        content = content.replace('</head>', CSS_SNIPPET + '\n</head>', 1)
        changed = True

    if 'menu.js' not in content:
        content = content.replace('</body>', JS_SNIPPET + '\n</body>', 1)
        changed = True

    if changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('FIXED: ' + page)
    else:
        print('OK:    ' + page)
