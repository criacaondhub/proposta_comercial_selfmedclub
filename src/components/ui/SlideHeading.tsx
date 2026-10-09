import { cn } from '@/lib/utils'
import { useSlideTheme } from '@/lib/slide-theme'
import { Reveal, type RevealEffect } from '@/components/ui/Reveal'

type SlideHeadingProps = {
  label?: string
  title: string
  text?: string
  as?: 'h1' | 'h2'
  size?: 'default' | 'display'
  effect?: RevealEffect
  className?: string
}

const sizeClasses = {
  default: 'text-4xl md:text-5xl xl:text-6xl',
  display: 'text-5xl md:text-7xl xl:text-8xl',
}

// Palavras entre *asteriscos* no título recebem destaque
function renderHighlight(title: string, accentClass: string) {
  return title.split(/(\*[^*]+\*)/).map((part, index) =>
    part.startsWith('*') && part.endsWith('*') ? (
      <em key={index} className={cn('italic', accentClass)}>
        {part.slice(1, -1)}
      </em>
    ) : (
      part
    ),
  )
}

export function SlideHeading({
  label,
  title,
  text,
  as: Tag = 'h2',
  size = 'default',
  effect,
  className,
}: SlideHeadingProps) {
  const theme = useSlideTheme()

  return (
    <Reveal effect={effect} className={cn('flex flex-col gap-item md:gap-item-lg', className)}>
      {label && <p className={cn('text-sm font-medium uppercase tracking-[0.2em]', theme.muted)}>{label}</p>}
      <Tag
        className={cn(
          'max-w-4xl font-semibold leading-[1.05] tracking-tight text-balance',
          sizeClasses[size],
          theme.heading,
        )}
      >
        {renderHighlight(title, theme.accent)}
      </Tag>
      {text && <p className={cn('max-w-2xl font-heading text-base font-light leading-relaxed md:text-lg', theme.text)}>{text}</p>}
    </Reveal>
  )
}
