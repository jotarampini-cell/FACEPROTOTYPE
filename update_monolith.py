
new_html_content = """<section class="monolith-section">
    <div class="monolith-container">
        <div class="monolith-card">
            
            <div class="monolith-content">
                <span class="monolith-tag">ACCESO LIBERADO POR TIEMPO LIMITADO</span>
                
                <h2 class="monolith-title">PROGRAMA <br> INNOVA DESDE ADENTRO</h2>
                
                <div class="monolith-divider"></div>
                
                <p class="monolith-desc">
                    No necesitas más presupuesto, necesitas mejor visión.
                    Desbloquea la metodología de 10 días que convierte empleados en intra-emprendedores y problemas en rentabilidad.
                    <strong>¿Estás listo para ver lo que tu competencia ignora?</strong>
                </p>
                
                <a href="#programa-innova" class="monolith-btn">INGRESAR AL ENTRENAMIENTO</a>
            </div>

        </div>
    </div>
</section>"""

import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find the existing monolith section
# It starts with <section class="monolith-section"> and ends with </section>
pattern = r'<section class="monolith-section">.*?</section>'

match = re.search(pattern, content, re.DOTALL)

if match:
    print("Found Monolith section. Updating content...")
    updated_content = content.replace(match.group(0), new_html_content)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("✅ Monolith content updated successfully.")
else:
    print("❌ Could not find Monolith section to update.")
