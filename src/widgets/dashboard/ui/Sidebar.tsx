interface SidebarProps {
  onLogout: () => void
}

export function Sidebar({ onLogout }: SidebarProps) {
  return (
    <aside className="flex w-64 flex-col border-r border-white/6 bg-white/2 @max-[768px]:hidden h-screen">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <span className="text-lg font-bold text-white">AuthFlow</span>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
        </ul>
      </nav>

      <div className="border-t border-white/2 px-3 py-4">
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-medium text-white/50 transition-all duration-200 hover:bg-white/[0.04] hover:text-red-400"
        >
          <span>Log out</span>
        </button>
      </div>
    </aside>
  )
}
