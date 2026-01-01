import re

# Leer archivos
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('visual_enhancements.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

with open('visual_enhancements.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# 1. Insertar CSS antes del cierre de </style> de la galaxy section
# Buscar el último </style> antes del script de galaxy
pattern_css = r'(        @media \(max-width: 768px\) \{.*?\}\s*)(    </style>)'
replacement_css = r'\1\n' + '        ' + css_content.replace('\n', '\n        ') + r'\n\2'
html = re.sub(pattern_css, replacement_css, html, flags=re.DOTALL)

# 2. Insertar JavaScript al final del script de galaxy (antes del cierre del script)
# Buscar donde termina el script de galaxy (antes del </script>)
pattern_js = r'(        proModal\.addEventListener\(\'click\',.*?\}\);)\s*(    </script>)'
replacement_js = r'\1\n' + js_content.replace('\n', '\n        ') + r'\n\2'
html = re.sub(pattern_js, replacement_js, html, flags=re.DOTALL)

# Guardar
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ Mejoras visuales (CSS + JS) insertadas correctamente!")
