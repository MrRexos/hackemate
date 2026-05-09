import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
  }
>

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-red-600 text-cream-50 hover:bg-red-700',
  secondary: 'border border-cream-300 bg-cream-50 text-ink hover:bg-cream-100',
}

export function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex min-h-10 items-center justify-center rounded-md px-5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600',
        variants[variant],
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
