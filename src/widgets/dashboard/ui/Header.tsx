import { cn } from '@shared/lib'

interface HeaderProps {
  name: string
  email: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Header({ name, email }: HeaderProps) {
  return (
    <header
      className="animate-slide-up-in flex items-center justify-between"
      style={{ animationFillMode: 'both' }}
    >
      <div>
        <p className="text-sm text-white/40">Welcome back</p>
        <h1 className="mt-1 text-2xl font-bold text-white">{name}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right @max-[480px]:hidden">
          <p className="text-sm font-medium text-white/80">{name}</p>
          <p className="text-xs text-white/40">{email}</p>
        </div>
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center',
            'rounded-full bg-gradient-to-br from-brand-500 to-brand-700',
            'text-sm font-semibold text-white',
            'ring-2 ring-brand-400/30',
          )}
        >
          {getInitials(name)}
        </div>
      </div>
    </header>
  )
}
