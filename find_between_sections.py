import subprocess
import re

# Get current index.html
with open('index.html', 'r', encoding='utf-8') as f:
    current = f.read()

# Find what's between face-master-section and stats-section
pattern = r'(</section>\s*<!--.*?FACE.*?-->.*?)(<!--.*?Stats.*?-->)'
match = re.search(pattern, current, re.DOTALL | re.IGNORECASE)

if match:
    between_content = match.group(1)
    print("CONTENIDO ENTRE FACE-MASTER Y STATS:")
    print("="*60)
    print(between_content)
    print("="*60)
    print(f"\nCaracteres: {len(between_content)}")
else:
    print("No se encontró contenido entre las secciones")

# Now search old commits for what was there
print("\n\nBuscando en commits antiguos qué había en ese espacio...\n")

result = subprocess.run(
    ['git', 'log', '--since=7 days ago', '--oneline'],
    capture_output=True,
    text=True
)

commits = [line.split()[0] for line in (result.stdout or '').strip().split('\n') if line]

for commit in commits[:10]:  # Check last 10 commits
    result2 = subprocess.run(
        ['git', 'show', f'{commit}:index.html'],
        capture_output=True,
        text=True,
        encoding='utf-8',
        errors='ignore'
    )
    
    if result2.returncode == 0:
        old_html = result2.stdout
        match2 = re.search(pattern, old_html, re.DOTALL | re.IGNORECASE)
        
        if match2:
            old_between = match2.group(1)
            if len(old_between) > len(between_content) + 100:  # Significantly larger
                print(f"\n✅ Commit {commit} tiene más contenido:")
                print(f"Tamaño: {len(old_between)} chars vs actual {len(between_content)} chars")
                
                # Save it
                with open(f'between_section_{commit}.txt', 'w', encoding='utf-8') as f:
                    f.write(old_between)
                
                print(f"Guardado en: between_section_{commit}.txt")
                break
