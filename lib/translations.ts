export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      whyNodeana: 'Why Nodeana',
      process: 'Process',
      contact: 'Contact',
      faq: 'FAQ',
      bookCall: 'Get a free audit',
      chatWhatsApp: 'Chat on WhatsApp',
    },
    hero: {
      eyebrow: 'AI · Salesforce · High-Growth B2B',
      h1a: 'The AI and Salesforce partner built for companies ready to',
      h1span: 'accelerate operations and scale with confidence.',
      copy: 'Nodeana Labs combines deep Salesforce expertise and applied AI to help growth-stage B2B companies build the digital foundation they need to scale — senior execution, real outcomes, and a partner you can trust from day one.',
      cta1: 'Get a free architecture audit',
      cta2: 'See results in 60 days',
      proof: [
        {
          title: 'Senior delivery, every time',
          description: 'The practitioner you meet on day one is the same person building your system. No handoffs, no surprises.',
        },
        {
          title: 'Measurable results from day one',
          description: 'We scope, build, and ship fast. Most clients see real operational improvements within the first sprint.',
        },
        {
          title: 'One team. Full stack. No gaps.',
          description: 'Salesforce, AI, and senior talent — all under one roof. One conversation covers everything you need.',
        },
      ],
      cardTag: 'The Nodeana approach',
      cardH3: 'Clarity before code. Strategy before systems.',
      cardList: [
        'Free architecture audit — we map your stack before proposing anything',
        'Salesforce, AI, and senior talent under one roof',
        'Every engagement tied to a specific revenue or efficiency outcome',
        'Built for your next 3 years, not just this quarter\'s problem',
      ],
    },
    services: {
      eyebrow: 'Four ways we accelerate your growth',
      h2: 'Four areas. One team. Zero handoffs.',
      intro: 'Your Salesforce is underperforming. Your team is doing manual work that AI should handle. You need senior talent without the agency markup. We fix all of it — under one roof, without the overhead.',
      linkText: 'Fix this now →',
      items: [
        {
          title: 'Salesforce Implementation & Optimization',
          description: 'Most Salesforce orgs are 60% underutilized — misconfigured, overcomplicated, and built by someone who\'s long gone. We rebuild it around how your team actually sells and operates.',
          bullets: [
            'Architecture redesign & full implementation',
            'Flow automation that eliminates manual work',
            'Experience Cloud & revenue-critical integrations',
          ],
        },
        {
          title: 'AI Automation & Agents',
          description: 'Manual work is a tax on your team\'s time and your company\'s margins. We deploy AI that eliminates repetitive tasks, accelerates decisions, and routes work intelligently — inside the tools your team already uses.',
          bullets: [
            'Custom AI agents that work inside your existing stack',
            'Intelligent workflow automation & smart routing',
            'AI-powered ops dashboards & decision support',
          ],
        },
        {
          title: 'Systems & Growth Strategy',
          description: 'The wrong technology decision at the wrong moment costs 10x more to fix later. We map your systems, identify the gaps, and define a clear roadmap before a single dollar is spent on implementation.',
          bullets: [
            'Systems audit & technology gap analysis',
            'Roadmap definition tied to revenue milestones',
            'Trusted advisory for founders and operators',
          ],
        },
        {
          title: 'Tech Talent & Headhunting',
          description: 'One senior Salesforce architect or AI engineer is worth five average hires. We find and place the exact practitioners your team needs — without the agency markup or months-long searches.',
          bullets: [
            'Salesforce architects, developers & admins',
            'AI engineers, ML specialists & data professionals',
            'RevOps, digital ops & technology leaders',
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: 'Why Nodeana',
      h2: 'Senior execution. No bloated retainers. No junior handoffs.',
      paragraph: 'Most consulting firms sell you a senior team and hand you off to whoever is available. At Nodeana Labs, the practitioner you meet on day one is the same person building your system on day thirty. We stay lean on purpose — because that\'s the only way to guarantee the quality we promise.',
      items: [
        'Every engagement is led by a senior practitioner — the person you meet is the person who builds.',
        'Deep Salesforce architecture expertise combined with real-world AI implementation — not theoretical.',
        'Responses within hours, not days. Direct communication, no consultant-speak.',
        'No 12-month retainers. No bloated proposals. We scope tight, deliver fast, and expand when it makes sense.',
      ],
    },
    process: {
      eyebrow: 'How it works',
      h2: 'First contact to first delivery in weeks — not months.',
      intro: 'We skip the bloat. No kickoff ceremonies, no committee sign-offs, no 40-slide discovery decks. Tell us your problem, we validate the fit, and we start building.',
      steps: [
        {
          step: '01',
          title: 'Tell us where it hurts',
          description: 'Fill out the form or book a call. Tell us what\'s broken, what you need, and what success looks like. Every submission is read personally by a senior practitioner — not a sales rep.',
        },
        {
          step: '02',
          title: 'We validate the opportunity',
          description: 'Within 24 hours, we assess your context and tell you honestly whether we\'re the right fit — and what the realistic path forward looks like. No pitch. Just clarity.',
        },
        {
          step: '03',
          title: 'We build your roadmap',
          description: 'A focused 30-minute session where we map your gaps, define the 3 highest-impact fixes, and align on what we\'ll build — and what it will measurably change in your business.',
        },
      ],
    },
    contact: {
      eyebrow: 'Let\'s talk',
      h2: 'Tell us where it hurts. We\'ll tell you exactly how to fix it.',
      paragraph: 'Fill in the form. We review every submission personally and respond within 24 hours with a real answer — not a sales pitch. Replies come directly from',
      paragraphSuffix: 'so hit reply and keep the conversation going.',
      asideH3: 'Skip the form — book a free 30-min audit',
      asideP: 'Pick a time that works for you. We come prepared with questions, not a pitch deck. You\'ll leave with at least 3 actionable insights about your current stack.',
      asideBtn: 'Book my free audit',
      labelName: 'Full name',
      labelEmail: 'Work email',
      labelCompany: 'Company',
      labelService: 'What\'s your biggest challenge right now?',
      selectOptions: [
        'Salesforce Implementation',
        'Salesforce Optimization / Health Check',
        'AI Automation & Agents',
        'AI Strategy & Roadmap',
        'Tech Talent & Headhunting',
        'Strategic Advisory',
        'Not sure yet — let\'s talk',
      ],
      textareaLabel: 'What\'s broken or slowing you down?',
      textareaPlaceholder: 'Describe your current systems, the problem that\'s costing you the most, and what you need to look like in 90 days.',
      btnSend: 'Get my free audit',
      btnSending: 'Sending...',
      feedbackSending: 'Sending your inquiry...',
      feedbackSuccess: 'Done — you\'ll hear from us within 24 hours at info@nodeanalabs.com.',
      feedbackError: 'The form could not be submitted.',
      feedbackUnexpected: 'An unexpected error occurred.',
    },
    footer: {
      tagline: 'The AI-powered Salesforce partner for high-growth B2B companies. Senior execution. Real outcomes. Zero junior handoffs.',
      groups: [
        {
          title: 'Services',
          links: [
            { label: 'Salesforce Implementation', href: '#services' },
            { label: 'AI Automation & Agents', href: '#services' },
            { label: 'Tech Talent & Headhunting', href: '#services' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'Why Nodeana', href: '#why-us' },
            { label: 'How it works', href: '#process' },
            { label: 'FAQ', href: '#faq' },
          ],
        },
        {
          title: 'Start now',
          links: [
            { label: 'Get a free audit', href: '#contact' },
            { label: 'Book a 30-min call', href: '__CALENDLY__' },
            { label: 'Chat on WhatsApp', href: 'https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services' },
          ],
        },
      ],
      bottomLeft: '© {year} Nodeana Labs LLC. All rights reserved.',
      bottomRight: 'Built for high-growth B2B teams. Operated from Colombia. Incorporated in Wyoming.',
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Straight answers. No consultant-speak.',
      items: [
        {
          q: 'What exactly does Nodeana Labs do?',
          a: 'Nodeana Labs is the AI-powered Salesforce partner for high-growth B2B companies. We implement and optimize Salesforce, deploy AI automation, place senior tech talent, and provide strategic advisory — all under one roof, with zero junior handoffs. Incorporated in Wyoming, USA.',
        },
        {
          q: 'What size companies do you work with?',
          a: 'If your team is between 10 and 500 people and your operations are growing faster than your systems, we\'re probably the right fit. We work best with B2B companies that need senior execution but don\'t want to pay large consulting firm overhead.',
        },
        {
          q: 'How long does a Salesforce implementation take?',
          a: 'A focused implementation — config, automation, and training — takes 4 to 12 weeks. We define the exact timeline in our first 30-minute discovery session. No surprises, no scope creep.',
        },
        {
          q: 'What AI services do you offer?',
          a: 'We build and deploy custom AI agents, intelligent workflow automation, AI-powered decision support, and operational intelligence dashboards — all integrated into your existing stack. No moonshot projects. Only AI that ships and delivers measurable ROI.',
        },
        {
          q: 'What does the free architecture audit include?',
          a: 'In 30 minutes, we review your current Salesforce setup, AI maturity, and operational bottlenecks. You walk away with a clear picture of your 3 biggest gaps and a prioritized fix list — with no commitment required.',
        },
        {
          q: 'How do I get started?',
          a: 'Book a free 30-minute architecture audit or fill out the contact form. A senior practitioner reviews every submission and responds within 24 hours with a real answer — not a sales pitch.',
        },
      ],
    },
  },

  es: {
    nav: {
      services: 'Servicios',
      whyNodeana: 'Por qué Nodeana',
      process: 'Proceso',
      contact: 'Contacto',
      faq: 'FAQ',
      bookCall: 'Solicita tu auditoría gratis',
      chatWhatsApp: 'Chatear por WhatsApp',
    },
    hero: {
      eyebrow: 'IA · Salesforce · Empresas B2B en Crecimiento',
      h1a: 'El partner de IA y Salesforce diseñado para empresas listas para',
      h1span: 'acelerar operaciones y escalar con confianza.',
      copy: 'Nodeana Labs combina profunda experiencia en Salesforce e IA aplicada para ayudar a empresas B2B en crecimiento a construir la base digital que necesitan para escalar — ejecución senior, resultados reales y un partner de confianza desde el primer día.',
      cta1: 'Solicita una auditoría gratis',
      cta2: 'Ver resultados en 60 días',
      proof: [
        {
          title: 'Entrega senior, siempre',
          description: 'El profesional que conoces el primer día es quien construye tu sistema. Sin traspasos, sin sorpresas.',
        },
        {
          title: 'Resultados medibles desde el primer día',
          description: 'Definimos, construimos y entregamos rápido. La mayoría de clientes ve mejoras operativas reales desde el primer sprint.',
        },
        {
          title: 'Un equipo. Todo el stack. Sin brechas.',
          description: 'Salesforce, IA y talento senior — bajo un mismo techo. Una conversación cubre todo lo que necesitas.',
        },
      ],
      cardTag: 'El enfoque Nodeana',
      cardH3: 'Claridad antes del código. Estrategia antes que sistemas.',
      cardList: [
        'Auditoría de arquitectura gratis — mapeamos tu stack antes de proponer nada',
        'Salesforce, IA y talento senior bajo un mismo techo',
        'Cada proyecto vinculado a un resultado específico de ingresos o eficiencia',
        'Construido para tus próximos 3 años, no solo el problema de este trimestre',
      ],
    },
    services: {
      eyebrow: 'Cuatro formas de acelerar tu crecimiento',
      h2: 'Cuatro áreas. Un equipo. Cero traspasos.',
      intro: 'Tu Salesforce no está rindiendo lo que debería. Tu equipo hace trabajo manual que la IA debería manejar. Necesitas talento senior sin el sobreprecio de una agencia. Lo resolvemos todo — bajo un mismo techo, sin la burocracia.',
      linkText: 'Resolver esto ahora →',
      items: [
        {
          title: 'Implementación y Optimización Salesforce',
          description: 'La mayoría de orgs de Salesforce están al 60% de su capacidad — mal configuradas, sobrecomplicadas y construidas por alguien que ya no está. Las reconstruimos alrededor de cómo tu equipo realmente vende y opera.',
          bullets: [
            'Rediseño de arquitectura e implementación completa',
            'Automatización con Flows que elimina el trabajo manual',
            'Experience Cloud e integraciones críticas para el negocio',
          ],
        },
        {
          title: 'Automatización con IA y Agentes',
          description: 'El trabajo manual es un impuesto al tiempo de tu equipo y a los márgenes de tu empresa. Desplegamos IA que elimina tareas repetitivas, acelera decisiones y enruta trabajo inteligentemente — dentro de las herramientas que tu equipo ya usa.',
          bullets: [
            'Agentes de IA personalizados que funcionan en tu stack actual',
            'Automatización inteligente de flujos y enrutamiento inteligente',
            'Dashboards de inteligencia operativa con IA',
          ],
        },
        {
          title: 'Estrategia de Sistemas y Crecimiento',
          description: 'Una decisión tecnológica equivocada en el momento equivocado cuesta 10 veces más corregirla después. Mapeamos tus sistemas, identificamos los huecos y definimos un roadmap claro antes de gastar un solo peso en implementación.',
          bullets: [
            'Auditoría de sistemas y análisis de brechas tecnológicas',
            'Definición de roadmap atada a hitos de ingresos',
            'Asesoría de confianza para fundadores y operadores',
          ],
        },
        {
          title: 'Talento Tech y Headhunting',
          description: 'Un arquitecto senior de Salesforce o un ingeniero de IA vale más que cinco contrataciones promedio. Encontramos y colocamos exactamente al profesional que tu equipo necesita — sin el sobreprecio de las agencias ni búsquedas de meses.',
          bullets: [
            'Arquitectos, desarrolladores y admins de Salesforce',
            'Ingenieros de IA, especialistas en ML y profesionales de datos',
            'Líderes en RevOps, operaciones digitales y tecnología',
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: 'Por qué Nodeana',
      h2: 'Ejecución senior. Sin retainers inflados. Sin traspasos a juniors.',
      paragraph: 'La mayoría de firmas de consultoría te venden un equipo senior y te transfieren a quien esté disponible. En Nodeana Labs, el profesional que conoces el primer día es el mismo que construye tu sistema el día treinta. Nos mantenemos pequeños a propósito — porque es la única forma de garantizar la calidad que prometemos.',
      items: [
        'Cada proyecto es liderado por un profesional senior — quien te conoce es quien construye.',
        'Dominio profundo de arquitectura Salesforce combinado con implementación real de IA — no teoría.',
        'Respuestas en horas, no días. Comunicación directa y sin jerga de consultores.',
        'Sin retainers de 12 meses. Sin propuestas infladas. Alcance preciso, entrega rápida y expansión solo cuando tiene sentido.',
      ],
    },
    process: {
      eyebrow: 'Cómo funciona',
      h2: 'Del primer contacto a la primera entrega en semanas — no meses.',
      intro: 'Nos saltamos la burocracia. Sin ceremonias de inicio, sin aprobaciones de comités, sin decks de 40 diapositivas. Cuéntanos tu problema, validamos el encaje y empezamos a construir.',
      steps: [
        {
          step: '01',
          title: 'Cuéntanos dónde duele',
          description: 'Llena el formulario o agenda una llamada. Dinos qué está roto, qué necesitas y cómo se ve el éxito. Cada envío es leído personalmente por un profesional senior — no por un representante de ventas.',
        },
        {
          step: '02',
          title: 'Validamos la oportunidad',
          description: 'En 24 horas evaluamos tu contexto y te decimos con honestidad si somos el equipo correcto — y cómo se ve el camino realista hacia adelante. Sin pitch. Solo claridad.',
        },
        {
          step: '03',
          title: 'Construimos tu roadmap',
          description: 'Una sesión enfocada de 30 minutos donde mapeamos tus brechas, definimos las 3 mejoras de mayor impacto y alineamos qué construiremos — y qué cambiará de forma medible en tu negocio.',
        },
      ],
    },
    contact: {
      eyebrow: 'Hablemos',
      h2: 'Cuéntanos dónde duele. Te decimos exactamente cómo resolverlo.',
      paragraph: 'Llena el formulario. Revisamos cada envío personalmente y respondemos en 24 horas con una respuesta real — no un pitch de ventas. Las respuestas llegan directamente desde',
      paragraphSuffix: 'así que responde el correo y sigamos la conversación.',
      asideH3: 'Sáltate el formulario — agenda una auditoría gratis de 30 min',
      asideP: 'Elige un horario que te funcione. Llegamos preparados con preguntas, no con una presentación. Te vas con al menos 3 hallazgos accionables sobre tu stack actual.',
      asideBtn: 'Agendar mi auditoría gratis',
      labelName: 'Nombre completo',
      labelEmail: 'Correo corporativo',
      labelCompany: 'Empresa',
      labelService: '¿Cuál es tu mayor desafío ahora mismo?',
      selectOptions: [
        'Implementación de Salesforce',
        'Optimización de Salesforce / Health Check',
        'Automatización con IA y Agentes',
        'Estrategia de IA y Roadmap',
        'Talento Tech y Headhunting',
        'Consultoría Estratégica',
        'Aún no sé — hablemos',
      ],
      textareaLabel: '¿Qué está roto o frenando tu crecimiento?',
      textareaPlaceholder: 'Describe tus sistemas actuales, el problema que más te está costando y cómo necesitas verte en 90 días.',
      btnSend: 'Solicitar mi auditoría gratis',
      btnSending: 'Enviando...',
      feedbackSending: 'Enviando tu consulta...',
      feedbackSuccess: 'Listo — te contactamos en menos de 24 horas desde info@nodeanalabs.com.',
      feedbackError: 'El formulario no se pudo enviar.',
      feedbackUnexpected: 'Ocurrió un error inesperado.',
    },
    footer: {
      tagline: 'El partner de Salesforce e IA para empresas B2B de alto crecimiento. Ejecución senior. Resultados reales. Cero traspasos.',
      groups: [
        {
          title: 'Servicios',
          links: [
            { label: 'Implementación Salesforce', href: '#services' },
            { label: 'Automatización con IA', href: '#services' },
            { label: 'Talento Tech y Headhunting', href: '#services' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Por qué Nodeana', href: '#why-us' },
            { label: 'Cómo funciona', href: '#process' },
            { label: 'FAQ', href: '#faq' },
          ],
        },
        {
          title: 'Empieza ahora',
          links: [
            { label: 'Auditoría gratis', href: '#contact' },
            { label: 'Agendar llamada de 30 min', href: '__CALENDLY__' },
            { label: 'Chatear por WhatsApp', href: 'https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services' },
          ],
        },
      ],
      bottomLeft: '© {year} Nodeana Labs LLC. Todos los derechos reservados.',
      bottomRight: 'Hecho para equipos B2B de alto crecimiento. Operado desde Colombia. Constituido en Wyoming.',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: 'Respuestas directas. Sin jerga de consultores.',
      items: [
        {
          q: '¿Qué hace exactamente Nodeana Labs?',
          a: 'Nodeana Labs es el partner de Salesforce e IA para empresas B2B de alto crecimiento. Implementamos y optimizamos Salesforce, desplegamos automatización con IA, colocamos talento tech senior y ofrecemos asesoría estratégica — todo bajo un mismo techo, sin traspasos a juniors. Constituidos en Wyoming, EE.UU.',
        },
        {
          q: '¿Con qué tipo de empresas trabajan?',
          a: 'Si tu equipo tiene entre 10 y 500 personas y tus operaciones crecen más rápido que tus sistemas, probablemente somos el equipo correcto. Trabajamos mejor con empresas B2B que necesitan ejecución senior pero no quieren pagar el sobreprecio de una firma grande.',
        },
        {
          q: '¿Cuánto tiempo toma una implementación de Salesforce?',
          a: 'Una implementación enfocada — configuración, automatización y capacitación — toma entre 4 y 12 semanas. Definimos el cronograma exacto en la primera sesión de descubrimiento de 30 minutos. Sin sorpresas, sin scope creep.',
        },
        {
          q: '¿Qué servicios de IA ofrecen?',
          a: 'Construimos y desplegamos agentes de IA personalizados, automatización inteligente de flujos, soporte de decisiones con IA y dashboards de inteligencia operativa — todo integrado en tu stack existente. Sin proyectos de ciencia ficción. Solo IA que se entrega y genera ROI medible.',
        },
        {
          q: '¿Qué incluye la auditoría de arquitectura gratis?',
          a: 'En 30 minutos revisamos tu Salesforce actual, madurez en IA y cuellos de botella operativos. Te vas con un diagnóstico claro de tus 3 brechas principales y una lista priorizada de correcciones — sin ningún compromiso.',
        },
        {
          q: '¿Cómo empiezo a trabajar con Nodeana Labs?',
          a: 'Agenda una auditoría de arquitectura gratis de 30 minutos o llena el formulario de contacto. Un profesional senior revisa cada envío y responde en 24 horas con una respuesta real — no un pitch de ventas.',
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.en;
