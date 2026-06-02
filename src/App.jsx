import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DeskScene from './components/DeskScene'
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* Notebook abierto — próximo paso */}
            <div style={{
              width: '100%', height: '100%',
              background: '#0D0D1A',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <button
                onClick={() => setNotebookOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontFamily: 'Caveat, cursive',
                  fontSize: '16px',
                }}
              >
                ← volver al escritorio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
