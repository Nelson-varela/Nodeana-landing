export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      whyNodeana: 'Why Nodeana',
      process: 'Process',
      contact: 'Contact',
      faq: 'FAQ',
      bookCall: 'Book discovery call',
      chatWhatsApp: 'Chat on WhatsApp',
    },
    hero: {
      eyebrow: 'AI · Salesforce · Solutions',
      h1a: 'AI and Salesforce solutions for companies ready to',
      h1span: 'scale without the noise.',
      copy: 'Nodeana Labs partners with growth-stage companies to modernize their operations, eliminate broken workflows, and build the digital foundations that actually hold under pressure — through expert Salesforce delivery, applied AI, and senior-level consulting.',
      cta1: 'Start a conversation',
      cta2: 'See what we do',
      proof: [
        {
          title: 'Senior-level execution',
          description: 'No junior handoffs. Every engagement is led by practitioners who\'ve built real systems.',
        },
        {
          title: 'Outcomes, not deliverables',
          description: 'We measure success by what changes in your operations — not by what we ship.',
        },
        {
          title: 'Built to scale with you',
          description: 'From a focused sprint to a long-term partnership, our model grows as your needs do.',
        },
      ],
      cardTag: 'The Nodeana approach',
      cardH3: 'Clarity before code. Strategy before systems.',
      cardList: [
        'Deep discovery before any solution is proposed',
        'Salesforce, AI, and advisory work under one roof',
        'Every engagement tied to a measurable business outcome',
        'Architecture that supports your next three moves, not just today\'s problem',
      ],
    },
    services: {
      eyebrow: 'What we do',
      h2: 'Top practice areas. One integrated team.',
      intro: 'Whether you need to fix what\'s broken, build what\'s missing, or figure out what comes next — Nodeana Labs brings the technical depth and strategic clarity to move with confidence.',
      linkText: 'Discuss this service →',
      items: [
        {
          title: 'Salesforce Services',
          description: 'From foundational implementations to complex ecosystem overhauls — we architect, build, and optimize Salesforce environments that work the way your business actually operates.',
          bullets: [
            'Solution architecture & implementation',
            'Automation, Flows & process design',
            'Experience Cloud & third-party integrations',
          ],
        },
        {
          title: 'AI Solutions',
          description: 'Practical AI that reduces friction, accelerates decisions, and eliminates the manual work slowing your team down — deployed inside the tools your people already use.',
          bullets: [
            'Custom AI assistants & internal agents',
            'Workflow automation with intelligent routing',
            'Operational intelligence & process acceleration',
          ],
        },
        {
          title: 'Strategic Consulting',
          description: 'Senior advisory for companies at a pivot point — when the technology decisions you make today will define how well you scale tomorrow.',
          bullets: [
            'Technology strategy & systems planning',
            'Roadmap definition & architectural review',
            'Trusted advisory for founders and operators',
          ],
        },
        {
          title: 'Tech Talent & Headhunting',
          description: 'We find and place the senior-level technology and operations professionals that growth companies need — without the noise of traditional recruiting.',
          bullets: [
            'Salesforce specialists, architects & admins',
            'AI engineers & data professionals',
            'RevOps, digital ops & technology leaders',
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: 'Why Nodeana',
      h2: 'The expertise you need. Without the overhead you don\'t.',
      paragraph: 'Most consulting engagements fail not because of bad intentions, but because the people solving the problem never fully understood it. At Nodeana Labs, we slow down at the start so we can move fast when it matters.',
      items: [
        'Senior practitioners on every engagement — no bait-and-switch with junior resources.',
        'Deep Salesforce fluency paired with real AI implementation experience.',
        'Communication that\'s direct, structured, and free of unnecessary complexity.',
        'A lean, agile model built for companies that value speed and accountability.',
      ],
    },
    process: {
      eyebrow: 'How it works',
      h2: 'From first contact to first delivery — a process built for clarity.',
      intro: 'We keep the path short on purpose. No bloated onboarding, no committees. Just a focused intake, a sharp discovery session, and a team that starts moving immediately.',
      steps: [
        {
          step: '01',
          title: 'You reach out',
          description: 'Submit a quick inquiry with your context, goals, and timeline. It goes directly to our team — no forms that disappear into a CRM.',
        },
        {
          step: '02',
          title: 'We assess the fit',
          description: 'We review your service area, business context, and what success looks like before we schedule a single meeting.',
        },
        {
          step: '03',
          title: 'Discovery conversation',
          description: 'A focused session where we go deep on your challenge, validate assumptions, and define what an engagement should actually accomplish.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      h2: 'Tell us what you are building, fixing, or trying to improve',
      paragraph: 'Share a few details about your company, current challenge, or project scope. Every form submission is delivered directly to',
      paragraphSuffix: 'so you can reply personally and schedule the next step.',
      asideH3: 'Prefer to book directly?',
      asideP: 'Open your scheduling page and let qualified leads book a discovery meeting without the back-and-forth.',
      asideBtn: 'Open scheduling page',
      labelName: 'Full name',
      labelEmail: 'Work email',
      labelCompany: 'Company',
      labelService: 'How can we help?',
      selectOptions: [
        'Salesforce Implementation',
        'Salesforce Optimization / Health Check',
        'AI Automation & Agents',
        'AI Strategy & Roadmap',
        'Tech Talent & Headhunting',
        'Strategic Advisory',
        'Not sure yet — let\'s talk',
      ],
      textareaLabel: 'Project details',
      textareaPlaceholder: 'Tell us about your current systems, the challenge you need to solve, and what success should look like.',
      btnSend: 'Send inquiry',
      btnSending: 'Sending...',
      feedbackSending: 'Sending your inquiry...',
      feedbackSuccess: 'Your inquiry was sent successfully. We will follow up from info@nodeanalabs.com.',
      feedbackError: 'The form could not be submitted.',
      feedbackUnexpected: 'An unexpected error occurred.',
    },
    footer: {
      tagline: 'Expert Salesforce delivery, applied AI, and strategic consulting for companies building serious digital operations.',
      groups: [
        {
          title: 'Services',
          links: [
            { label: 'Salesforce Services', href: '#services' },
            { label: 'AI Solutions', href: '#services' },
            { label: 'Strategic Consulting', href: '#services' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'Why Nodeana', href: '#why-us' },
            { label: 'How it works', href: '#process' },
            { label: 'Contact', href: '#contact' },
          ],
        },
        {
          title: 'Contact',
          links: [
            { label: 'info@nodeanalabs.com', href: 'mailto:info@nodeanalabs.com' },
            { label: 'Book a discovery call', href: '__CALENDLY__' },
            { label: 'Chat on WhatsApp', href: 'https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services' },
          ],
        },
      ],
      bottomLeft: '© {year} Nodeana Labs LLC. All rights reserved.',
      bottomRight: 'Built for modern B2B teams. Operated from Colombia. Incorporated in Wyoming.',
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Frequently asked questions',
      items: [
        {
          q: 'What does Nodeana Labs do?',
          a: 'Nodeana Labs is a Wyoming-incorporated consulting firm specializing in Salesforce implementation, AI automation, and strategic advisory for growth-stage B2B companies. We help businesses modernize their operations, eliminate broken workflows, and build scalable digital foundations that hold under pressure.',
        },
        {
          q: 'What size companies does Nodeana Labs work with?',
          a: 'We work primarily with growth-stage B2B companies — typically 10 to 500 employees — that need serious digital infrastructure but lack the internal capacity to build or manage it. Our model fits companies that value senior-level execution without the overhead of a large consulting firm.',
        },
        {
          q: 'How long does a Salesforce implementation take?',
          a: 'It depends on scope and complexity. A focused Salesforce implementation — including configuration, automation, and user training — typically takes 4 to 12 weeks. We define the timeline clearly during discovery so there are no surprises.',
        },
        {
          q: 'What AI services does Nodeana Labs offer?',
          a: 'We design and deploy practical AI solutions tailored to your operations: custom AI assistants and internal agents, intelligent workflow automation, AI-powered decision support, and operational intelligence — all deployed within the tools your team already uses.',
        },
        {
          q: 'Do you offer remote consulting services?',
          a: 'Yes. Nodeana Labs operates fully remotely. We serve clients across the United States and conduct all engagements — discovery, delivery, and ongoing support — through digital-first collaboration.',
        },
        {
          q: 'How do I get started with Nodeana Labs?',
          a: 'Fill out our contact form or book a discovery call directly. We review every submission personally and respond within one business day. Our intake process is built to move fast without wasting your time.',
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
      bookCall: 'Agendar llamada',
      chatWhatsApp: 'Chatear por WhatsApp',
    },
    hero: {
      eyebrow: 'IA · Salesforce · Soluciones',
      h1a: 'Soluciones de IA y Salesforce para empresas listas para',
      h1span: 'escalar sin el ruido.',
      copy: 'Nodeana Labs trabaja con empresas en etapa de crecimiento para modernizar sus operaciones, eliminar flujos de trabajo rotos y construir las bases digitales que realmente resisten la presión — mediante una entrega experta de Salesforce, IA aplicada y consultoría de alto nivel.',
      cta1: 'Iniciar conversación',
      cta2: 'Ver qué hacemos',
      proof: [
        {
          title: 'Ejecución de alto nivel',
          description: 'Sin traspasos a juniors. Cada proyecto es liderado por profesionales que han construido sistemas reales.',
        },
        {
          title: 'Resultados, no entregables',
          description: 'Medimos el éxito por lo que cambia en tus operaciones, no por lo que enviamos.',
        },
        {
          title: 'Construido para crecer contigo',
          description: 'Desde un sprint enfocado hasta una alianza a largo plazo, nuestro modelo crece con tus necesidades.',
        },
      ],
      cardTag: 'El enfoque Nodeana',
      cardH3: 'Claridad antes del código. Estrategia antes que sistemas.',
      cardList: [
        'Descubrimiento profundo antes de proponer cualquier solución',
        'Salesforce, IA y consultoría bajo un mismo techo',
        'Cada proyecto vinculado a un resultado de negocio medible',
        'Arquitectura que soporta tus próximos tres movimientos, no solo el problema de hoy',
      ],
    },
    services: {
      eyebrow: 'Lo que hacemos',
      h2: 'Top áreas de práctica. Un equipo integrado.',
      intro: 'Ya sea que necesites arreglar lo que está roto, construir lo que falta o definir qué viene después — Nodeana Labs aporta la profundidad técnica y la claridad estratégica para avanzar con confianza.',
      linkText: 'Hablar sobre este servicio →',
      items: [
        {
          title: 'Servicios Salesforce',
          description: 'Desde implementaciones iniciales hasta renovaciones de ecosistemas complejos — diseñamos, construimos y optimizamos entornos Salesforce que funcionan como tu negocio realmente opera.',
          bullets: [
            'Arquitectura de soluciones e implementación',
            'Automatización, Flows y diseño de procesos',
            'Experience Cloud e integraciones con terceros',
          ],
        },
        {
          title: 'Soluciones de IA',
          description: 'IA práctica que reduce la fricción, acelera decisiones y elimina el trabajo manual que frena a tu equipo — desplegada dentro de las herramientas que tu gente ya usa.',
          bullets: [
            'Asistentes de IA personalizados y agentes internos',
            'Automatización de flujos con enrutamiento inteligente',
            'Inteligencia operativa y aceleración de procesos',
          ],
        },
        {
          title: 'Consultoría Estratégica',
          description: 'Asesoría senior para empresas en un punto de inflexión — cuando las decisiones tecnológicas que tomes hoy definirán qué tan bien escalarás mañana.',
          bullets: [
            'Estrategia tecnológica y planificación de sistemas',
            'Definición de roadmap y revisión de arquitectura',
            'Asesoría de confianza para fundadores y operadores',
          ],
        },
        {
          title: 'Talento Tech y Headhunting',
          description: 'Encontramos y colocamos a los profesionales senior en tecnología y operaciones que las empresas en crecimiento necesitan — sin el ruido del reclutamiento tradicional.',
          bullets: [
            'Especialistas, arquitectos y admins de Salesforce',
            'Ingenieros de IA y profesionales de datos',
            'Líderes en RevOps, operaciones digitales y tecnología',
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: 'Por qué Nodeana',
      h2: 'La experiencia que necesitas. Sin la burocracia que no.',
      paragraph: 'La mayoría de los proyectos de consultoría fracasan no por malas intenciones, sino porque las personas que resuelven el problema nunca lo entendieron del todo. En Nodeana Labs, desaceleramos al inicio para poder movernos rápido cuando importa.',
      items: [
        'Profesionales senior en cada proyecto — sin sustituciones de último momento con recursos junior.',
        'Profundo dominio de Salesforce combinado con experiencia real en implementación de IA.',
        'Comunicación directa, estructurada y libre de complejidad innecesaria.',
        'Un modelo ágil y eficiente, diseñado para empresas que valoran la velocidad y la rendición de cuentas.',
      ],
    },
    process: {
      eyebrow: 'Cómo funciona',
      h2: 'Del primer contacto a la primera entrega — un proceso construido para la claridad.',
      intro: 'Mantenemos el camino corto a propósito. Sin incorporaciones infladas, sin comités. Solo una recepción enfocada, una sesión de descubrimiento precisa y un equipo que empieza a moverse de inmediato.',
      steps: [
        {
          step: '01',
          title: 'Nos contactas',
          description: 'Envía una consulta rápida con tu contexto, objetivos y cronograma. Llega directamente a nuestro equipo — sin formularios que desaparecen en un CRM.',
        },
        {
          step: '02',
          title: 'Evaluamos la compatibilidad',
          description: 'Revisamos tu área de servicio, contexto empresarial y cómo se ve el éxito antes de programar una sola reunión.',
        },
        {
          step: '03',
          title: 'Conversación de descubrimiento',
          description: 'Una sesión enfocada donde profundizamos en tu desafío, validamos supuestos y definimos lo que un proyecto debe lograr realmente.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      h2: 'Cuéntanos qué estás construyendo, corrigiendo o buscando mejorar',
      paragraph: 'Comparte algunos detalles sobre tu empresa, el desafío actual o el alcance del proyecto. Cada envío de formulario se entrega directamente a',
      paragraphSuffix: 'para que puedas responder personalmente y programar el siguiente paso.',
      asideH3: '¿Prefieres agendar directamente?',
      asideP: 'Abre tu página de programación y permite que los prospectos calificados agenden una reunión de descubrimiento sin el intercambio de mensajes.',
      asideBtn: 'Abrir página de agendamiento',
      labelName: 'Nombre completo',
      labelEmail: 'Correo corporativo',
      labelCompany: 'Empresa',
      labelService: '¿Cómo podemos ayudarte?',
      selectOptions: [
        'Implementación de Salesforce',
        'Optimización de Salesforce / Health Check',
        'Automatización con IA y Agentes',
        'Estrategia de IA y Roadmap',
        'Talento Tech y Headhunting',
        'Consultoría Estratégica',
        'Aún no sé — hablemos',
      ],
      textareaLabel: 'Detalles del proyecto',
      textareaPlaceholder: 'Cuéntanos sobre tus sistemas actuales, el desafío que necesitas resolver y cómo debería verse el éxito.',
      btnSend: 'Enviar consulta',
      btnSending: 'Enviando...',
      feedbackSending: 'Enviando tu consulta...',
      feedbackSuccess: 'Tu consulta fue enviada con éxito. Te daremos seguimiento desde info@nodeanalabs.com.',
      feedbackError: 'El formulario no se pudo enviar.',
      feedbackUnexpected: 'Ocurrió un error inesperado.',
    },
    footer: {
      tagline: 'Entrega experta de Salesforce, IA aplicada y consultoría estratégica para empresas que construyen operaciones digitales serias.',
      groups: [
        {
          title: 'Servicios',
          links: [
            { label: 'Servicios Salesforce', href: '#services' },
            { label: 'Soluciones de IA', href: '#services' },
            { label: 'Consultoría Estratégica', href: '#services' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Por qué Nodeana', href: '#why-us' },
            { label: 'Cómo funciona', href: '#process' },
            { label: 'Contacto', href: '#contact' },
          ],
        },
        {
          title: 'Contacto',
          links: [
            { label: 'info@nodeanalabs.com', href: 'mailto:info@nodeanalabs.com' },
            { label: 'Agendar una llamada', href: '__CALENDLY__' },
            { label: 'Chatear por WhatsApp', href: 'https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services' },
          ],
        },
      ],
      bottomLeft: '© {year} Nodeana Labs LLC. Todos los derechos reservados.',
      bottomRight: 'Hecho para equipos B2B modernos. Operado desde Colombia. Constituido en Wyoming.',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: 'Todo lo que necesitas saber',
      items: [
        {
          q: '¿Qué hace Nodeana Labs?',
          a: 'Nodeana Labs es una firma de consultoría constituida en Wyoming, EE.UU., especializada en implementación de Salesforce, automatización con inteligencia artificial y asesoría estratégica para empresas B2B en etapa de crecimiento. Ayudamos a modernizar operaciones, eliminar flujos de trabajo ineficientes y construir bases digitales escalables.',
        },
        {
          q: '¿Con qué tamaño de empresas trabaja Nodeana Labs?',
          a: 'Trabajamos principalmente con empresas B2B en etapa de crecimiento — generalmente de 10 a 500 empleados — que necesitan infraestructura digital sólida pero no tienen la capacidad interna para construirla o gestionarla. Nuestro modelo es ideal para empresas que valoran la ejecución de alto nivel sin la burocracia de una firma grande.',
        },
        {
          q: '¿Cuánto tiempo toma una implementación de Salesforce?',
          a: 'Depende del alcance y la complejidad. Una implementación de Salesforce enfocada — incluyendo configuración, automatización y capacitación de usuarios — generalmente toma entre 4 y 12 semanas. Definimos el cronograma claramente durante la fase de descubrimiento para que no haya sorpresas.',
        },
        {
          q: '¿Qué servicios de inteligencia artificial ofrece Nodeana Labs?',
          a: 'Diseñamos y desplegamos soluciones de IA prácticas adaptadas a tus operaciones: asistentes de IA y agentes internos personalizados, automatización inteligente de flujos de trabajo, soporte de decisiones basado en IA e inteligencia operativa — todo dentro de las herramientas que tu equipo ya usa.',
        },
        {
          q: '¿Ofrecen consultoría remota?',
          a: 'Sí. Nodeana Labs opera completamente de forma remota. Atendemos clientes en los Estados Unidos y realizamos todos los proyectos — descubrimiento, entrega y soporte continuo — a través de una colaboración totalmente digital.',
        },
        {
          q: '¿Cómo empiezo a trabajar con Nodeana Labs?',
          a: 'Completa nuestro formulario de contacto o agenda una llamada de descubrimiento directamente. Revisamos cada envío de manera personal y respondemos dentro de un día hábil. Nuestro proceso está diseñado para moverse rápido sin desperdiciar tu tiempo.',
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.en;
