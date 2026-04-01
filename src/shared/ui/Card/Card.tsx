import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '@shared/lib'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid'
  children: ReactNode
}

const variantStyles = {
  glass: [
    'bg-white/[0.08]',
    'backdrop-blur-xl',
    'border border-white/12',
    'rounded-3xl',
    'shadow-glass',
    'supports-[backdrop-filter]:bg-white/[0.08]',
  ].join(' '),
  solid: [
    'bg-[#1e1b2e]',
    'border border-white/8',
    'rounded-3xl',
    'shadow-xl shadow-black/30',
  ].join(' '),
} as const

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'glass', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'
