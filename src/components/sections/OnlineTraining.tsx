import { TbDeviceMobile, TbSchool, TbUsersGroup, TbUserStar } from 'react-icons/tb'
import { ONLINE_TRAINING } from '@/config/content'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const ICONS = {
  host: TbUserStar,
  guests: TbUsersGroup,
  platform: TbSchool,
  app: TbDeviceMobile,
} as const

export function OnlineTraining() {
  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="formacao-online"
        className="relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh md:grid-cols-[1fr_1.15fr]"
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Coluna esquerda — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          <img
            src={ONLINE_TRAINING.image.src}
            alt={ONLINE_TRAINING.image.alt}
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </Reveal>

        {/* Coluna direita — conteúdo com padding normal */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg">
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
      </section>
    </SlideVariantContext.Provider>
  )
}
