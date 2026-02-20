import re

# New content
new_section = """    <!-- Monolito CTA Section -->
    <section class="monolith-section">
        <div class="monolith-container">
            <div class="monolith-card">
                
                <div class="monolith-content">
                    <span class="monolith-tag">TU MOMENTO ES AHORA</span>
                    <h2 class="monolith-title">QUEREMOS VERTE <br> INNOVAR.</h2>
                    <div class="monolith-divider"></div>
                    <p class="monolith-desc">
                        Tienes la visión. Tienes el equipo. Solo te falta el método.
                        Rompe la inercia hoy mismo con FACE.
                    </p>
                    <a href="#contacto" class="monolith-btn">AGENDAR CONSULTORÍA</a>
                </div>

            </div>
        </div>
    </section>"""

try:
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find the clean-master-section
    # Look for <!-- RESTORED ... --> ... </section>
    pattern = r'<!-- RESTORED SECTION: INNOVAR DESDE ADENTRO -->\s*<section class="clean-master-section">.*?</section>'
    
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        print("Found section! Replacing...")
        new_content = content.replace(match.group(0), new_section)
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print("✅ Replacement successful.")
    else:
        print("❌ Could not find the section via regex. Trying simpler search...")
        start_marker = '<section class="clean-master-section">'
        end_marker = '</section>'
        
        start_idx = content.find(start_marker)
        if start_idx != -1:
             end_idx = content.find(end_marker, start_idx) + len(end_marker)
             # Include the comment before if possible
             comment_marker = '<!-- RESTORED SECTION: INNOVAR DESDE ADENTRO -->'
             real_start = content.rfind(comment_marker, 0, start_idx)
             if real_start != -1:
                 start_idx = real_start
                 
             print(f"Found section by string (chars {start_idx}-{end_idx}). Replacing...")
             new_content = content[:start_idx] + new_section + content[end_idx:]
             
             with open('index.html', 'w', encoding='utf-8') as f:
                f.write(new_content)
             print("✅ Replacement successful (fallback method).")
             
        else:
            print("❌ Completely failed to find section.")

except Exception as e:
    print(f"Error: {e}")
