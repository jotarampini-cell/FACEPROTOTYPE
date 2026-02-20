
# 2. Inject HTML
with open('final_restore_content.html', 'r', encoding='utf-8') as f:
    new_section = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find insertion point: After </section> of face-master-section
# And before <section class="stats-section-mono">
import re

pattern = r'(class="face-master-section".*?</section>)'
insertion_point = re.search(pattern, html, re.DOTALL)

if insertion_point:
    end_idx = insertion_point.end()
    
    # Check if there's already content there? (Should be empty due to previous checks)
    
    # Insert
    new_html = html[:end_idx] + "\n\n    <!-- RESTORED SECTION: INNOVAR DESDE ADENTRO -->\n" + new_section + html[end_idx:]
    
    # 3. Add CSS link
    if 'css/clean-master.css' not in new_html:
        new_html = new_html.replace('</head>', '    <link rel="stylesheet" href="css/clean-master.css">\n</head>')
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
        
    print("✅ RESTORATION COMPLETE: HTML injected and CSS linked.")
else:
    print("❌ Could not find face-master-section to insert after.")
