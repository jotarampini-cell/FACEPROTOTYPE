
/* Update for monolith.css to add mobile unresponsive padding */
with open('css/monolith.css', 'r') as f:
    css = f.read()

# Check if media query exists
if '@media (max-width: 768px)' in css:
    # Insert padding reduction inside existing media query
    import re
    match = re.search(r'@media \(max-width: 768px\) \{', css)
    if match:
        insert_pos = match.end()
        # Find where .monolith-card starts inside media query or just append to start
        # Better to add a clear rule for .monolith-section
        new_css = css[:insert_pos] + "\n    .monolith-section { padding: 20px 0 60px; }" + css[insert_pos:]
        
        with open('css/monolith.css', 'w') as f:
            f.write(new_css)
        print("Updated css/monolith.css with mobile padding fix")
else:
    print("Could not find media query in monolith.css")
