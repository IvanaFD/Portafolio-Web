import { motion } from 'framer-motion'
import '../styles/DeskScene.css'

export default function DeskScene({ onOpen }) {
  return (
    <div className="desk-scene">
      <motion.div
        className="desk-surface"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />
    </div>
  )
}
