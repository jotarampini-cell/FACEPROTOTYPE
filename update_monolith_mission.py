
new_html_content = """<section class="monolith-section">
    <div class="monolith-container">
        <div class="monolith-card">
            
            <div class="monolith-content">
                <span class="monolith-tag">NUESTRA MISIÓN ES TU EVOLUCIÓN</span>
                
                <h2 class="monolith-title">QUEREMOS VERTE <br> INNOVAR.</h2>
                
                <div class="monolith-divider"></div>
                
                <p class="monolith-desc">
                    Ese es el espíritu que nos mueve. Sabemos que la teoría no basta, necesitas ver el "cómo".
                    <br><br>
                    Por eso, hemos condensado nuestra metodología en una <strong>serie de videos de entrenamiento paso a paso</strong> de acceso libre. 
                    Es la guía visual definitiva para ejecutar el programa <strong>"Innova desde Adentro"</strong>: Rompe las reglas burocráticas y aumenta tus ganancias con el equipo que ya tienes.
                </p>
                
                <a href="#programa-innova" class="monolith-btn">VER EL PRIMER VIDEO</a>
            </div>

        </div>
    </div>
</section>"""

import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find the existing monolith section
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
