import subprocess
import re

# 1. Get commits from 2 days ago (2026-01-09)
result = subprocess.run(
    ['git', 'log', '--since=2026-01-09 00:00', '--until=2026-01-09 23:59', '--oneline'],
    capture_output=True,
    text=True
)

commits = result.stdout.strip().split('\n')
print(f"Commits encontrados del 2026-01-09: {len(commits)}")

if commits and commits[0]:
    # Take first commit (most recent from that day)
    commit_hash = commits[0].split()[0]
    print(f"Usando commit: {commit_hash}")
    
    # 2. Extract face-master-section from that commit
    result2 = subprocess.run(
        ['git', 'show', f'{commit_hash}:index.html'],
        capture_output=True,
        text=True,
        encoding='utf-8'
    )
    
    old_html = result2.stdout
    
    # Find face-master-section
    pattern = r'(<!-- FACE MASTER SECTION.*?</section>)'
    match = re.search(pattern, old_html, re.DOTALL | re.IGNORECASE)
    
    if match:
        old_section = match.group(1)
        print(f"\n✅ Sección encontrada ({len(old_section)} caracteres)")
        
        # 3. Replace in current index.html
        with open('index.html', 'r', encoding='utf-8') as f:
            current_html = f.read()
        
        # Replace current face-master-section
        new_html = re.sub(
            r'<!-- FACE MASTER SECTION.*?</section>',
            old_section,
            current_html,
            count=1,
            flags=re.DOTALL | re.IGNORECASE
        )
        
        # 4. Save
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_html)
        
        print("✅ Sección FACE Master restaurada exitosamente")
        
    else:
        print("❌ No se encontró face-master-section en ese commit")
else:
    print("❌ No hay commits del 2026-01-09")
