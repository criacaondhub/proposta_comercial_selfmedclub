import { TbHeartbeat, TbTrendingUp, TbVaccine } from 'react-icons/tb'
import { CHALLENGE } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const ICONS = {
  pen: TbVaccine,
  growth: TbTrendingUp,
  health: TbHeartbeat,
} as const

// Trechos entre *asteriscos* ficam em destaque; \n vira <br />
function renderHighlight(text: string) {
  return text.split('\n').flatMap((line, li, lines) => {
    const parts = line.split(/(\*[^*]+\*)/).map((part, i) =>
      part.startsWith('*') && part.endsWith('*') ? (
        <strong key={`${li}-${i}`} className={cn('font-semibold', theme.accent)}>
          {part.slice(1, -1)}
        </strong>
      ) : (
        part
      ),
    )
    return li < lines.length - 1 ? [...parts, <br key={`br-${li}`} />] : parts
  })
}

export function Challenge() {
  const isOdd = CHALLENGE.items.length % 2 === 1

  return (
    // Entrada: título desliza da esquerda, cards chegam da direita com giro 3D
    <Slide
      id="desafio"
      background={<div className="absolute inset-0 bg-grain-dark" />}
      className="md:grid md:grid-cols-[1fr_1.2fr] md:items-center"
    >
      <Reveal effect="left" className="flex flex-col gap-item md:gap-item-lg">
        <h2
          className={cn(
            'max-w-xl font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl',
            theme.heading,
          )}
        >
          {CHALLENGE.title}
        </h2>
        <p className={cn('max-w-xl font-heading text-lg font-light leading-relaxed md:text-xl xl:text-2xl', theme.text)}>
          {CHALLENGE.text}
        </p>
      </Reveal>

      <div className="grid gap-item md:gap-item-lg xl:grid-cols-2">
        {CHALLENGE.items.map((item, index) => {
          const Icon = ICONS[item.icon]
          const isLastOdd = isOdd && index === CHALLENGE.items.length - 1

          return (
            <Reveal
              key={item.text}
              effect="tilt"
              delay={0.3 + index * 0.15}
              className={cn(isLastOdd && 'xl:col-span-2')}
            >
              <GlassCard className="h-full">
                <span
                  className={cn('flex size-12 items-center justify-center rounded-full', theme.accentBg)}
                  aria-hidden
                >
                  <Icon className="size-6" />
                </span>
                <p className={cn('text-lg leading-snug text-pretty md:text-xl', theme.heading)}>
                  {renderHighlight(item.text)}
                </p>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Slide>
  )
}
