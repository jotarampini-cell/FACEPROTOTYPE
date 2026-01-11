import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new stats section
new_section = '''
    <!-- Stats Section: Monolito Digital -->
    <section class="stats-section-mono">
        <div class="stats-container">
            
            <div class="stats-header">
                <h2 class="stats-title">LA EVIDENCIA DEL MERCADO</h2>
                <p class="stats-subtitle">Datos duros. Sin opiniones.</p>
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
                                <span class="stat-brand">ADOBE</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">52%</h3>
                                <p class="stat-desc">De las Fortune 500 del año 2000 ya no existen hoy.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand">FORBES</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">50%</h3>
                                <p class="stat-desc">Mejora en eficiencia operativa al adoptar metodologías ágiles.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand">McKINSEY</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">1.5x</h3>
                                <p class="stat-desc">Mayor crecimiento de ingresos al priorizar la experiencia del empleado.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand">IBM</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-body">
                                <h3 class="stat-number">+21%</h3>
                                <p class="stat-desc">Mayor rentabilidad en equipos altamente comprometidos.</p>
                            </div>
                            <div class="stat-footer">
                                <span class="stat-label">FUENTE</span>
                                <span class="stat-brand">GALLUP</span>
                            </div>
                        </div>

                    </div>
                </div>

                <button class="stats-nav next" aria-label="Siguiente">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>

            </div>

            <div class="stats-dots">
                <button class="stat-dot active" aria-label="Ir a slide 1"></button>
                <button class="stat-dot" aria-label="Ir a slide 2"></button>
                <button class="stat-dot" aria-label="Ir a slide 3"></button>
                <button class="stat-dot" aria-label="Ir a slide 4"></button>
                <button class="stat-dot" aria-label="Ir a slide 5"></button>
            </div>

        </div>
    </section>
'''

# Pattern to match the entire stats section
pattern = r'<!-- Stats Section: Monolito Digital -->.*?</section>'

# Replace
content = re.sub(pattern, new_section.strip(), content, flags=re.DOTALL)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Stats section replaced successfully!")
