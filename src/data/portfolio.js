export const profile = {
  name: 'Fabrizio Avila',
  shortName: 'Fabrizio Avila',
  role: 'Software Developer & Business Systems',
  tagline: 'Construyo software para resolver procesos reales de empresas.',
  summary:
    'Desarrollo aplicaciones y sistemas internos orientados a digitalizar procesos, centralizar información y mejorar operaciones empresariales.',
  location: 'Piura, Perú',
  phone: '+51 994 257 764',
  email: 'avila.nefi1280@gmail.com',
  linkedin: 'https://linkedin.com/in/nefi-avila',
  github: 'https://github.com/amnefi',
  whatsapp: 'https://wa.me/51994257764',
  cv: '/1. CV - Fabrizio Avila.pdf',
};

export const valueProps = [
  {
    title: 'Software aplicado al negocio',
    description: 'Sistemas internos construidos a partir de necesidades reales de operación, no solo proyectos académicos.',
    icon: 'bi-window-stack',
  },
  {
    title: 'TI + procesos empresariales',
    description: 'Experiencia directa en Sistemas, ERP, producción, inventarios, almacén y logística.',
    icon: 'bi-diagram-3',
  },
  {
    title: 'Implementación y soporte',
    description: 'Acompañamiento a usuarios, permisos, incidencias, documentación y adopción de nuevas herramientas.',
    icon: 'bi-people',
  },
];

export const services = [
  {
    title: 'Desarrollo de software',
    icon: 'bi-code-slash',
    description:
      'Aplicaciones web y sistemas internos orientados a resolver procesos empresariales, centralizar información y reducir tareas manuales.',
  },
  {
    title: 'Sistemas empresariales',
    icon: 'bi-boxes',
    description:
      'Digitalización de procesos relacionados con ERP, producción, inventarios, logística, trazabilidad y operaciones internas.',
  },
  {
    title: 'TI y soporte',
    icon: 'bi-headset',
    description:
      'Soporte técnico, administración de usuarios, accesos, herramientas cloud y acompañamiento funcional a usuarios.',
  },
];

