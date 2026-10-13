import { TbCalendarStar, TbSchool, TbUsersGroup, TbVideo } from 'react-icons/tb'
import { FEATURES } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const ICONS = [
  TbCalendarStar, // Experiências Presenciais
  TbVideo,        // Mentorias Online e Exclusivas
  TbUsersGroup,   // 6 Encontros Ao Vivo com Convidados
  TbSchool,       // Formação Online Completa
]

export function Features() {
  return (
    <Slide
      id="features"
      variant="light"
      background={<div className="absolute inset-0 bg-grain-dark" />}
      className="md:h-full md:justify-center"
    >
      <div className="grid grid-cols-1 gap-item sm:grid-cols-2 md:gap-item-lg">
        {FEATURES.items.map((item, index) => {
          const Icon = ICONS[index]
          return (
            <Reveal key={item.title} effect="flip" delay={0.15 + index * 0.12} className="h-full">
              <GlassCard className="h-full justify-between gap-group p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span
                    className={cn('flex size-10 items-center justify-center rounded-full', theme.accentBg)}
                    aria-hidden
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className={cn('text-xs font-medium tabular-nums', theme.muted)}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className={cn('text-xl font-semibold leading-snug md:text-2xl', theme.heading)}>
                    {item.title}
                  </h3>
                  <p className={cn('text-lg leading-relaxed md:text-xl', theme.text)}>
                    {item.description.split('\n').map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Slide>
  )
}
