import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Google Fonts import before the closing </head> tag
fonts_import = '''    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Libre+Baskerville:wght@700&family=Montserrat:wght@300;400;700&family=Oswald:wght@400;700&family=Playfair+Display:wght@700&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
'''

# Find </head> and insert before it if not already present
if 'fonts.googleapis' not in content:
    content = content.replace('</head>', fonts_import + '</head>')

# 2. Replace the stats section with the new 14-card version
new_section = '''    <section class="stats-section-mono">
        <div class="stats-container">
            
            <div class="stats-header">
                <h2 class="stats-title">LA EVIDENCIA DEL MERCADO</h2>
                <p class="stats-subtitle">La innovación no es magia. Es matemática.</p>
            </div>

            <div class="stats-carousel-wrapper">
                
                <button class="stats-nav prev" aria-label="Anterior">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>

                <div class="stats-track-container">
                    <div class="stats-track" id="statsTrack">
                        
                        <div class="stat-card active">
                            <div class="stat-body">
                                <h3 class="stat-number">78%</h3>
                                <p class="stat-desc">De empresas que invierten en creatividad aumentan su productividad.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-adobe">Adobe</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">52%</h3>
                                <p class="stat-desc">De las Fortune 500 del año 2000 ya no existen hoy.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-forbes">Forbes</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">50%</h3>
                                <p class="stat-desc">Mejora en eficiencia operativa al adoptar metodologías ágiles.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-mckinsey">McKinsey&Company</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">1.5x</h3>
                                <p class="stat-desc">Mayor crecimiento de ingresos al priorizar la experiencia del empleado.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-ibm">IBM</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">+21%</h3>
                                <p class="stat-desc">Mayor rentabilidad en equipos altamente comprometidos.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-gallup">GALLUP</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">+260%</h3>
                                <p class="stat-desc">Retorno total para accionistas en empresas innovadoras.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-bcg">BCG</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">5.5x</h3>
                                <p class="stat-desc">Más probabilidad de retener talento clave en culturas innovadoras.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-deloitte">Deloitte.</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">80%</h3>
                                <p class="stat-desc">Del potencial de mejora reside en ideas de empleados de primera línea.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-hbr">HBR</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">2x</h3>
                                <p class="stat-desc">Las empresas innovadoras crecen al doble de velocidad que sus rivales.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-gartner">Gartner.</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">10x</h3>
                                <p class="stat-desc">La cultura tóxica predice la renuncia 10 veces más que el salario.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-mit">MITSloan</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">84%</h3>
                                <p class="stat-desc">Ejecutivos afirman que la innovación es crítica para su crecimiento.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-accenture">Accenture</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">86%</h3>
                                <p class="stat-desc">Ejecutivos culpan a la falta de colaboración por fallos en proyectos.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-salesforce">salesforce</span>
                            </div>
                        </div>

                         <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">60%</h3>
                                <p class="stat-desc">De los CEOs creen que su modelo de negocio actual no será viable en 10 años.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-pwc">pwc</span>
                            </div>
                        </div>

                         <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">20%</h3>
                                <p class="stat-desc">Del tiempo laboral dedicado a proyectos personales genera el 50% de los productos exitosos.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand logo-google">Google</span>
                            </div>
                        </div>

                    </div>
                </div>

                <button class="stats-nav next" aria-label="Siguiente">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>

            </div>

            <div class="stats-dots">
                <!-- Dots will be generated dynamically by JavaScript -->
            </div>

        </div>
    </section>'''

# Replace stats section
pattern = r'<section class="stats-section-mono">.*?</section>'
content = re.sub(pattern, new_section, content, count=1, flags=re.DOTALL)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ HTML updated: Google Fonts added, 14 cards implemented!")
