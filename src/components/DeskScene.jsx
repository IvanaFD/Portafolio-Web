import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DESK_ITEMS } from '../content'
import '../styles/DeskScene.css'

const EASTER_MAX = 10

const groupVariants = {
  rest:  { scale: 1, y: 0 },
  hover: { scale: 1.18, y: -14 },
}

const groupDecorativeVariants = {
  rest:  { scale: 1, y: 0 },
  hover: { scale: 1, y: 0 },
}

const figureVariants = {
  rest:  { filter: 'drop-shadow(2px 5px 8px rgba(0,0,0,0.25))' },
  hover: { filter: 'drop-shadow(0 16px 24px rgba(0,0,0,0.35))' },
}

const labelVariants = {
  rest:  { opacity: 0 },
  hover: { opacity: 1 },
}

function DeskItem({ item, onGalleryOpen, onEasterClick, easterCount }) {
  const [imgError, setImgError] = useState(false)
  const isClickable = item.type === 'link' || item.type === 'gallery' || item.type === 'easter'

  const handleClick = () => {
    if (item.type === 'gallery') onGalleryOpen?.()
    if (item.type === 'easter') onEasterClick?.()
  }

  const dynamicLabel = item.type === 'easter'
    ? String(EASTER_MAX - easterCount)
    : item.label

  const inner = (
    <motion.div
      className="deskitem__group"
      variants={item.type === 'decorative' ? groupDecorativeVariants : groupVariants}
      transition={{ type: 'spring', stiffness: 340, damping: 18 }}
    >
      <motion.div
        className="deskitem__figure"
        variants={figureVariants}
        transition={{ type: 'spring', stiffness: 340, damping: 18 }}
      >
        {item.drawing && !imgError ? (
          <img
            src={item.drawing}
            alt={item.label ?? item.id}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="deskitem__emoji">{item.emoji}</span>
        )}
      </motion.div>

      {dynamicLabel && (
        <motion.span
          className={`deskitem__label ${item.type === 'easter' ? 'deskitem__label--count' : ''}`}
          variants={labelVariants}
          transition={{ duration: 0.15 }}
        >
          {dynamicLabel}
        </motion.span>
      )}
    </motion.div>
  )

  return (
    <motion.div
      className={`deskitem ${isClickable ? 'deskitem--clickable' : ''}`}
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        '--item-size': item.size ?? '90px',
        '--item-rotate': `${item.rotate ?? 0}deg`,
      }}
      initial="rest"
      whileHover="hover"
      onClick={handleClick}
    >
      {item.type === 'link' ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : inner}
    </motion.div>
  )
}

function GifOverlay({ gif, onClose }) {
  return (
    <motion.div
      className="gif-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img
        src={gif}
        alt="easter egg"
        className="gif-overlay__img"
        initial={{ scale: 0.6, rotate: -8 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      />
      <motion.p
        className="gif-overlay__hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        click para cerrar
      </motion.p>
    </motion.div>
  )
}

export default function DeskScene({ onOpen }) {
  const [easterCount, setEasterCount] = useState(0)
  const [showGif, setShowGif] = useState(false)

  const easterItem = DESK_ITEMS.find(i => i.type === 'easter')

  const handleEasterClick = () => {
    const next = easterCount + 1
    if (next >= EASTER_MAX) {
      setShowGif(true)
      setEasterCount(0)
    } else {
      setEasterCount(next)
    }
  }

  return (
    <div className="desk-scene">
      <motion.div
        className="desk-surface"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {DESK_ITEMS.map(item => (
          <DeskItem
            key={item.id}
            item={item}
            easterCount={easterCount}
            onEasterClick={handleEasterClick}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {showGif && easterItem && (
          <GifOverlay gif={easterItem.easterGif} onClose={() => setShowGif(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
