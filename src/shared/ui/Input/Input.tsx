import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '@shared/lib'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: ReactNode
  error?: string
  rightElement?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, rightElement, className, id, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className={cn('relative', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-[11px] font-medium uppercase text-white/60"
          >
            {label}
          </label>
        )}
        <div className="group relative flex items-center">
          {icon && (
            <span className="pointer-events-none absolute left-3.5 text-white/35 transition-colors duration-200 group-focus-within:text-brand-400 [&>svg]:h-[18px] [&>svg]:w-[18px]">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-xl border border-white/10 bg-white/[0.06] text-[15px] text-white',
              'placeholder:text-white/30',
              'transition-all duration-200',
              'focus:border-brand-500 focus:bg-brand-500/[0.08] focus:shadow-glow-active focus:outline-none',
              icon ? 'pl-[42px]' : 'pl-3.5',
              rightElement ? 'pr-11' : 'pr-3.5',
              'py-3',
            )}
            {...props}
          />
          {rightElement && (
            <span className="absolute right-3">
              {rightElement}
            </span>
          )}
        </div>
        {error && (
          <p className="mt-1 text-xs text-pink-500">{error}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
