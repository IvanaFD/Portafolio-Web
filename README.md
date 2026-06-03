# Portafolio Web — Ivana Figueroa

Portafolio personal con estética de cuaderno de apuntes. Construido con React y Vite.

## Vista general

La experiencia comienza en un escritorio con objetos interactivos. Al abrir el cuaderno se accede a cuatro secciones: **Sobre mí**, **Stack**, **Proyectos** y **Contacto**. Incluye toggle de idioma ES/EN.

## Tecnologías

| Categoría | Tecnología |
|---|---|
| UI | React 19, Framer Motion |
| Build | Vite 8 |
| Iconos | Lucide React, Simple Icons (CDN) |
| Imágenes | Cloudinary |
| Fuentes | Caveat (Google Fonts) |

## Estructura

```
src/
├── components/
│   ├── DeskScene.jsx      # Escritorio con items interactivos
│   ├── Notebook.jsx       # Cuaderno con las 4 secciones
│   └── NotebookClosed.jsx # Portada del cuaderno
├── styles/
│   ├── DeskScene.css
│   └── Notebook.css
├── content.js             # Todo el contenido (texto, links, datos)
└── App.jsx

public/
├── drawings/              # Ilustraciones del escritorio
├── stickers/              # Stickers de la portada
└── me.png                 # Foto de perfil
```

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Con Docker

Copia el archivo de ejemplo y ajusta si es necesario:

```bash
cp docker-compose.example docker-compose.yml
docker compose up
```

## Contenido

Todo el contenido del portafolio vive en `src/content.js`. Para actualizar texto, proyectos, skills o links de contacto, ese es el único archivo que necesitas tocar.

---

[github.com/IvanaFD](https://github.com/IvanaFD) · Guatemala
