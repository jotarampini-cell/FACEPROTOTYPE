with open('css/clean-master.css', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

print(f"File size: {len(content)}")
if "clean-master" in content:
    print("Found 'clean-master'")
else:
    print("NOT FOUND 'clean-master'")

if "promo" in content:
    print("Found 'promo'")
    # Print context
    idx = content.find("promo")
    print(content[idx:idx+200])
else:
    print("NOT FOUND 'promo'")
