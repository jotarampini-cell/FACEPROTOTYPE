import re

try:
    # Use errors='ignore' to bypass encoding issues
    with open('index_old_full.html', 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Find the face-master-section end
    # We look for the closing </section> of face-master
    # A robust way is to find the start, then find the next </section>
    
    face_start_idx = content.find('class="face-master')
    if face_start_idx == -1:
        print("Could not find face-master start")
    else:
        face_end = content.find('</section>', face_start_idx)
        if face_end == -1:
            print("Could not find face-master section end")
        else:
            # Look for stats section
            stats_start = content.find('class="stats-section', face_end)
            
            # Print content between them
            start_pos = face_end + 10 
            end_pos = stats_start if stats_start != -1 else face_end + 5000
            
            print(f"--- CONTENT BETWEEN FACE AND STATS (approx {end_pos - start_pos} chars) ---")
            print(content[start_pos:end_pos])
            print("--- END PREVIEW ---")

except Exception as e:
    print(f"Error: {e}")