export const projects = [
  {
    slug: 'produccion-inventarios-logistica',
    title: 'Sistema de Producción, Inventarios y Logística',
    company: 'Amara Foods',
    category: 'Sistema empresarial / MRP',
    featured: true,
    image: null,
    images: [],
    summary:
      'Sistema interno para centralizar procesos de producción, productividad, materiales, inventarios y logística en una sola plataforma.',
    context:
      'El proyecto evolucionó a partir de necesidades reales de operación. Durante mi trabajo en Almacén y Logística identifiqué flujos que requerían mayor control, trazabilidad y centralización de información.',
    problem:
      'La operación requería consultar y registrar información distribuida entre producción, materiales, almacenes, lotes, pallets y movimientos, dificultando la trazabilidad y el seguimiento operativo.',
    solution:
      'Se construyó una aplicación web que reúne producción, inventario y logística, con controles por sede, lote, pallet, almacén y usuario, además de reportes e históricos.',
    role:
      'Análisis de necesidades, diseño de flujos, desarrollo de funcionalidades y validación desde la operación real del área.',
    features: [
      'Producción por contenedor y consolidación de materiales.',
      'Indicadores de productividad, eficacia, rendimientos, merma y horas trabajadas.',
      'Gestión de materiales, productos, recetas y versiones.',
      'Stock por lote, pallet, almacén y sede.',
      'Entradas, salidas y traslados entre almacenes y pallets.',
      'Packing Lists e importación de información desde Excel.',
      'Auditoría e histórico de movimientos por usuario y fecha.',
      'Incidencias, gestión de almacenes, usuarios, roles y permisos.',
    ],
    technologies: ['React', 'Excel', 'Dashboard', 'Trazabilidad'],
    highlights: ['Trazabilidad operativa', 'Gestión multi-sede', 'Auditoría de movimientos', 'Flujos basados en operación real'],
  },
  {
    slug: 'control-activos-ti',
    title: 'Sistema de Gestión de Entrega y Devolución de Equipos',
    company: 'Amara Foods',
    category: 'Activos TI / Sistema interno',
    featured: true,
    image: null,
    images: [],
    summary:
      'Aplicación interna para digitalizar la asignación, trazabilidad y devolución de equipos tecnológicos a colaboradores.',
    context:
      'La gestión de cargos de equipos necesitaba una forma más ordenada de registrar entregas, devoluciones, responsables, estado de los activos y documentación de conformidad.',
    problem:
      'El proceso requería centralizar la información del colaborador y del activo, mantener historial y generar documentos consistentes para cada entrega y devolución.',
    solution:
      'Desarrollé una aplicación que gestiona el ciclo completo del activo, desde la entrega hasta la devolución, con persistencia en base de datos y generación de documentos PDF.',
    role:
      'Análisis del proceso, diseño de interfaz, modelado de la información, desarrollo de la aplicación y generación de documentos de conformidad.',
    features: [
      'Cargos de entrega y devolución vinculados.',
      'Múltiples equipos por cargo.',
      'Serie, IMEI, código patrimonial, estado y accesorios.',
      'Datos del colaborador y responsables de entrega/recepción.',
      'Historial de entregas y devoluciones.',
      'Registro en MySQL.',
      'Generación automática de documentos PDF.',
      'Condiciones y firmas de conformidad.',
    ],
    technologies: ['React', 'MySQL', 'Generación PDF', 'Gestión de activos'],
    highlights: ['Trazabilidad de activos', 'Documentación automática', 'Historial de cargos', 'Entrega y devolución'],
  },
  {
    slug: 'gestion-interna-dakar',
    title: 'Sistema web de gestión interna',
    company: 'Dakar G E.I.R.L.',
    category: 'Sistema de gestión empresarial',
    featured: false,
    image: '/assets/images/DakarG/DakarG-3.png',
    images: [
      '/assets/images/DakarG/DakarG-1.png',
      '/assets/images/DakarG/DakarG-2.png',
      '/assets/images/DakarG/DakarG-3.png',
      '/assets/images/DakarG/DakarG-4.png',
      '/assets/images/DakarG/DakarG-5.png',
      '/assets/images/DakarG/DakarG-6.png',
      '/assets/images/DakarG/DakarG-7.png',
    ],
    summary:
      'Dakar G no contaba con un sistema para centralizar la gestión de sus procesos internos. Desarrollé una aplicación web para organizar materiales, herramientas, trabajadores, proveedores, ventas y trabajos pendientes en una sola plataforma.',
    context:
      'La empresa necesitaba pasar de una operación sin un sistema centralizado a una herramienta que permitiera reunir información administrativa y operativa, facilitar su consulta y mejorar el seguimiento de las actividades.',
    problem:
      'No existía una plataforma que integrara la gestión de materiales, herramientas, trabajadores, proveedores, ventas y trabajos pendientes. Esto dificultaba mantener una visión unificada de la operación y dar seguimiento a la información relacionada con cada proceso.',
    solution:
      'Desarrollé un sistema web de gestión interna que centralizó los principales procesos administrativos y operativos, incorporando módulos de inventario, personal, proveedores, ventas y seguimiento de trabajos. Complementé la solución con dashboards en Power BI para visualizar rentabilidad y avance de proyectos.',
    role:
      'Levantamiento de necesidades, definición de flujos, diseño de la solución, desarrollo del sistema web, estructuración de la información y creación de dashboards para seguimiento.',
    process: [
      {
        title: '1. Identificación de necesidades',
        description: 'Revisé los procesos que requerían mayor control y definí qué información debía centralizarse dentro del sistema.',
      },
      {
        title: '2. Estructuración de módulos',
        description: 'Organicé la solución por áreas funcionales: inventarios, materiales, herramientas, trabajadores, proveedores, ventas y trabajos pendientes.',
      },
      {
        title: '3. Desarrollo de la plataforma',
        description: 'Implementé la aplicación web y los flujos necesarios para registrar, consultar y dar seguimiento a la información operativa.',
      },
      {
        title: '4. Centralización y trazabilidad',
        description: 'Concentré la información en una única plataforma para facilitar el seguimiento administrativo y operativo.',
      },
      {
        title: '5. Visualización para seguimiento',
        description: 'Complementé el sistema con dashboards en Power BI para visualizar rentabilidad y avance de proyectos.',
      },
    ],
    outcome:
      'La empresa pasó a contar con una plataforma centralizada para registrar y consultar sus principales procesos internos, mejorando la organización de la información y el seguimiento de la operación.',
    features: [
      'Gestión de materiales y herramientas.',
      'Registro y seguimiento de trabajadores.',
      'Gestión de proveedores.',
      'Control y seguimiento de ventas.',
      'Seguimiento de trabajos pendientes.',
      'Centralización de información administrativa y operativa.',
      'Trazabilidad documental.',
      'Dashboards de rentabilidad y avance de proyectos.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL', 'Power BI'],
    highlights: ['Gestión centralizada', 'Inventarios', 'Seguimiento operativo', 'Dashboards'],
  },
];

export const otherImplementations = [
  {
    title: 'Chatbot para atención comercial',
    description: 'Automatización de consultas y apoyo al seguimiento comercial y postventa.',
    technologies: ['IA', 'Automatización', 'Atención al cliente'],
  },
  {
    title: 'Dashboards en Power BI',
    description: 'Tableros para analizar rentabilidad, avance y progreso de proyectos.',
    technologies: ['Power BI', 'Business Intelligence'],
  },
  {
    title: 'Implementación y soporte de Buk',
    description: 'Acompañamiento en control de asistencia, reportes e incidencias del personal.',
    technologies: ['Buk', 'Procesos', 'Soporte funcional'],
  },
];

