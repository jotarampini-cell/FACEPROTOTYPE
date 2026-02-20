import subprocess
import re

# Search commits from the last 30 days for face-master-section variations
print("Buscando face-master-section en commits de las últimas 4 semanas...\n")

# Get commits from last 30 days
result = subprocess.run(
    ['git', 'log', '--since=30 days ago', '--oneline', '--all'],
    capture_output=True,
    text=True
)

commits = [line.split()[0] for line in (result.stdout or '').strip().split('\n') if line]
print(f"Total commits a revisar: {len(commits)}\n")

found_versions = []

for i, commit in enumerate(commits):
    if i % 10 == 0:
        print(f"Revisando commit {i+1}/{len(commits)}...")
    
    # Get file content from this commit
    result2 = subprocess.run(
        ['git', 'show', f'{commit}:index.html'],
        capture_output=True,
        text=True,
        encoding='utf-8',
        errors='ignore'
    )
    
    if result2.returncode != 0:
        continue
    
    content = result2.stdout
    
    # Find face-master-section
    pattern = r'<!-- FACE MASTER SECTION.*?</section>'
    match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
    
    if match:
        section = match.group(0)
        char_count = len(section)
        
        # Check if it has more content than current version (1913 chars)
        if char_count > 2000:  # Significantly larger
            found_versions.append({
                'commit': commit,
                'chars': char_count,
                'section': section
            })
            print(f"✅ Encontrado en {commit}: {char_count} caracteres")

print(f"\n{'='*60}")
print(f"Versiones más completas encontradas: {len(found_versions)}")

if found_versions:
    # Sort by size
    found_versions.sort(key=lambda x: x['chars'], reverse=True)
    
    best = found_versions[0]
    print(f"\n🎯 MEJOR CANDIDATO:")
    print(f"Commit: {best['commit']}")
    print(f"Tamaño: {best['chars']} caracteres")
    
    # Save it
    with open('face_master_COMPLETE.html', 'w', encoding='utf-8') as f:
        f.write(best['section'])
    
    print(f"\n✅ Sección guardada en: face_master_COMPLETE.html")
    
    # Show preview
    print("\n--- PREVIEW (primeros 800 chars) ---")
    print(best['section'][:800])
else:
    print("\n❌ No se encontró una versión más completa en los últimos 30 días")
