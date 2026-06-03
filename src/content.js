// comtenido
export const PROFILE = {
  name: 'Ivana Figueroa',
  role: 'Full Stack Developer en formación',
  bio: `Hola, soy Ivana. Me dedico a construir cosas para la web con curiosidad y criterio.
Estoy aprendiendo React, Node.js y todo lo que pueda en el camino.
Me gusta que el código sea limpio y que los proyectos se sientan terminados, no sólo "que funcionen".`,
  location: 'Guatemala',
  email: 'ivanac.figueroad.com',
  github: 'https://github.com/IvanaFD',
}

const CL = 'https://res.cloudinary.com/dajf4aqhf/image/upload'

export const STACK = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    highlight: 'rgba(253, 224, 71, 0.45)',
    items: [
      { name: 'JavaScript', icon: `${CL}/v1780449293/javas_y5wxqo.png`,  rotate:  1.5 },
      { name: 'HTML',       icon: `${CL}/v1780449293/html_clta8z.png`,   rotate: -1.2 },
      { name: 'CSS',        icon: `${CL}/v1780449292/csss_lijjxb.png`,   rotate:  2.0 },
      { name: 'C++',        icon: `${CL}/v1780449291/c_gjgaaq.png`,      rotate: -0.8 },
      { name: 'Go',         icon: `${CL}/v1780449290/go_onwexp.png`,     rotate:  1.8 },
      { name: 'Python',     icon: `${CL}/v1780449290/python_ztdhjb.png`, rotate: -1.5 },
    ],
  },
  {
    title: { es: 'Frameworks & Librerías', en: 'Frameworks & Libraries' },
    highlight: 'rgba(134, 239, 172, 0.45)',
    items: [
      { name: 'Node.js', icon: `${CL}/v1780449290/node_zlfrgp.png`,   rotate: -1.0 },
      { name: 'Express', icon: `${CL}/v1780449288/express_tzxe83.png`, rotate:  1.2 },
      { name: 'React',   icon: `${CL}/v1780449288/react_m9iirk.png`,  rotate: -2.0 },
    ],
  },
  {
    title: { es: 'Utilidades', en: 'Utilities' },
    highlight: 'rgba(196, 181, 253, 0.45)',
    items: [
      { name: 'PostgreSQL', icon: 'https://res.cloudinary.com/dajf4aqhf/image/upload/v1780449287/postgresql_xkaznc.png', rotate:  1.0 },
      { name: 'Docker',     icon: `${CL}/v1780449287/docker_cylc3i.png`, rotate: -1.8 },
      { name: 'Git',        icon: `${CL}/v1780449287/git_qcbuvf.png`,    rotate:  2.2 },
      { name: 'GitHub',     icon: `${CL}/v1780449287/github_x6mwck.png`, rotate: -0.6 },
      { name: 'Figma',      icon: `${CL}/v1780449287/figma_m6qndt.png`,  rotate:  1.4 },
    ],
  },
]

export const PROJECTS = [
  {
    id: 'calc',
    name: 'Calculadora',
    icon: 'Calculator',
    type: 'frontend',
    desc: { es: 'Calculadora web con historial de operaciones.', en: 'Web calculator with operation history.' },
    stack: ['TypeScript', 'React'],
    links: [{ label: 'GitHub', url: 'https://github.com/IvanaFD/Lab7-Calculadora-Web' }],
  },
  {
    id: 'electrostore',
    name: 'Electrostore',
    icon: 'Zap',
    type: 'fullstack',
    desc: { es: 'Tienda de componentes electrónicos con vista ecommerce y panel admin.', en: 'Electronics store with ecommerce view and admin panel.' },
    stack: ['JavaScript', 'Node', 'Express', 'React', 'Docker'],
    links: [{ label: 'GitHub', url: 'https://github.com/IvanaFD/Electrostore-/tree/proyecto-web-2' }],
  },
  {
    id: 'snake',
    name: 'Snake Game',
    icon: 'Gamepad2',
    type: 'frontend',
    desc: { es: 'Juego de Snake clásico corriendo en el navegador.', en: 'Classic Snake game running in the browser.' },
    stack: ['JavaScript', 'React'],
    links: [{ label: 'GitHub', url: 'https://github.com/IvanaFD/Lab6-Snake-Web' }],
  },
  {
    id: 'adopt',
    name: 'Adopt Tracker',
    icon: 'PawPrint',
    type: 'fullstack',
    desc: { es: 'Sistema de seguimiento de adopciones.', en: 'Full stack adoption tracking system.' },
    stack: ['JavaScript', 'Node', 'Express', 'HTML', 'CSS'],
    links: [
      { label: 'backend',  url: 'https://github.com/IvanaFD/adopt-tracker-api' },
      { label: 'frontend', url: 'https://github.com/IvanaFD/adopt-tracker-cliente' },
    ],
  },
  {
    id: 'catexplorer',
    name: 'Cat Explorer',
    icon: 'Cat',
    type: 'fullstack',
    desc: { es: 'Explorador de razas de gatos con The Cat API.', en: 'Cat breed explorer powered by The Cat API.' },
    stack: ['Node.js', 'Docker', 'Cat API'],
    links: [{ label: 'GitHub', url: 'https://github.com/IvanaFD/Ejercicio4-React' }],
  },
]

