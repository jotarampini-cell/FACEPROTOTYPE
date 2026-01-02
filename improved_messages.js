// Mensajes mejorados con estructura profesional de 4 partes
const galaxyIdeas = [
    {
        t: "Toyota & Ford",
        context: "Ford había perfeccionado las líneas de ensamblaje. Los supermercados japoneses reponían productos solo cuando se agotaban.",
        adaptation: "Toyota combinó ambos sistemas: producir solo lo necesario, justo cuando se necesita. Crearon el Just-in-Time.",
        impact: "Inventario reducido en 90%. Cero desperdicio. Dominaron la industria automotriz global por décadas.",
        lesson: "Combina lo mejor de dos industrias diferentes. La innovación vive en la intersección.",
        category: "Procesos"
    },
    {
        t: "Netflix & Correos",
        context: "Blockbuster cobraba multas que frustraban a los clientes. El servicio postal funcionaba de manera confiable.",
        adaptation: "Aplicaron el modelo de suscripción de gimnasios al alquiler de películas por correo. Sin fechas de devolución, sin multas.",
        impact: "Retención del 93% de clientes. Blockbuster cerró. Netflix vale más de $150B hoy.",
        lesson: "Un modelo de negocio de otra industria puede destruir a tu competencia.",
        category: "Negocios"
    },
    {
        t: "Steve Jobs & Xerox",
        context: "Xerox PARC inventó la interfaz gráfica y el mouse en 1973, pero no lo comercializaron.",
        adaptation: "Jobs visitó Xerox, vio el potencial y lo adaptó para usuarios comunes, no solo ingenieros.",
        impact: "Macintosh revolucionó la computación personal. Xerox perdió miles de millones.",
        lesson: "La mejor tecnología está en laboratorios sin explotar. Obsérvalas y adáptalas.",
        category: "Tecnología"
    },
    {
        t: "McDonald's & Fábricas",
        context: "Henry Ford había perfeccionado las líneas de ensamblaje para producir autos en masa.",
        adaptation: "Los hermanos McDonald aplicaron los mismos principios de manufactura a la cocina.",
        impact: "Hamburguesas en 30 segundos. Inventaron la 'comida rápida'. Imperio global con 40,000 restaurantes.",
        lesson: "Los procesos de manufactura pueden aplicarse a servicios. Piensa en tu negocio como una fábrica.",
        category: "Procesos"
    },
    {
        t: "Spotify & Piratería",
        context: "Napster ofrecía música instantánea gratis, pero era ilegal. La industria musical estaba en crisis.",
        adaptation: "Replicaron la velocidad y el acceso de Napster, pero legalmente, con licencias de las discográficas.",
        impact: "500M de usuarios. Salvaron la industria musical. El streaming es ahora el estándar.",
        lesson: "Si no puedes vencer al mercado negro, copia su conveniencia y hazlo legal.",
        category: "Negocios"
    },
    {
        t: "Uber & GPS",
        context: "Millones de autos privados estaban vacíos la mayor parte del día. Los smartphones tenían GPS integrado.",
        adaptation: "Conectaron la capacidad ociosa de vehículos con personas que necesitaban transporte usando tecnología existente.",
        impact: "Valuación de $90B sin poseer un solo auto. Revolucionaron el transporte urbano global.",
        lesson: "No crees activos. Conecta oferta subutilizada con demanda insatisfecha.",
        category: "Tecnología"
    },
    {
        t: "Airbnb & Craigslist",
        context: "Habitaciones vacías en millones de casas. Craigslist permitía publicar anuncios pero era inseguro.",
        adaptation: "Añadieron fotos profesionales, reseñas verificadas, sistema de pago seguro y seguro de daños.",
        impact: "Mayor inventario que Marriott sin construir nada. Valuación de $100B+.",
        lesson: "Mejora mercados existentes añadiendo confianza y experiencia de usuario.",
        category: "Negocios"
    },
    {
        t: "Instagram & Simplificación",
        context: "Burbn era una app compleja con 20 funciones: check-ins, juegos, fotos, comentarios.",
        adaptation: "Analizaron los datos. La gente solo usaba fotos y filtros. Eliminaron todo lo demás.",
        impact: "1M de usuarios en 2 meses. Vendida a Facebook por $1B en 2 años.",
        lesson: "Menos es más. Identifica la única función que aman y elimina el resto.",
        category: "Tecnología"
    },
    {
        t: "Ford & Mataderos",
        context: "Los mataderos de Chicago usaban cintas transportadoras para desarmar cerdos eficientemente.",
        adaptation: "Henry Ford invirtió el concepto: en vez de desarmar animales, ensambló autos en línea.",
        impact: "Tiempo de ensamblaje redujo de 12 horas a 93 minutos. Autos accesibles para la clase media.",
        lesson: "Invierte procesos de otras industrias. Lo que divide, puede unir y viceversa.",
        category: "Procesos"
    },
    {
        t: "Cirque du Soleil",
        context: "Los circos tradicionales competían en precio con animales caros. El teatro cobraba precios premium.",
        adaptation: "Eliminaron los animales. Añadieron arte escénico de teatro, música en vivo y narrativa emocional.",
        impact: "Cobraron $150 vs $20 del circo tradicional. Crearon un océano azul sin competencia.",
        lesson: "Elimina lo costoso. Añade lo artístico. Compite en valor, no en precio.",
        category: "Negocios"
    },
    {
        t: "Nespresso & Baristas",
        context: "El café casero era malo. El café de barista era excelente pero lento y caro.",
        adaptation: "Encapsularon la técnica del barista en una cápsula sellada con presión y temperatura perfectas.",
        impact: "Café premium en casa en 30 segundos. Convirtieron un commodity en un producto de lujo.",
        lesson: "Empaqueta experiencia experta en un producto que cualquiera pueda usar.",
        category: "Negocios"
    },
    {
        t: "IKEA & Logística",
        context: "Enviar muebles armados era costoso: 70% del paquete era aire. Almacenamiento ocupaba espacio masivo.",
        adaptation: "Inventaron el paquete plano. El cliente arma. IKEA ahorra transporte, almacén y mano de obra.",
        impact: "Precios 40% más bajos que la competencia. Expansión global. Líder en muebles económicos.",
        lesson: "Transfiere trabajo al cliente a cambio de precio bajo. Hazlo sentir como logro (DIY).",
        category: "Procesos"
    },
    {
        t: "Zara & Velocidad",
        context: "Las tendencias de moda de París tardaban 6 meses en llegar de la pasarela a las tiendas.",
        adaptation: "Copiaron las tendencias, produjeron rápido en España y distribuyeron a tiendas en 2 semanas.",
        impact: "Ropa de moda con velocidad ultra-rápida. Inditex convirtió a Amancio Ortega en multimillonario.",
        lesson: "No diseñes desde cero. Copia rápido y distribuye más rápido que nadie.",
        category: "Procesos"
    },
    {
        t: "Amazon & Librerías",
        context: "Las librerías físicas solo podían almacenar 100,000 títulos por limitaciones de espacio.",
        adaptation: "Usaron internet para listar millones de libros sin necesidad de inventario físico inicial.",
        impact: "Catálogo infinito. Dominaron el retail mundial. Jeff Bezos entre los más ricos del mundo.",
        lesson: "Internet elimina restricciones físicas. Ofrece lo que es imposible en formato físico.",
        category: "Tecnología"
    },
    {
        t: "Google & Academia",
        context: "En la academia, los papers importantes reciben más citas de otros papers. Así se mide la relevancia.",
        adaptation: "Aplicaron el mismo principio a internet: las páginas con más enlaces entrantes son más importantes (PageRank).",
        impact: "Búsqueda 100x mejor que competidores. Google se convirtió en verbo. Valuación de $2 trillones.",
        lesson: "Los sistemas de reputación de la academia funcionan en los negocios digitales.",
        category: "Tecnología"
    },
    {
        t: "Dyson & Ciclones Industriales",
        context: "Los aserraderos usaban ciclones gigantes para separar aserrín del aire en fábricas.",
        adaptation: "James Dyson miniaturizó esta tecnología industrial para crear aspiradoras caseras sin pérdida de succión.",
        impact: "Aspiradora sin bolsas, sin pérdida de potencia. Dyson vendió su empresa en $5B.",
        lesson: "La tecnología industrial puede miniaturizarse para consumo masivo.",
        category: "Tecnología"
    },
    {
        t: "Nintendo & Evolución",
        context: "Nintendo fabricaba naipes (cartas de juego) desde 1889. Era su único negocio.",
        adaptation: "Mantuvieron su esencia (entretenimiento y juegos) pero pivotaron el medio: de papel a electrónica.",
        impact: "Game Boy, NES, Switch. Líder en videojuegos por 40+ años. Valuación de $85B.",
        lesson: "No abandones tu esencia. Cambia el medio, conserva el propósito y valores.",
        category: "Negocios"
    },
    {
        t: "Starbucks & Italia",
        context: "Los bares italianos ofrecían espresso de calidad, ambiente social y 'tercer lugar' entre casa y trabajo.",
        adaptation: "Howard Schultz importó la experiencia completa a EEUU: no solo el café, sino la cultura.",
        impact: "Café pasó de $0.50 a $5. 35,000 tiendas. El café se convirtió en estilo de vida.",
        lesson: "No vendas solo producto. Importa cultura y experiencia de otro país.",
        category: "Cultura"
    },
    {
        t: "Tesla & Baterías de Laptop",
        context: "Las baterías de litio de laptops eran baratas y probadas. Los autos deportivos Lotus Elise eran ligeros.",
        adaptation: "Empaquetaron 7,000 baterías de laptop en el chasis de un Lotus Elise modificado.",
        impact: "Primer auto eléctrico sexy con 400km de autonomía. Revolucionaron la industria automotriz.",
        lesson: "Combina componentes masivos existentes de forma novedosa para crear algo nuevo.",
        category: "Tecnología"
    },
    {
        t: "Wikipedia & Multitudes",
        context: "La Enciclopedia Británica tenía editores expertos. Era lenta, costosa y limitada a 120,000 artículos.",
        adaptation: "Reemplazaron expertos pagados por 'sabiduría de multitudes' con edición abierta y colaborativa.",
        impact: "60M de artículos gratis vs 120K pagados. La Británica cerró su edición impresa.",
        lesson: "El crowdsourcing puede superar a expertos si tienes escala masiva y buen sistema.",
        category: "Cultura"
    },
    {
        t: "Zoom & Simplicidad",
        context: "Skype y WebEx requerían instalación, cuenta, configuración. Eran al menos 20 clicks para empezar.",
        adaptation: "Crearon un solo enlace. Click y entras. Sin registro, sin descargas, sin fricción.",
        impact: "300M de usuarios diarios en pandemia. 'Zoom' se convirtió en verbo. Valuación de $100B.",
        lesson: "Elimina fricción obsesivamente. Cada click extra mata conversión y adopción.",
        category: "Tecnología"
    },
    {
        t: "Duolingo & Gaming",
        context: "Los videojuegos eran adictivos con vidas, niveles y rachas. La educación tradicional era aburrida.",
        adaptation: "Aplicaron mecánicas de videojuegos (Candy Crush) al aprendizaje de idiomas.",
        impact: "500M de usuarios. Aprender se siente como jugar. IPO con valuación de $6B.",
        lesson: "Gamifica lo aburrido. La psicología de los juegos funciona en cualquier industria.",
        category: "Cultura"
    },
    {
        t: "Slack & Pivote",
        context: "Glitch era un videojuego que fracasó completamente. Pero la herramienta de chat interno funcionaba increíble.",
        adaptation: "El juego murió. Extrajeron el chat interno que habían creado y lo vendieron como producto independiente.",
        impact: "Slack vendido a Salesforce por $28B. Reemplazó al email en miles de empresas.",
        lesson: "Tus herramientas internas pueden valer más que tu producto principal. Obsérvalas.",
        category: "Negocios"
    },
    {
        t: "WhatsApp & Infraestructura",
        context: "Los SMS cobraban $0.10 por mensaje. Internet móvil ilimitado estaba emergiendo globalmente.",
        adaptation: "Enviaron mensajes usando datos (internet) en vez de la red SMS tradicional.",
        impact: "Mensajería gratis. 2B de usuarios. Vendido a Facebook por $19B.",
        lesson: "Usa infraestructura nueva para hacer gratis lo que antes costaba dinero.",
        category: "Tecnología"
    },
    {
        t: "Youtube & Apertura",
        context: "Empezó como sitio de citas en video. Nadie subía videos de citas. La idea original fracasó totalmente.",
        adaptation: "Abrieron la plataforma a cualquier tipo de video. Dejaron que los usuarios decidieran el uso.",
        impact: "Plataforma #1 de video mundial. Vendida a Google por $1.65B. 2B+ de usuarios activos.",
        lesson: "Si tu idea inicial falla, abre las puertas. Deja que los usuarios definan el producto.",
        category: "Cultura"
    }
];
