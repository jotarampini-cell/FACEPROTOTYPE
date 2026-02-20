import re, os

root = r'c:\Users\USUARIO\.gemini\antigravity\scratch\face-innovation-landing'

SKIP_PREFIXES = ('temp_','old_','index_','face_master','final_restore','fix_urls')

# Check HTML files for remaining .html internal links
pattern = re.compile(r'href="(?!http|#|mailto|tel|//)[^"]*\.html[^"]*"')
files = [f for f in os.listdir(root) if f.endswith('.html') and not any(f.startswith(p) for p in SKIP_PREFIXES)]
print("=== Remaining .html links in HTML files ===")
for fn in sorted(files):
    path = os.path.join(root, fn)
    with open(path, encoding='utf-8', errors='ignore') as f:
        content = f.read()
    matches = [(content[:m.start()].count('\n') + 1, m.group()) for m in pattern.finditer(content)]
    if matches:
        print(f'\n{fn}:')
        for line, link in matches:
            print(f'  L{line}: {link}')

# Also check .js files
print("\n=== Remaining .html links in JS files ===")
js_dir = os.path.join(root, 'js')
for fn in os.listdir(js_dir):
    if fn.endswith('.js'):
        path = os.path.join(js_dir, fn)
        with open(path, encoding='utf-8', errors='ignore') as f:
            content = f.read()
        matches = [(content[:m.start()].count('\n') + 1, m.group()) for m in re.finditer(r'["\']([^"\'#][^"\']*\.html)["\']', content)]
        if matches:
            print(f'\n{fn}:')
            for line, link in matches:
                print(f'  L{line}: {link}')

# Check root JS files
for fn in ['script.js', 'menu.js']:
    path = os.path.join(root, fn)
    if os.path.exists(path):
        with open(path, encoding='utf-8', errors='ignore') as f:
            content = f.read()
        matches = [(content[:m.start()].count('\n') + 1, m.group()) for m in re.finditer(r'["\']([^"\'#][^"\']*\.html)["\']', content)]
        if matches:
            print(f'\n{fn}:')
            for line, link in matches:
                print(f'  L{line}: {link}')

print('\nDone.')