export const ABOUT = {
  es: {
    greeting: 'Hola, soy Ivana ✦',
    bio1: `Estudiante de tercer año en Ciencias de la Computación en la Universidad del Valle de Guatemala. Me gusta aprender de la tecnología todos los días — es un proceso que nunca acaba.`,
    bio2: `Me gusta crear soluciones completas y brindar la mejor experiencia al usuario. Hacer cosas creativas y salir de mi zona de confort aprendiendo cosas nuevas. Busco aprender más sobre redes y estar al día con las tecnologías.`,
    location: 'Guatemala',
    availability: 'Disponible para Full Stack',
  },
  en: {
    greeting: "Hi, I'm Ivana ✦",
    bio1: `Third-year Computer Science student at Universidad del Valle de Guatemala. I enjoy learning about technology every day — it's a process that never ends.`,
    bio2: `I like building complete solutions and delivering the best user experience. I enjoy creative work and stepping out of my comfort zone by learning new things. Looking to expand my knowledge in networking and stay current with today's technologies.`,
    location: 'Guatemala',
    availability: 'Available for Full Stack',
  },
  skills: [
    { name: 'JavaScript', color: '#FDE68A', rotate:  1.5 },
    { name: 'Node.js',    color: '#A7F3D0', rotate: -1.2 },
    { name: 'Docker',     color: '#BFDBFE', rotate:  2.0 },
    { name: 'C++',        color: '#DDD6FE', rotate: -0.8 },
    { name: 'PostgreSQL', color: '#FECACA', rotate:  1.2 },
  ],
}

const SI = 'https://cdn.simpleicons.org'

export const CONTACT = {
  title:   { es: '¿Hablamos? ✦',  en: "Let's talk ✦" },
  tagline: {
    es: 'Para saber más de mi trabajo,\ncrear algo juntos o una oportunidad laboral.',
    en: 'To learn more about my work,\nbuild something together or for a job opportunity.',
  },
  links: [
    { id: 'github',   label: 'GitHub',   brandSrc: `${SI}/github/24292E`,   href: 'https://github.com/IvanaFD',                                              color: '#24292E' },
    { id: 'linkedin', label: 'LinkedIn', brandSrc: `${SI}/linkedin/0A66C2`, href: 'https://www.linkedin.com/in/ivana-cristina-figueroa-diemek-016a45413',    color: '#0A66C2' },
    { id: 'gmail',    label: 'Gmail',    brandSrc: `${SI}/gmail/EA4335`,    href: 'mailto:ivanac.figueroad@gmail.com',                                        color: '#EA4335' },
  ],
}

// Stickers sobre la portada.

export const COVER_STICKERS = [
  { id: 'sticker1', emoji: '⚫', image: '/stickers/sticker1.png', x: 70, y: 15, rotate: 10,  size: '15rem' },
  { id: 'sticker2', emoji: '⚫', image: '/stickers/sticker2.png', x: 15, y: 75, rotate: -30, size: '15rem'   },
  { id: 'sticker3', emoji: '⚫', image: '/stickers/sticker3.jpg', x: 78, y: 83, rotate: 8,   size: '10rem' },
]

// Items sobre la mesa.

export const DESK_ITEMS = [
  {
    id: 'camera',
    type: 'gallery',
    label: '📸',
    emoji: '📸',
    drawing: '/drawings/camera.png',
    x: 75, y: 50, size: '25rem', rotate: 20,
    photos: [
      { src: 'https://res.cloudinary.com/dajf4aqhf/image/upload/v1778016127/lola_kniv2t.jpg',  caption: 'Lola' },
      { src: 'https://res.cloudinary.com/dajf4aqhf/image/upload/v1778016126/lila_a4wbrn.jpg',  caption: 'Lila' },
    ],
  },
  {
    id: 'calculator',
    type: 'link',
    label: 'Calculadora',
    href: 'https://lab7-calculadora-web.onrender.com/',
    emoji: '🔢',
    drawing: '/drawings/calculator.png',
    x: 15, y: 70, size: '20rem',
  },
  {
    id: 'yarn',
    type: 'link',
    label: '@needle.art.gt',
    href: 'https://www.instagram.com/needle.art.gt?igsh=MTNieHI3MGUzbHg5Ng==',
    emoji: '🧶',
    drawing: '/drawings/yarn.png',
    x: 83, y: 80, size: '25rem',
  },
  {
    id: 'pencil',
    type: 'decorative',
    emoji: '✏️',
    drawing: '/drawings/pencil.png',
    x: 25, y:40, size: '20rem',
  },
  {
    id: 'paints',
    type: 'decorative',
    emoji: '🎨',
    drawing: '/drawings/paints.png',
    x: 86, y: 20, size: '25rem',rotate: -20,
  },
  {
    id: 'arduino',
    type: 'easter',
    emoji: '🔌',
    drawing: '/drawings/arduino.png',
    easterGif: 'https://res.cloudinary.com/dajf4aqhf/image/upload/v1780392680/Dise%C3%B1o_sin_t%C3%ADtulo_sqnfqv.gif',
    x: 18, y: 20, size: '20rem',rotate: 20,
  },
]

