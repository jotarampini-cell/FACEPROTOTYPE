
# Fixed script: simpler read/replace for monolith.css
try:
    with open('css/monolith.css', 'r', encoding='utf-8') as f:
        css = f.read()

    # Look for the mobile media query
    import re
    if 'max-width: 768px' in css:
        if '.monolith-section { padding: 20px 0 60px; }' not in css:
             # Just replace the start of the media query to inject the rule
             new_css = css.replace('@media (max-width: 768px) {', '@media (max-width: 768px) {\n    .monolith-section { padding: 20px 0 60px; }')
             with open('css/monolith.css', 'w', encoding='utf-8') as f:
                f.write(new_css)
             print("✅ Successfully injected mobile padding rule.")
        else:
            print("ℹ️ Rule already exists.")
    else:
        # Append logic if missing
         with open('css/monolith.css', 'a', encoding='utf-8') as f:
            f.write("\n\n@media (max-width: 768px) {\n    .monolith-section { padding: 20px 0 60px; }\n}")
         print("✅ Appended mobile media query.")
         
except Exception as e:
    print(f"❌ Error: {e}")
