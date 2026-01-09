#!/usr/bin/env python3
# Script to replace Service section with Pro version with real data

new_section = '''    <!-- Service Section: La Plataforma de Aliados (Professional Grade) -->
    <section class="tech-service-section">
        <div class="tech-grid-bg"></div>
        
        <div class="tr-container">
            <div class="service-layout-vertical">
                
                <div class="header-centered reveal-on-scroll">
                    <div class="tech-badge-pro">
                        <span class="status-indicator"></span> SISTEMA OPERATIVO CULTURAL
                    </div>
                    <h2 class="service-title">
                        ESTA PLATAFORMA ES TU <br>
                        <span class="text-cyan-glow">CENTRO DE MANDO.</span>
                    </h2>
                    <p class="service-body-large">
                        Innovar en una estructura establecida es una guerra contra la inercia. No tienes que pelearla solo. 
                        <strong>Hemos construido esta infraestructura para ti.</strong> Te entregamos los datos, los protocolos y la evidencia táctica para que demuestres, sin lugar a dudas, que la cultura es el activo más rentable de tu empresa.
                    </p>
                </div>

                <div class="tech-marquee-wrapper reveal-on-scroll">
                    
                    <div class="marquee-row scroll-left">
                        <div class="marquee-content">
                            
                            <div class="tech-stat-card">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/><path d="M13 17l-4-4"/></svg>
                                </div>
                                <h4 class="ts-num text-gray">70%</h4>
                                <p class="ts-desc">De las transformaciones fallan por resistencia cultural y falta de compromiso directivo.</p>
                                <span class="ts-source">FUENTE: MCKINSEY & CO. (2022)</span>
                            </div>

                            <div class="tech-stat-card highlight">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                </div>
                                <h4 class="ts-num text-cyan">3x</h4>
                                <p class="ts-desc">Retorno para accionistas en empresas resilientes e innovadoras vs el promedio del S&P.</p>
                                <span class="ts-source">FUENTE: BOSTON CONSULTING GROUP</span>
                            </div>

                            <div class="tech-stat-card">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/></svg>
                                </div>
                                <h4 class="ts-num text-gray">34%</h4>
                                <p class="ts-desc">De los empleados prefieren renunciar antes que expresar sus preocupaciones reales a la gerencia.</p>
                                <span class="ts-source">FUENTE: UKG WORKFORCE INST.</span>
                            </div>

                            <div class="tech-stat-card">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                </div>
                                <h4 class="ts-num text-gray">70%</h4>
                                <p class="ts-desc">De los empleados reportan sentirse desconectados de la cultura de su lugar de trabajo.</p>
                                <span class="ts-source">FUENTE: PSICO-SMART / WORK INST.</span>
                            </div>

                            <!-- Duplicados para loop continuo -->
                            <div class="tech-stat-card">
                                <div class="ts-icon-svg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/><path d="M13 17l-4-4"/></svg></div>
                                <h4 class="ts-num text-gray">70%</h4>
                                <p class="ts-desc">De las transformaciones fallan por resistencia cultural y falta de compromiso directivo.</p>
                                <span class="ts-source">FUENTE: MCKINSEY & CO.</span>
                            </div>
                            <div class="tech-stat-card highlight">
                                <div class="ts-icon-svg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                                <h4 class="ts-num text-cyan">3x</h4>
                                <p class="ts-desc">Retorno para accionistas en empresas resilientes e innovadoras vs el promedio del S&P.</p>
                                <span class="ts-source">FUENTE: BOSTON CONSULTING GROUP</span>
                            </div>
                        </div>
                    </div>

                    <div class="marquee-row scroll-right">
                        <div class="marquee-content">
                            
                            <div class="tech-stat-card">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 7v14M5 12l7-7 7 7"/></svg>
                                </div>
                                <h4 class="ts-num text-gray">19%</h4>
                                <p class="ts-desc">De las empresas familiares logran sobrevivir y pasar exitosamente a la 3ra generación.</p>
                                <span class="ts-source">FUENTE: FAMILY BUSINESS INST.</span>
                            </div>

                            <div class="tech-stat-card highlight">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                </div>
                                <h4 class="ts-num text-cyan">40%</h4>
                                <p class="ts-desc">Más rápido es el "Time-to-Market" al implementar metodologías ágiles de innovación.</p>
                                <span class="ts-source">FUENTE: FULLSCALE / MCKINSEY</span>
                            </div>

                            <div class="tech-stat-card">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h.01M12 9h.01M16 9h.01"/></svg>
                                </div>
                                <h4 class="ts-num text-gray">60%</h4>
                                <p class="ts-desc">De los empleados sienten que sus opiniones y puntos de vista son ignorados.</p>
                                <span class="ts-source">FUENTE: THE WORKFORCE INSTITUTE</span>
                            </div>

                            <div class="tech-stat-card highlight">
                                <div class="ts-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                </div>
                                <h4 class="ts-num text-cyan">+21%</h4>
                                <p class="ts-desc">Aumento en rentabilidad en empresas con equipos altamente comprometidos.</p>
                                <span class="ts-source">FUENTE: GALLUP</span>
                            </div>

                            <!-- Duplicados para loop continuo -->
                            <div class="tech-stat-card">
                                <div class="ts-icon-svg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 7v14M5 12l7-7 7 7"/></svg></div>
                                <h4 class="ts-num text-gray">19%</h4>
                                <p class="ts-desc">De las empresas familiares logran sobrevivir y pasar exitosamente a la 3ra generación.</p>
                                <span class="ts-source">FUENTE: FAMILY BUSINESS INST.</span>
                            </div>
                            <div class="tech-stat-card highlight">
                                <div class="ts-icon-svg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                                <h4 class="ts-num text-cyan">40%</h4>
                                <p class="ts-desc">Más rápido es el "Time-to-Market" al implementar metodologías ágiles de innovación.</p>
                                <span class="ts-source">FUENTE: FULLSCALE / MCKINSEY</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="service-cta-center">
                    <a href="innova-desde-adentro.html" class="btn-tech-solid-large">
                        ACCEDER A LA PLATAFORMA <span class="arrow">→</span>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <style>
        /* --- SECCIÓN SERVICE PROFESSIONAL GRADE --- */
        .tech-service-section {
            background-color: #050505;
            padding: 120px 20px;
            position: relative;
            overflow: hidden;
            color: #e2e8f0;
            border-bottom: 1px solid #1f2937;
        }

        /* Grid background */
        .tech-grid-bg {
            position: absolute;
            inset: 0;
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 0;
            pointer-events: none;
        }

        .service-layout-vertical {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Header Centered */
        .header-centered {
            text-align: center;
            max-width: 900px;
            margin: 0 auto 80px auto;
        }

        .tech-badge-pro {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(0, 243, 255, 0.05);
            border: 1px solid rgba(0, 243, 255, 0.2);
            padding: 8px 16px;
            border-radius: 4px;
            margin-bottom: 30px;
            font-family: 'Oswald', sans-serif;
            font-size: 0.8rem;
            letter-spacing: 2px;
            color: #00f3ff;
        }

        .status-indicator {
            width: 8px;
            height: 8px;
            background: #00f3ff;
            border-radius: 50%;
            box-shadow: 0 0 10px #00f3ff;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }

        .service-title {
            font-family: 'Oswald', sans-serif;
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            line-height: 1.1;
            margin-bottom: 30px;
            color: white;
            text-transform: uppercase;
        }

        .text-cyan-glow {
            color: #00f3ff;
            text-shadow: 0 0 30px rgba(0, 243, 255, 0.3);
        }

        .service-body-large {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.2rem;
            line-height: 1.8;
            color: #94a3b8;
            max-width: 800px;
            margin: 0 auto;
        }

        .service-body-large strong {
            color: #00f3ff;
            font-weight: 600;
        }

        /* Marquee Container */
        .tech-marquee-wrapper {
            margin-top: 60px;
            overflow: hidden;
            position: relative;
        }

        .marquee-row {
            display: flex;
            margin-bottom: 30px;
        }

        .marquee-content {
            display: flex;
            gap: 40px;
            padding-left: 40px;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

        .scroll-left .marquee-content {
            animation: scrollLeft 60s linear infinite;
        }

        .scroll-right .marquee-content {
            animation: scrollRight 60s linear infinite;
        }

        @keyframes scrollLeft {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }

        @keyframes scrollRight {
            0% {
                transform: translateX(-50%);
            }
            100% {
                transform: translateX(0);
            }
        }

        /* Stat Cards Professional */
        .tech-stat-card {
            background: #0a0c10;
            border: 1px solid #1f2937;
            border-radius: 8px;
            padding: 30px 25px;
            width: 320px;
            white-space: normal;
            transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 280px;
        }

        .tech-stat-card:hover {
            border-color: #444;
            background: #111;
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .tech-stat-card.highlight {
            background: linear-gradient(145deg, rgba(0, 243, 255, 0.03) 0%, transparent 100%);
            border-color: rgba(0, 243, 255, 0.15);
        }

        .tech-stat-card.highlight:hover {
            border-color: #00f3ff;
            box-shadow: 0 0 30px rgba(0, 243, 255, 0.1);
        }

        /* SVG Icons */
        .ts-icon-svg {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            margin-bottom: 20px;
            color: #888;
            transition: 0.3s;
        }

        .tech-stat-card.highlight .ts-icon-svg {
            color: #00f3ff;
            background: rgba(0, 243, 255, 0.1);
        }

        .ts-icon-svg svg {
            width: 24px;
            height: 24px;
        }

        /* Typography */
        .ts-num {
            font-family: 'Oswald', sans-serif;
            font-size: 3rem;
            line-height: 1;
            margin: 0 0 15px 0;
            letter-spacing: -1px;
        }

        .text-gray {
            color: #64748b;
        }

        .text-cyan {
            color: #00f3ff;
            text-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
        }

        .ts-desc {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            color: #94a3b8;
            line-height: 1.5;
            margin: 0 0 20px 0;
            flex-grow: 1;
        }

        .ts-desc strong {
            color: white;
            font-weight: 600;
        }

        /* Source Citation */
        .ts-source {
            display: block;
            font-family: 'Oswald', sans-serif;
            font-size: 0.65rem;
            color: #444;
            letter-spacing: 1px;
            border-top: 1px solid #1a1a1a;
            padding-top: 15px;
            margin-top: auto;
        }

        .tech-stat-card:hover .ts-source {
            color: #666;
            border-color: #333;
        }

        /* CTA Center */
        .service-cta-center {
            text-align: center;
            margin-top: 80px;
        }

        .btn-tech-solid-large {
            background: #00f3ff;
            color: #000;
            padding: 22px 50px;
            font-family: 'Oswald', sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
            text-decoration: none;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 15px;
            transition: 0.3s;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-tech-solid-large:hover {
            background: white;
            box-shadow: 0 0 40px rgba(0, 243, 255, 0.5);
            transform: translateX(5px);
        }

        /* Responsive */
        @media (max-width: 900px) {
            .header-centered {
                margin-bottom: 50px;
            }

            .service-title {
                font-size: 2.5rem;
            }

            .service-body-large {
                font-size: 1rem;
            }

            .tech-stat-card {
                width: 280px;
                height: auto;
                min-height: 260px;
            }
        }
    </style>
'''

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the section markers
start_marker = '    <!-- Service Section:'
end_marker = '    </style>'

# Find all occurrences
start_pos = content.find(start_marker)
if start_pos == -1:
    print("ERROR: Could not find start marker")
    exit(1)

# Find the corresponding end (we need to find the right </style> that closes this section)
# We'll count style tags to find the right one
temp_pos = start_pos
style_count = 0
while temp_pos < len(content):
    if content[temp_pos:temp_pos+7] == '<style>':
        style_count += 1
    if content[temp_pos:temp_pos+8] == '</style>' and style_count > 0:
        end_pos = temp_pos + 8
        break
    temp_pos += 1
else:
    print("ERROR: Could not find end marker")
    exit(1)

# Replace
new_content = content[:start_pos] + new_section + '\n' + content[end_pos:]

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Professional section with real data replaced successfully!")