export const experience = [
  {
    role: 'Asistente de Almacén y Logística',
    company: 'Amara Foods S.A.C.',
    location: 'Paita, Piura, Perú',
    period: 'Agosto 2026 - Octubre 2026',
    points: [
      'Gestioné preparación y despacho de materiales entre sedes mediante picking, packing y documentación de envío.',
      'Coordiné recepción de materiales de importación, compras, abastecimiento y retiros desde almacenes externos.',
      'Ejecuté inventarios, controles de stock y despachos de materiales e insumos hacia Producción.',
      'Utilicé ERP TSI como usuario funcional: registro de compras, soporte, accesos, permisos y capacitaciones.',
      'Desarrollé e implementé el módulo de Almacén y Logística del sistema interno a partir de necesidades identificadas en la operación.',
    ],
  },
  {
    role: 'Auxiliar de Sistemas',
    company: 'Amara Foods S.A.C.',
    location: 'Paita, Piura, Perú',
    period: 'Octubre 2025 - Julio 2026',
    points: [
      'Brindé soporte Help Desk en hardware, software, conectividad y equipos corporativos.',
      'Administré Microsoft 365 y Google Workspace, usuarios, accesos, almacenamiento y permisos.',
      'Apoyé la implementación y soporte de sistemas internos como Buk y acompañé a usuarios.',
      'Resolví una incidencia crítica de Microsoft Authenticator coordinando en inglés con soporte técnico externo.',
      'Diseñé procedimientos de control y trazabilidad de activos TI y desarrollé la aplicación de entrega/devolución de equipos.',
    ],
  },
  {
    role: 'Asistente de Recursos Humanos',
    company: 'Amara Foods S.A.C.',
    location: 'Paita, Piura, Perú',
    period: 'Febrero 2025 - Diciembre 2025',
    points: [
      'Gestioné el control de asistencia mediante Buk.',
      'Automaticé reportes de horas extras e incidencias para el cierre mensual.',
      'Gestioné altas y bajas de personal en SUNAT y apoyé la organización de información para auditoría SMETA.',
    ],
  },
  {
    role: 'Asesor Comercial',
    company: 'CARSA / INTEGRA',
    location: 'Paita, Piura, Perú',
    period: 'Agosto 2024 - Diciembre 2024',
    points: [
      'Automaticé la atención de consultas mediante un chatbot con inteligencia artificial.',
      'Gestioné inventarios, despachos y documentación comercial.',
      'Ejecuté acciones de captación, seguimiento y postventa.',
    ],
  },
  {
    role: 'Asistente Administrativo y Desarrollador de Software',
    company: 'Dakar G E.I.R.L.',
    location: 'Paita, Piura, Perú',
    period: 'Febrero 2024 - Marzo 2024',
    points: [
      'Desarrollé un sistema web de gestión interna para una operación que no contaba con una plataforma centralizada, integrando inventarios y procesos administrativos.',
      'Creé dashboards en Power BI para rentabilidad y avance de proyectos.',
      'Apoyé procesos de facturación electrónica, órdenes de servicio, cotizaciones y seguimiento de facturas.',
    ],
  },
  {
    role: 'Desarrollador de Software',
    company: 'DEVOCAMP',
    location: 'Remoto',
    period: 'Setiembre 2022 - Febrero 2024',
    points: [
      'Desarrollé funcionalidades backend con Python y Django REST Framework.',
      'Implementé y probé funcionalidades asignadas por sprint, documentando mejoras y resolviendo incidencias.',
      'Participé en levantamiento de requerimientos y trabajo colaborativo con Scrum y Git.',
    ],
  },
];

export const skillGroups = [
  { title: 'Lenguajes', skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'VB.NET'] },
  { title: 'Frontend', skills: ['React', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Django REST Framework', 'Laravel'] },
  { title: 'Bases de datos', skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Cassandra'] },
  { title: 'Herramientas', skills: ['Git', 'Power BI', 'Docker', 'Linux'] },
  { title: 'Cloud', skills: ['Azure', 'AWS', 'Cloud Computing'] },
  { title: 'Sistemas empresariales', skills: ['ERP TSI', 'Microsoft 365', 'Google Workspace', 'Buk'] },
  { title: 'Metodologías', skills: ['Scrum', 'Kanban'] },
];

export const education = [
  {
    title: 'Técnico en Ingeniería de Software con Inteligencia Artificial',
    institution: 'SENATI',
    period: 'Marzo 2021 - Diciembre 2023',
  },
];

export const complementaryEducation = [
  { title: 'DevOps en Microsoft Azure', institution: 'Microsoft Azure', period: 'Mayo 2026 - Actualidad' },
  { title: 'Conceptos de computación en la nube', institution: 'Microsoft Azure', period: 'Abril 2026' },
  { title: 'Power BI / Business Intelligence', institution: 'CENAP', period: '2023' },
  { title: 'Modelado y diseño de bases de datos', institution: 'Oracle', period: '2022' },
];
