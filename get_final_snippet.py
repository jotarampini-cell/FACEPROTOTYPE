import re

with open('index_FOUND.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find "adentro"
match = re.search(r'adentro', content, re.IGNORECASE)
if match:
    # Find the container <div or <section
    # We'll just grab a large chunk around it and I will manually parse it from the output
    start = max(0, match.start() - 1000)
    end = min(len(content), match.start() + 2000)
    
    snippet = content[start:end]
    print("--- FOUND SNIPPET START ---")
    print(snippet)
    print("--- FOUND SNIPPET END ---")
else:
    print("Could not find 'adentro'")
