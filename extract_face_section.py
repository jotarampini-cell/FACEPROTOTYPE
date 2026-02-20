import subprocess
import re

# Get the face-master-section from a commit 2 days ago
result = subprocess.run(
    ['git', 'show', '8ccb6be:index.html'],
    capture_output=True,
    text=True,
    encoding='utf-8'
)

content = result.stdout

# Find the face-master-section
pattern = r'(<section class="face-master-section">.*?</section>)'
match = re.search(pattern, content, re.DOTALL)

if match:
    face_section = match.group(1)
    
    # Save it
    with open('face_master_restored.html', 'w', encoding='utf-8') as f:
        f.write(face_section)
    
    print("✅ FACE Master Section encontrada y guardada")
    print(f"Total caracteres: {len(face_section)}")
    
    # Print first 500 chars to verify
    print("\n--- Preview ---")
    print(face_section[:500])
else:
    print("❌ No se encontró la sección face-master-section en ese commit")
