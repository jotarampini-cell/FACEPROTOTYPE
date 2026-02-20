import re
import os

with open('index_FOUND.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find all css links
links = re.findall(r'<link rel="stylesheet" href="(.*?)">', content)
print("CSS Files found in OLD index:")
for link in links:
    print(f" - {link}")
    # Check if exists
    if not os.path.exists(link):
        print(f"   [MISSING] {link}")
