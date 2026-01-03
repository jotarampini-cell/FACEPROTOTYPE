import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the testimonials section avatars with full names and detailed descriptions
pattern = r'(<section class="tony-cinematic-slider">.*?</section>)'

replacement = '''<section class="tony-cinematic-slider">
    
    <div class="slider-backgrounds">
        <div class="bg-overlay"></div>
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80" 
             class="sync-bg active" data-id="0" alt="Background Maria">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1920&q=80" 
             class="sync-bg" data-id="1" alt="Background Carlos">
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1920&q=80" 
             class="sync-bg" data-id="2" alt="Background Ana">
    </div>

    <div class="content-layer">
        <div class="reviews-wrapper">

            <div class="sync-review active" data-id="0">
                <h2 class="sync-quote">
                    &ldquo;FACE transformó completamente nuestra cultura. Los resultados fueron inmediatos y medibles.&rdquo;
                </h2>
                <div class="sync-author">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                         class="author-img" alt="María González">
                    <div class="author-details">
                        <span class="name">María González</span>
                        <span class="role">CEO, Innovatech</span>
                    </div>
                </div>
            </div>

            <div class="sync-review" data-id="1">
                <h2 class="sync-quote">
                    &ldquo;El programa nos ayudó a descubrir oportunidades de innovación que teníamos frente a nosotros.&rdquo;
                </h2>
                <div class="sync-author">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" 
                         class="author-img" alt="Carlos Méndez">
                    <div class="author-details">
                        <span class="name">Carlos Méndez</span>
                        <span class="role">Director de Innovación, TechCorp</span>
                    </div>
                </div>
            </div>

            <div class="sync-review" data-id="2">
                <h2 class="sync-quote">
                    &ldquo;Una experiencia transformadora que cambió la forma en que pensamos sobre el futuro.&rdquo;
                </h2>
                <div class="sync-author">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" 
                         class="author-img" alt="Ana Rodríguez">
                    <div class="author-details">
                        <span class="name">Ana Rodríguez</span>
                        <span class="role">VP Estrategia, Global Solutions</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="sync-controls">
        <div class="avatar-carousel">
            
            <div class="avatar-nav-item active" onclick="goToSlide(0)">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" class="avatar-nav-img" alt="María González">
                <div class="avatar-nav-info">
                    <span class="avatar-nav-name">María González</span>
                    <span class="avatar-nav-role">CEO de Innovatech, Experta en Transformación Digital, 15 años liderando innovación empresarial</span>
                </div>
            </div>

            <div class="avatar-nav-item" onclick="goToSlide(1)">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" class="avatar-nav-img" alt="Carlos Méndez">
                <div class="avatar-nav-info">
                    <span class="avatar-nav-name">Carlos Méndez</span>
                    <span class="avatar-nav-role">Director de Innovación en TechCorp, Pionero en metodologías ágiles, Speaker internacional</span>
                </div>
            </div>

            <div class="avatar-nav-item" onclick="goToSlide(2)">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" class="avatar-nav-img" alt="Ana Rodríguez">
                <div class="avatar-nav-info">
                    <span class="avatar-nav-name">Ana Rodríguez</span>
                    <span class="avatar-nav-role">VP de Estrategia en Global Solutions, MBA Harvard, Mentora de startups tecnológicas</span>
                </div>
            </div>

        </div>
    </div>

</section>'''

# Replace using regex with DOTALL flag
content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("HTML updated: Full names + detailed multi-line descriptions!")
