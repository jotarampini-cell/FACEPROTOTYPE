try:
    with open('index_FOUND.html', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    print(f"File size: {len(content)}")
    
    # Search for "innovar" in any case
    matches = []
    # Find all occurrences of "innovar" to see context
    import re
    for match in re.finditer(r'innovar', content, re.IGNORECASE):
        start = max(0, match.start() - 50)
        end = min(len(content), match.end() + 50)
        matches.append(content[start:end].replace('\n', ' '))
    
    print(f"Found {len(matches)} matches for 'innovar':")
    for m in matches[:5]:
        print(f" - ...{m}...")

    # Look for "adentro"
    matches_adentro = []
    for match in re.finditer(r'adentro', content, re.IGNORECASE):
        start = max(0, match.start() - 50)
        end = min(len(content), match.end() + 50)
        matches_adentro.append(content[start:end].replace('\n', ' '))
        
    print(f"\nFound {len(matches_adentro)} matches for 'adentro':")
    for m in matches_adentro[:5]:
        print(f" - ...{m}...")
        
except Exception as e:
    print(f"Error: {e}")
