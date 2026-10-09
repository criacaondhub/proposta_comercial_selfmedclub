import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useSlideTheme } from '@/lib/slide-theme'

type ButtonProps = {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

export function Button({ href, children, external = false, className }: ButtonProps) {
  const theme = useSlideTheme()

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(
        'inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2',
        theme.button,
        className,
      )}
    >
      {children}
    </a>
  )
}
