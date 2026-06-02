import { motion } from 'framer-motion'
import DeskScene from './components/DeskScene'
import './index.css'

export default function App() {
  return (
    <motion.div
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <DeskScene />
    </motion.div>
  )
}
