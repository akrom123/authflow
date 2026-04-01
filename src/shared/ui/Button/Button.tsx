import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '@shared/lib'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const variantStyles = {
  primary:
    'bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 bg-[length:200%_100%] text-white hover:bg-right hover:shadow-glow active:translate-y-0 active:scale-[0.98]',
  ghost:
    'bg-transparent border border-border-glass text-text-light hover:bg-surface-hover hover:border-white/20',
} as const

const sizeStyles = {
  sm: 'px-4 py-2 text-xs rounded-lg',
  md: 'px-5 py-3 text-sm rounded-xl',
  lg: 'px-6 py-3.5 text-[15px] rounded-xl font-semibold',
} as const

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'cursor-pointer border-none outline-none transition-all duration-200',
          'focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
