import { TbDeviceMobile, TbSchool, TbUsersGroup, TbUserStar } from 'react-icons/tb'
import { ONLINE_TRAINING } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const ICONS = {
  host: TbUserStar,
  guests: TbUsersGroup,
  platform: TbSchool,
  app: TbDeviceMobile,
} as const

// Entrada: textos e blocos caem de cima em sequência; a imagem é revelada de baixo para cima
export function OnlineTraining() {
  return (
    <Slide
      id="formacao-online"
      background={<div className="absolute inset-0 bg-grain-dark" />}
      className="md:grid md:h-full md:grid-cols-[1.15fr_1fr] md:items-center"
    >
      <div className="flex flex-col gap-group md:gap-group-lg">
        <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
          <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
            <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
            {ONLINE_TRAINING.tagline}
          </p>
          <h2
            className={cn(
              'text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-4xl xl:text-5xl',
              theme.heading,
            )}
          >
            {ONLINE_TRAINING.title}
          </h2>
        </Reveal>

        <ul className="grid gap-item sm:grid-cols-2">
          {ONLINE_TRAINING.items.map((item, index) => {
            const Icon = ICONS[item.icon]

            return (
              <li key={item.text}>
                <Reveal effect="drop" delay={0.25 + index * 0.12} className="h-full">
                  <GlassCard className="h-full gap-item p-5 md:p-6">
                    <span
                      className={cn('flex size-10 items-center justify-center rounded-full', theme.accentBg)}
                      aria-hidden
                    >
                      <Icon className="size-5" />
                    </span>
                    <p className={cn('text-sm leading-relaxed md:text-base', theme.text)}>{item.text}</p>
                  </GlassCard>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Espaço da imagem — ocupa a altura do slide no desktop */}
      <Reveal
        effect="unveil"
        delay={0.3}
        className="aspect-[4/5] overflow-hidden rounded-glass md:aspect-auto md:h-full"
      >
        <img
          src={ONLINE_TRAINING.image.src}
          alt={ONLINE_TRAINING.image.alt}
          decoding="async"
          className="block h-full w-full object-cover"
        />
      </Reveal>
    </Slide>
  )
}
