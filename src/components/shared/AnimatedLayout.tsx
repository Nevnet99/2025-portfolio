import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface AnimatedLayoutProps {
  children: React.ReactNode
}

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const { pathname } = useLocation()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  )
} 
