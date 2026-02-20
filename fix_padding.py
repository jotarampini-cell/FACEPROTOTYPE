
/* Update for white-results.css to add mobile responsiveness for padding */
with open('css/white-results.css', 'r') as f:
    css = f.read()

# Check if media query exists
if '@media (max-width: 900px)' in css:
    # Insert padding reduction inside existing media query
    # Find the start of the media query
    import re
    match = re.search(r'@media \(max-width: 900px\) \{', css)
    if match:
        insert_pos = match.end()
        new_css = css[:insert_pos] + "\n    .white-results-section { padding: 40px 0; }" + css[insert_pos:]
        
        with open('css/white-results.css', 'w') as f:
            f.write(new_css)
        print("Updated css/white-results.css with mobile padding fix")
else:
    # Append new media query
    with open('css/white-results.css', 'a') as f:
        f.write("\n\n@media (max-width: 768px) {\n    .white-results-section {\n        padding: 40px 0;\n    }\n}")
    print("Appended mobile media query to css/white-results.css")
