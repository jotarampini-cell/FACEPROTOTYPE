import subprocess
import re

print("Escaneando historial de los últimos 14 días...\n")

# Get commits
result = subprocess.run(
    ['git', 'log', '--since=14 days ago', '--oneline', '--format=%h|%ad', '--date=short'],
    capture_output=True,
    text=True
)

commits = [line.strip().split('|') for line in (result.stdout or '').split('\n') if line]

print(f"Revisando {len(commits)} commits...")
print(f"{'Commit':<10} {'Fecha':<12} {'Size':<10} {'Innovar?':<10} {'Glass?':<10}")
print("-" * 60)

found_candidate = None

for commit_hash, date in commits:
    # Get file content
    try:
        res = subprocess.run(
            ['git', 'show', f'{commit_hash}:index.html'],
            capture_output=True,
            text=True,
            encoding='utf-8',
            errors='ignore'
        )
        
        content = res.stdout
        size = len(content)
        
        # Check keywords
        has_innovar = "innovar desde adentro" in content.lower()
        has_glass = "glass" in content.lower()
        
        marker = ""
        if has_innovar:
            marker = "✅ !!!"
            found_candidate = commit_hash
        
        print(f"{commit_hash:<10} {date:<12} {size:<10} {'SI' if has_innovar else 'NO':<10} {'SI' if has_glass else 'NO':<10} {marker}")
        
    except Exception as e:
        pass

if found_candidate:
    print(f"\n¡ENCONTRADO! El contenido estaba en el commit: {found_candidate}")
    
    # Save it
    subprocess.run(f'git show {found_candidate}:index.html > index_FOUND.html', shell=True)
    print("Guardado en index_FOUND.html")
else:
    print("\nNo se encontró el texto exacto 'innovar desde adentro'.")
