
new_html_content = """<!-- SECCIÓN RESULTADOS WHITE -->
<section class="white-results-section">
    <div class="results-container">
        
        <div class="results-content-side">
            <h2 class="results-heading">LA INNOVACIÓN NO ES OPCIONAL, ES SUPERVIVENCIA.</h2>
            <p class="results-lead">
                El mercado no espera. Las empresas que no activan la inteligencia colectiva de sus equipos están condenadas a la irrelevancia. Los datos confirman la urgencia de cambiar el modelo mental ahora.
            </p>

            <div class="stats-block-grid">
                <div class="stat-unit">
                    <h3 class="stat-num-large">42%</h3>
                    <p class="stat-label-text">
                        De los CEOs creen que su modelo de negocio actual <strong>no será viable en 10 años.</strong>
                    </p>
                    <span class="stat-source-small">Fuente: PwC Global CEO Survey</span>
                </div>

                <div class="stat-unit">
                    <h3 class="stat-num-large">52%</h3>
                    <p class="stat-label-text">
                        De las empresas Fortune 500 del año 2000 <strong>ya no existen hoy.</strong>
                    </p>
                    <span class="stat-source-small">Fuente: Forbes</span>
                </div>
            </div>

            <a href="#programa-innova" class="results-cta-btn">Conocer el Programa</a>
        </div>

        <div class="results-video-side">
            <div class="video-portrait-container">
                <img src="https://placehold.co/600x800/1a1a1a/ffffff?text=VIDEO+DEL+PROGRAMA" alt="Video Innova Desde Adentro" class="video-thumbnail">
                
                <button class="glass-play-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="play-icon"><path d="M8 5v14l11-7z"/></svg>
                    <span class="glass-btn-text">VER PROGRAMA</span>
                </button>

                <div class="video-internal-branding">
                    <span class="brand-sub">PROGRAMA</span>
                    <h4 class="brand-main">INNOVA DESDE ADENTRO</h4>
                </div>
            </div>

            <div class="testimonial-below-video">
                <p class="quote-text">"Implementar esta metodología fue el punto de inflexión. Dejamos de apagar incendios y empezamos a construir el futuro de la empresa."</p>
                <span class="quote-author">Alejandro Betancourt, CEO Industrial</span>
            </div>
        </div>

    </div>
</section>
"""

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Insert HTML
# Find <!-- Monolito CTA Section --> and insert before it
# Look for <section class="monolith-section"> if comment not exact
insert_point = content.find('<section class="monolith-section">')

if insert_point != -1:
    # Check for preceding comment
    comment_search = content.rfind('<!-- Monolito CTA Section -->', 0, insert_point)
    if comment_search != -1 and (insert_point - comment_search) < 100:
        insert_point = comment_search
        
    updated_content = content[:insert_point] + new_html_content + "\n\n    " + content[insert_point:]
    
    # 2. Insert CSS Link
    if 'css/white-results.css' not in updated_content:
        updated_content = updated_content.replace('</head>', '    <link rel="stylesheet" href="css/white-results.css">\n</head>')
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("✅ White Results section injected successfully.")
else:
    print("❌ Could not find Monolith section to insert before.")
