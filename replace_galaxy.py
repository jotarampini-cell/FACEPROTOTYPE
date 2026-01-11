import re

# Leer archivos
with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

with open('galaxy_section.html', 'r', encoding='utf-8') as f:
    galaxy_content = f.read()

# Buscar y reemplazar la sección completa de Apple Experience
# Desde "<!-- Section: The Apple Experience" hasta "</section>" después del cierre del modal
pattern = r'    <!-- Section: The Apple Experience.*?</section>\r?\n\r?\n    <!-- LOAD APPLE EXPERIENCE ASSETS -->.*?<script src="js/apple-experience\.js"></script>'

# Reemplazar con la sección galaxy
html_content = re.sub(pattern, '    ' + galaxy_content, html_content, flags=re.DOTALL)

# Guardar
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("✅ Diamond Galaxy section inserted successfully!")
print("Replaced Apple Experience section with Diamond Edition")
