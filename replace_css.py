import re

# Leer el archivo CSS original
with open('style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Leer el nuevo CSS de pilares
with open('pillars_new.css', 'r', encoding='utf-8') as f:
    new_pillars_css = f.read()

# Buscar y reemplazar toda la sección de pilares (desde el comentario inicial hasta el final del último media query)
pattern = r'/\* ====================================\s+PILLARS SECTION.*?@media \(min-width: 1024px\).*?\n\}'

# Reemplazar con el nuevo CSS
css_content = re.sub(pattern, new_pillars_css, css_content, flags=re.DOTALL)

# Guardar el archivo actualizado
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("CSS actualizado correctamente!")
