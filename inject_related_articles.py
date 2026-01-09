#!/usr/bin/env python3
"""
Script to inject the Related Articles component into HTML pages
This ensures consistent design across all pages
"""

import re
import sys

def inject_related_articles(html_file):
    """Injects related articles HTML and CSS into the specified file"""
    
    # Read the component files
    with open('components/related-articles.html', 'r', encoding='utf-8') as f:
        html_component = f.read()
    
    with open('css/related-articles.css', 'r', encoding='utf-8') as f:
        css_component = f.read()
    
    # Read the target HTML file
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove existing related articles section if it exists
    # Match from <!-- Related Articles to </section>
    content = re.sub(
        r'<!--\s*Related Articles.*?-->(.*?)</section>',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )
    
    # Also remove old related-section if it exists
    content = re.sub(
        r'<section class="related-section">.*?</section>',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Remove old CSS for related articles if it exists
    content = re.sub(
        r'/\*\s*---\s*RELATED ARTICLES.*?\*/(.*?)(?=/\*|</style>)',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Find where to inject HTML (before closing </body> or before footer section)
    html_insert_pattern = r'(</script>\s*(?=<!--\s*Related Articles|<footer|</body>))'
    html_replacement = r'\1\n    <!-- Related Articles Section (Imported) -->\n    ' + html_component.strip() + '\n\n    '
    content = re.sub(html_insert_pattern, html_replacement, content, count=1)
    
    # Find where to inject CSS (before closing </style>)
    css_insert_pattern = r'(\s*)(</style>)'
    css_replacement = r'\n\n        ' + css_component.strip() + r'\n    \2'
    content = re.sub(css_insert_pattern, css_replacement, content, count=1)
    
    # Write the updated content back
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Related Articles component injected into {html_file}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        for html_file in sys.argv[1:]:
            inject_related_articles(html_file)
    else:
        print("Usage: python inject_related_articles.py <html_file1> [html_file2] ...")
        print("Example: python inject_related_articles.py innova-desde-adentro.html blog-post.html")
