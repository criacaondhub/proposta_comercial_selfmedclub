import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useSlideTheme } from '@/lib/slide-theme'

type GlassCardProps = {
  children: ReactNode
  className?: string
}

// Sem backdrop-blur: os cards sempre ficam sobre fundo chapado (creme ou azul), onde o
// desfoque não muda nada na tela e só cobra caro — o navegador refiltra o fundo de cada card
// a cada frame da transição do slide.
export function GlassCard({ children, className }: GlassCardProps) {
  const theme = useSlideTheme()

  return (
    <div className={cn('flex flex-col gap-item rounded-glass border p-6 md:p-8', theme.card, className)}>
      {children}
    </div>
  )
}
