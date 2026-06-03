import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import '../styles/Notebook.css'
import { ABOUT, STACK, PROJECTS, CONTACT } from '../content'

const Icon = ({ name, ...props }) => {
  const Comp = LucideIcons[name]
  return Comp ? <Comp {...props} /> : null
}

const PAGES = [
  { id: 'about',    label: { es: 'Sobre mí',  en: 'About me'  }, color: '#F87171', chapter: 'I',   leftBg: '#FFECEC' },
  { id: 'stack',    label: { es: 'Stack',      en: 'Stack'     }, color: '#FB923C', chapter: 'II',  leftBg: '#FFF0E4' },
  { id: 'projects', label: { es: 'Proyectos',  en: 'Projects'  }, color: '#4ADE80', chapter: 'III', leftBg: '#E8FFF0' },
  { id: 'contact',  label: { es: 'Contacto',   en: 'Contact'   }, color: '#FACC15', chapter: 'IV',  leftBg: '#FFFBE8' },
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
  const [lang, setLang] = useState('es')

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
        ← {lang === 'es' ? 'escritorio' : 'desk'}
      </motion.button>

      <motion.button
        className="nb-lang"
        onClick={() => setLang(l => l === 'es' ? 'en' : 'es')}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {lang === 'es' ? 'EN' : 'ES'}
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
              <span className="nb-left-art__title">{page.label[lang]}</span>
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
              <span>{p.label[lang]}</span>
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
                        <h2 className="nb-about__name">{ABOUT[lang].greeting}</h2>
                        <p className="nb-about__bio">{ABOUT[lang].bio1}</p>
                      </div>
                    </div>

                    <p className="nb-about__bio">{ABOUT[lang].bio2}</p>

                    <div className="nb-about__meta">
                      <span>📍 {ABOUT[lang].location}</span>
                      <span>·</span>
                      <span>{ABOUT[lang].availability}</span>
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
                        >{cat.title[lang]}</h3>
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
                ) : page.id === 'projects' ? (
                  <div className="nb-projects">
                    {PROJECTS.map((p) => (
                      <div
                        key={p.id}
                        className="nb-project-card"
                        style={{ '--card-color': p.type === 'frontend' ? '#FACC15' : '#A78BFA' }}
                      >
                        <div className="nb-project-card__header">
                          <Icon name={p.icon} size={18} className="nb-project-card__icon" />
                          <h3 className="nb-project-card__name">{p.name}</h3>
                          <span className="nb-project-card__type">
                            {p.type === 'frontend' ? 'Frontend' : 'Full Stack'}
                          </span>

                        </div>
                        <p className="nb-project-card__desc">{p.desc[lang]}</p>
                        <div className="nb-project-card__stack">
                          {p.stack.map((s) => (
                            <span key={s} className="nb-project-card__chip">{s}</span>
                          ))}
                        </div>
                        <div className="nb-project-card__links">
                          {p.links.map((l) => (
                            <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="nb-project-card__link">
                              ↗ {l.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : page.id === 'contact' ? (
                  <div className="nb-contact">
                    <div className="nb-contact__header">
                      <h2 className="nb-contact__title">{CONTACT.title[lang]}</h2>
                      <p className="nb-contact__tagline">{CONTACT.tagline[lang]}</p>
                    </div>
                    <div className="nb-contact__grid">
                      {CONTACT.links.map((l) => {
                        const Tag = l.disabled ? 'div' : 'a'
                        return (
                          <Tag
                            key={l.id}
                            {...(!l.disabled && {
                              href: l.href,
                              target: l.id === 'gmail' ? undefined : '_blank',
                              rel: 'noreferrer',
                            })}
                            className={`nb-contact__btn${l.disabled ? ' nb-contact__btn--disabled' : ''}`}
                            style={{ '--ct-color': l.color }}
                          >
                            {l.brandSrc
                              ? <img src={l.brandSrc} alt={l.label} className="nb-contact__btn-icon" />
                              : <Icon name={l.lucideIcon} size={22} className="nb-contact__btn-icon" />
                            }
                            <span>{typeof l.label === 'object' ? l.label[lang] : l.label}</span>
                          </Tag>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <p className="nb-placeholder">
                    [ {page.label[lang]} — {lang === 'es' ? 'contenido próximamente' : 'coming soon'} ]
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <footer className="nb-footer">
        <span>Ivana Figueroa</span>
        <span>·</span>
        <span>Guatemala</span>
        <span>·</span>
        <span>{new Date().getFullYear()}</span>
        <a
          href="https://github.com/IvanaFD/Portafolio-Web"
          target="_blank"
          rel="noreferrer"
          className="nb-footer__link"
        >
          <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" width={16} height={16} />
        </a>
      </footer>
    </div>
  )
}
