import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Notebook.css'
import { ABOUT, STACK } from '../content'

const PAGES = [
  { id: 'about',    label: 'Sobre mí',  color: '#F87171', chapter: 'I',   leftBg: '#FFECEC' },
  { id: 'stack',    label: 'Stack',     color: '#FB923C', chapter: 'II',  leftBg: '#FFF0E4' },
  { id: 'projects', label: 'Proyectos', color: '#4ADE80', chapter: 'III', leftBg: '#E8FFF0' },
  { id: 'contact',  label: 'Contacto',  color: '#FACC15', chapter: 'IV',  leftBg: '#FFFBE8' },
]

const pageVariants = {
  enter: (dir) => ({
    rotateY: dir > 0 ? 55 : -55,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir) => ({
    rotateY: dir > 0 ? -55 : 55,
    opacity: 0,
    scale: 0.9,
  }),
}

export default function Notebook({ onClose }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index) => {
    if (index === currentPage) return
    setDirection(index > currentPage ? 1 : -1)
    setCurrentPage(index)
  }

  const page = PAGES[currentPage]

  return (
    <div className="nb-wrapper">
      <motion.button
        className="nb-back"
        onClick={onClose}
        whileHover={{ x: -4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ← escritorio
      </motion.button>

      <motion.div
        className="nb-book"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* PÁGINA IZQUIERDA — arte del capítulo */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`left-${currentPage}`}
            className="nb-page nb-page--left"
            style={{ background: page.leftBg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="nb-left-art">
              <span className="nb-left-art__chapter">cap. {page.chapter}</span>
              <span className="nb-left-art__title">{page.label}</span>
              <span className="nb-left-art__deco" style={{ color: page.color }}>
                ✦ ✦ ✦
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ESPIRAL */}
        <div className="nb-binding">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="nb-ring" />
          ))}
        </div>

        {/* Marcadores superiores */}
        <div className="nb-bookmarks">
          {PAGES.map((p, i) => (
            <motion.button
              key={p.id}
              className={`nb-bookmark ${i === currentPage ? 'nb-bookmark--active' : ''}`}
              style={{ '--bm-color': p.color }}
              onClick={() => goTo(i)}
              whileHover={{ y: -2 }}
              title={p.label}
            >
              <span>{p.label}</span>
            </motion.button>
          ))}
        </div>

        {/* PÁGINA DERECHA — contenido */}
        <div className="nb-page nb-page--right">
          <div className="nb-margin" />

          {/* Contenido con volteo de página */}
          <div className="nb-content-wrap">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                className="nb-content"
              >
                {page.id === 'about' ? (
                  <div className="nb-about">
                    <div className="nb-about__top">
                      <div className="nb-photo">
                        <div className="nb-photo__tape" />
                        <img src="/me.png" alt="Ivana" />
                      </div>
                      <div className="nb-about__text">
                        <h2 className="nb-about__name">Hola, soy Ivana</h2>
                        <p className="nb-about__bio">{ABOUT.bio1}</p>
                      </div>
                    </div>

                    <p className="nb-about__bio">{ABOUT.bio2}</p>

                    <div className="nb-about__meta">
                      <span>📍 {ABOUT.location}</span>
                      <span>·</span>
                      <span>{ABOUT.availability}</span>
                    </div>

                    <div className="nb-skills">
                      <span className="nb-skills__label">skills</span>
                      <div className="nb-skills__chips">
                        {ABOUT.skills.map((s) => (
                          <span
                            key={s.name}
                            className="nb-skill"
                            style={{ '--sk-color': s.color, '--sk-rotate': `${s.rotate}deg` }}
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : page.id === 'stack' ? (
                  <div className="nb-stack">
                    {STACK.map((cat) => (
                      <div key={cat.title} className="nb-stack__cat">
                        <h3
                          className="nb-stack__title"
                          style={{ '--hl': cat.highlight }}
                        >{cat.title}</h3>
                        <div className="nb-stack__grid">
                          {cat.items.map((item) => (
                            <div
                              key={item.name}
                              className="nb-sticker"
                              style={{ '--st-rotate': `${item.rotate}deg` }}
                            >
                              <img src={item.icon} alt={item.name} />
                              <span>{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="nb-placeholder">
                    [ {page.label} — contenido próximamente ]
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
