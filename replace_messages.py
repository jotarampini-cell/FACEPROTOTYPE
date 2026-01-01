import re

# Leer archivos
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('improved_messages.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extraer solo el array de galaxyIdeas del archivo JS
# El contenido del archivo es solo el array
array_content = js_content.strip()

# Buscar y reemplazar el array completo en index.html
# Patrón: desde "const galaxyIdeas = [" hasta el cierre "];" antes de "const universe"
pattern = r'(        // Mensajes mejorados con estructura de 4 partes\r?\n        const galaxyIdeas = \[).*?(\];)\r?\n\r?\n(        const universe = document\.getElementById)'

# El reemplazo incluye el nuevo contenido del array
replacement = r'\1\n' + '\n'.join('            ' + line for line in array_content.split('\n')[1:]) + r'\n        \2\n\n\3'

html_updated = re.sub(pattern, replacement, html, flags=re.DOTALL)

# Guardar
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_updated)

print("✅ Array de galaxyIdeas actualizado con nuevos mensajes!")
