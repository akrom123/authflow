import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '@shared/lib'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-1.5 text-white/35',
          'border-none outline-none transition-colors duration-200',
          'hover:text-white/70',
          'focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2',
          '[&>svg]:h-[18px] [&>svg]:w-[18px]',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'
