import re

# Leer archivos
with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

with open('galaxy_section.html', 'r', encoding='utf-8') as f:
    galaxy_content = f.read()

# Buscar el patrón justo después del cierre de pillars-section
pattern = r'(    </section>\r?\n\r?\n)(    <!-- Section: The Manifesto)'

# Insertar la sección galaxy
replacement = r'\1' + galaxy_content + '\n\\2'
html_content = re.sub(pattern, replacement, html_content, count=1)

# Guardar
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Galaxy section inserted successfully!")
