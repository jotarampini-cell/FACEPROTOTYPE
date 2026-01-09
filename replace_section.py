#!/usr/bin/env python3
# Script to replace Wake Up section with Service section

new_section = '''    <!-- Service Section: Tu Plataforma de Aliados (Dark Tech) -->
    <section class="tech-service-section">
        <div class="tech-grid-bg"></div>
        
        <div class="tr-container">
            <div class="service-grid">
                
                <div class="message-col reveal-on-scroll">
                    <div class="tech-badge">
                        <span class="pulse-icon">❤</span> LIDERAZGO DE SERVICIO
                    </div>
                    
                    <h2 class="service-title">
                        NO TIENES QUE <br>
                        HACERLO SOLO.
                    </h2>
                    
                    <p class="service-body">
                        Sabemos que liderar el cambio en una organización establecida es una de las tareas más solitarias que existen. La inercia cansa y la burocracia desgasta.
                    </p>
                    
                    <p class="service-body">
                        <strong>Esta plataforma fue construida para ti.</strong> No somos consultores externos que juzgan desde lejos. Somos tu equipo de soporte táctico. Estamos a tu servicio para darte las herramientas, los datos y la estructura que necesitas para demostrar que la innovación es el negocio más rentable.
                    </p>

                    <div class="service-cta-box">
                        <p class="cta-prompt">Úsanos para potenciar tu visión.</p>
                        <a href="innova-desde-adentro.html" class="btn-tech-solid">
                            EMPEZAR AHORA <span class="arrow">→</span>
                        </a>
                    </div>
                </div>

                <div class="stats-col reveal-on-scroll">
                    
                    <div class="stat-card pain-card">
                        <div class="stat-header">
                            <span class="stat-label">EL RIESGO DE NO ACTUAR</span>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#666" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                        </div>
                        <div class="stat-value-group">
                            <span class="big-num text-gray">70%</span>
                            <p class="stat-desc">
                                De las empresas que <strong>no innovan</strong> su cultura desaparecen o pierden relevancia en menos de una década.
                            </p>
                        </div>
                        <div class="progress-bar-gray"><div class="fill-gray"></div></div>
                    </div>

                    <div class="stat-card gain-card">
                        <div class="stat-header">
                            <span class="stat-label cyan-text">EL PODER DE LA INNOVACIÓN</span>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00f3ff" stroke-width="2"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                        </div>
                        <div class="stat-value-group">
                            <span class="big-num text-cyan">3.5x</span>
                            <p class="stat-desc">
                                Es el multiplicador de <strong>Rentabilidad Neta</strong> en organizaciones que activan la inteligencia colectiva de sus empleados.
                            </p>
                        </div>
                        <div class="progress-bar-cyan"><div class="fill-cyan"></div></div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <style>
        /* --- SECCIÓN SERVICE (Dark Tech) --- */
        .tech-service-section {
            background-color: #050505;
            padding: 120px 20px;
            position: relative;
            overflow: hidden;
            color: #e2e8f0;
            border-bottom: 1px solid #1f2937;
        }

        /* Reutilizamos el grid de fondo si ya existe, si no, aquí está */
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

        .service-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            position: relative;
            z-index: 2;
            max-width: 1100px;
            margin: 0 auto;
        }

        /* COLUMNA MENSAJE */
        .tech-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid #333;
            padding: 8px 16px;
            border-radius: 50px;
            margin-bottom: 25px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.75rem;
            letter-spacing: 2px;
            color: #ccc;
        }

        .pulse-icon {
            color: #ff4444;
            animation: heartbeat 1.5s infinite;
        }

        @keyframes heartbeat {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
        }

        .service-title {
            font-family: 'Oswald', sans-serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            line-height: 1;
            margin-bottom: 30px;
            color: white;
            text-transform: uppercase;
        }

        .service-body {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.1rem;
            line-height: 1.7;
            color: #94a3b8;
            margin-bottom: 25px;
        }

        .service-body strong {
            color: #00f3ff;
            font-weight: 600;
        }

        .service-cta-box {
            margin-top: 40px;
        }

        .cta-prompt {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            color: white;
            margin-bottom: 15px;
            font-size: 1.1rem;
        }

        .btn-tech-solid {
            background: #00f3ff;
            color: #000;
            padding: 18px 40px;
            font-family: 'Oswald', sans-serif;
            font-weight: 700;
            text-decoration: none;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: 0.3s;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-tech-solid:hover {
            background: white;
            box-shadow: 0 0 30px rgba(0, 243, 255, 0.4);
            transform: translateX(5px);
        }

        /* COLUMNA ESTADÍSTICAS (CARDS) */
        .stats-col {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .stat-card {
            background: #0a0c10;
            border: 1px solid #1f2937;
            border-radius: 12px;
            padding: 30px;
            transition: 0.3s;
            position: relative;
            overflow: hidden;
        }

        /* Card 1: Pain (Gris/Negativo) */
        .pain-card:hover {
            border-color: #444;
            transform: translateY(-5px);
        }

        .text-gray {
            color: #64748b;
        }

        .progress-bar-gray {
            width: 100%;
            height: 4px;
            background: #1a1a1a;
            margin-top: 20px;
            border-radius: 2px;
        }

        .fill-gray {
            width: 70%;
            height: 100%;
            background: #444;
        }

        /* Card 2: Gain (Cyan/Positivo) */
        .gain-card {
            border-color: rgba(0, 243, 255, 0.3);
            box-shadow: 0 0 30px rgba(0, 243, 255, 0.05);
        }

        .gain-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 50px rgba(0, 243, 255, 0.15);
            border-color: #00f3ff;
        }

        .cyan-text {
            color: #00f3ff;
        }

        .text-cyan {
            color: #00f3ff;
            text-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
        }

        .progress-bar-cyan {
            width: 100%;
            height: 4px;
            background: #1a1a1a;
            margin-top: 20px;
            border-radius: 2px;
        }

        .fill-cyan {
            width: 100%;
            height: 100%;
            background: #00f3ff;
            box-shadow: 0 0 10px #00f3ff;
            animation: fillUp 1.5s ease-out;
        }

        @keyframes fillUp {
            from {
                width: 0%;
            }
            to {
                width: 100%;
            }
        }

        /* Elementos Internos Card */
        .stat-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .stat-label {
            font-family: 'Oswald', sans-serif;
            font-size: 0.8rem;
            letter-spacing: 1px;
            color: #888;
        }

        .big-num {
            font-family: 'Oswald', sans-serif;
            font-size: 4rem;
            line-height: 1;
            display: block;
            margin-bottom: 10px;
        }

        .stat-desc {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            color: #94a3b8;
            line-height: 1.4;
        }

        .stat-desc strong {
            color: white;
        }

        /* Responsive */
        @media (max-width: 900px) {
            .service-grid {
                grid-template-columns: 1fr;
                gap: 50px;
            }

            .message-col {
                text-align: center;
            }

            .service-cta-box {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
'''

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Replace lines 1778-2137 (0-indexed: 1778-2138)
new_lines = lines[:1778] + [new_section + '\n'] + lines[2138:]

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Section replaced successfully!")
