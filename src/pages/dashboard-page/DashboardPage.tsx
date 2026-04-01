import { motion } from 'framer-motion'
import { DashboardWidget } from '@widgets/dashboard'

export function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex min-h-svh overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="blob-1 absolute rounded-full opacity-40 blur-3xl animate-float-blob" />
      <div className="blob-2 absolute rounded-full opacity-40 blur-3xl animate-float-blob" />

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="relative z-10 flex min-h-svh w-full"
      >
        <DashboardWidget />
      </motion.div>
    </motion.div>
  )
}
