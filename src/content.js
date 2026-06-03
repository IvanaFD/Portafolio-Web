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
    title: 'Lenguajes',
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
    title: 'Frameworks & Librerías',
    highlight: 'rgba(134, 239, 172, 0.45)',
    items: [
      { name: 'Node.js', icon: `${CL}/v1780449290/node_zlfrgp.png`,   rotate: -1.0 },
      { name: 'Express', icon: `${CL}/v1780449288/express_tzxe83.png`, rotate:  1.2 },
      { name: 'React',   icon: `${CL}/v1780449288/react_m9iirk.png`,  rotate: -2.0 },
    ],
  },
  {
    title: 'Utilidades',
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

export const ABOUT = {
  bio1: `Estudiante de tercer año en Ciencias de la Computación en la Universidad del Valle de Guatemala. Me gusta aprender de la tecnología todos los días — es un proceso que nunca acaba.`,
  bio2: `Me gusta crear soluciones completas y brindar la mejor experiencia al usuario. Hacer cosas creativas y salir de mi zona de confort aprendiendo cosas nuevas. Busco aprender más sobre redes y estar al día con las tecnologías.`,
  location: 'Guatemala',
  availability: 'Disponible para Full Stack',
  skills: [
    { name: 'JavaScript', color: '#FDE68A', rotate:  1.5 },
    { name: 'Node.js',    color: '#A7F3D0', rotate: -1.2 },
    { name: 'Docker',     color: '#BFDBFE', rotate:  2.0 },
    { name: 'C++',        color: '#DDD6FE', rotate: -0.8 },
    { name: 'PostgreSQL', color: '#FECACA', rotate:  1.2 },
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

