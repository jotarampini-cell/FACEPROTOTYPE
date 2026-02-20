import re

# Read the found file
with open('index_FOUND.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find the specific card 
# The user mentioned: "Innovar desde adentro", "Glassmorphism button", "Quote after card"
# Let's try to grab the container that holds this.
# It might be in a section called "innovation-culture-section" or similar?

# Let's find the text "Innovar desde adentro" and grab the surrounding <section> or <div>
search_text = "Innovar desde adentro"
pos = content.find(search_text)

if pos != -1:
    print(f"Encontrado texto en posición {pos}")
    
    # Try to find the start of the section/container
    # Backtrack to find the nearest <section OR <div class="
    # This is a bit heuristic. Let's look at 2000 chars before and after.
    start_look = max(0, pos - 1500)
    end_look = min(len(content), pos + 2500)
    
    snippet = content[start_look:end_look]
    
    # Let's try to isolate the HTML structure
    # Look for the start of the section containing this text
    # Maybe it's <section class="culture-section">?
    
    print("--- SNIPPET FOUND ---")
    print(snippet)
    print("--- END SNIPPET ---")
    
    # Save snippet to file for easier reading/insertion
    with open('found_snippet.html', 'w', encoding='utf-8') as f:
        f.write(snippet)

else:
    print("No se encontró el texto en el archivo guardado (???)")
