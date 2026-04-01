import { motion } from 'framer-motion'
import { useAuth } from '@app/providers'
import { Sidebar } from './ui/Sidebar'
import { Header } from './ui/Header'

export function DashboardWidget() {
  const { user, logout } = useAuth()

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
      >
        <Sidebar onLogout={logout} />
      </motion.div>

      <motion.main
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
        className="flex flex-1 flex-col overflow-y-auto p-8 @max-[768px]:p-5"
      >
        <Header name={user?.name ?? 'User'} email={user?.email ?? ''} />
      </motion.main>
    </>
  )
}
