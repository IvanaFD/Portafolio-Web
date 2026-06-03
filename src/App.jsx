import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DeskScene from './components/DeskScene'
import Notebook from './components/Notebook'
import './index.css'

export default function App() {
  const [notebookOpen, setNotebookOpen] = useState(false)

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        {!notebookOpen ? (
          <motion.div
            key="desk"
            style={{ width: '100%', height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{ duration: 0.5 }}
          >
            <DeskScene onOpen={() => setNotebookOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="notebook"
            style={{ width: '100%', height: '100%' }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <Notebook onClose={() => setNotebookOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
