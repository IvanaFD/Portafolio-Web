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

// Stickers decorativos sobre la portada.
// Imágenes en /public/stickers/ — x,y = posición en % dentro de la tapa
// "nombre.png" se usa como fondo de la etiqueta del nombre (aparte)
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
    x: 80, y: 50, size: '20rem', rotate: 20,
  },
  {
    id: 'calculator',
    type: 'link',
    label: 'Calculadora',
    href: 'https://lab7-calculadora-web.onrender.com/',
    emoji: '🔢',
    drawing: '/drawings/calculator.png',
    x: 10, y: 70, size: '18rem',
  },
  {
    id: 'yarn',
    type: 'link',
    label: '@needle.art.gt',
    href: 'https://www.instagram.com/needle.art.gt?igsh=MTNieHI3MGUzbHg5Ng==',
    emoji: '🧶',
    drawing: '/drawings/yarn.png',
    x: 85, y: 80, size: '25rem',
  },
  {
    id: 'pencil',
    type: 'decorative',
    emoji: '✏️',
    drawing: '/drawings/pencil.png',
    x: 20, y:40, size: '20rem',
  },
  {
    id: 'paints',
    type: 'decorative',
    emoji: '🎨',
    drawing: '/drawings/paints.png',
    x: 90, y: 20, size: '25rem',
  },
  {
    id: 'arduino',
    type: 'easter',
    emoji: '🔌',
    drawing: '/drawings/arduino.png',
    easterGif: 'https://res.cloudinary.com/dajf4aqhf/image/upload/v1780392680/Dise%C3%B1o_sin_t%C3%ADtulo_sqnfqv.gif',
    x: 15, y: 20, size: '20rem',
  },
]

