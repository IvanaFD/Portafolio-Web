import { useState } from 'react'
import { motion } from 'framer-motion'
import { COVER_STICKERS } from '../content'
import '../styles/NotebookClosed.css'

function CoverSticker({ sticker }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div
      className="nc-sticker"
      style={{
        left: `${sticker.x}%`,
        top: `${sticker.y}%`,
        '--sticker-size': sticker.size,
        '--sticker-rotate': `${sticker.rotate}deg`,
      }}
    >
      {!imgError ? (
        <img
          src={sticker.image}
          alt=""
          onError={() => setImgError(true)}
        />
      ) : (
        <span>{sticker.emoji}</span>
      )}
    </div>
  )
}

export default function NotebookClosed({ onOpen }) {
  return (
    <div className="nc-wrapper">
      <motion.button
        className="nc-book"
        onClick={onOpen}
        aria-label="Abrir portafolio"
        initial={{ scale: 0, rotate: -4 }}
        animate={{ scale: 1, rotate: -1.5 }}
        transition={{ type: 'spring', stiffness: 170, damping: 16, delay: 0.1 }}
        whileHover={{ scale: 1.05, y: -14, rotate: 0 }}
        whileTap={{ scale: 0.97 }}
      >
        <div className="nc-pages" />
        <div className="nc-spine" />
        <div className="nc-cover">
          <div className="nc-cover__stripe" />
          <div className="nc-cover__body">

            {/* Etiqueta con fondo dibujado */}
            <div className="nc-label">
              <span className="nc-label__name">Ivana Figueroa</span>
              <span className="nc-label__sub">portafolio</span>
            </div>

            {/* Stickers decorativos */}
            {COVER_STICKERS.map(s => (
              <CoverSticker key={s.id} sticker={s} />
            ))}
          </div>
        </div>
      </motion.button>

      <motion.p
        className="nc-hint"
        animate={{ opacity: [0.25, 0.75, 0.25] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        abrí el cuaderno
      </motion.p>
    </div>
  )
}
