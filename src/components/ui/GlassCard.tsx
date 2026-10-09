import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useSlideTheme } from '@/lib/slide-theme'

type GlassCardProps = {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  const theme = useSlideTheme()

  return (
    <div className={cn('flex flex-col gap-item rounded-glass border p-6 backdrop-blur-glass md:p-8', theme.card, className)}>
      {children}
    </div>
  )
}
