import re

with open('index_FOUND.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find <style> block containing clean-master-section
pattern = r'<style>(.*?clean-master-section.*?)</style>'
match = re.search(pattern, content, re.DOTALL)

if match:
    css_content = match.group(1)
    
    # Save to file
    with open('css/clean-master.css', 'w', encoding='utf-8') as f:
        f.write(css_content.strip())
        
    print(f"Extracted CSS to css/clean-master.css ({len(css_content)} chars)")
else:
    # Try finding it without <style> tags if grep was misleading, or multiple style blocks
    # Just find the text ".clean-master-section" and grab the whole enclosing style tag
    print("Trying robust search...")
    
    match = re.search(r'<style>.*?.clean-master-section.*?</style>', content, re.DOTALL)
    if match:
        css_content = match.group(0).replace('<style>', '').replace('</style>', '')
        with open('css/clean-master.css', 'w', encoding='utf-8') as f:
            f.write(css_content.strip())
        print(f"Extracted CSS to css/clean-master.css ({len(css_content)} chars)")
    else:
        print("Could not find style block with clean-master-section")
