import re

try:
    with open('index_FOUND.html', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    match = re.search(r'Innovar desde adentro', content, re.IGNORECASE)
    
    if match:
        pos = match.start()
        
        # Find the start of the section (look backwards for <section or <div class="...-section")
        # We'll look backwards for the first "<section"
        section_start = content.rfind('<section', 0, pos)
        
        if section_start != -1:
            # Find the end of this section
            # We need to account for nested sections if any, but usually top level sections are siblings
            # A simple search for </section> after the start is a good first guess
            section_end = content.find('</section>', section_start) + len('</section>')
            
            # Check if there is another section immediately after (the quote section?)
            # The user said: Card -> Quote -> Stats.
            # So maybe there are TWO sections missing?
            
            # Let's see what's after this section
            next_part = content[section_end:section_end+500]
            
            # If the next part contains "quote" or another section, grab it too
            full_block_end = section_end
            
            if '<section' in next_part:
                # Find end of next section
                next_section_start = content.find('<section', section_end)
                next_section_end = content.find('</section>', next_section_start) + len('</section>')
                full_block_end = next_section_end
                print("Found a second section immediately after!")
            
            # Extract the full block
            restored_html = content[section_start:full_block_end]
            
            with open('restored_section.html', 'w', encoding='utf-8') as f:
                f.write(restored_html)
                
            print(f"Saved restored section to restored_section.html ({len(restored_html)} chars)")
            
        else:
            print("Could not find start of section")
    else:
        print("Could not find 'Innovar desde adentro'")

except Exception as e:
    print(f"Error: {e}")
