import { TbClockHour1, TbLockOpen, TbRoute } from 'react-icons/tb'
import { MENTORIA_INDIVIDUAL } from '@/config/content'
import { asset } from '@/lib/asset'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { useSlideSteps } from '@/lib/slide-steps'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const ICONS = {
  meeting: TbClockHour1,
  plan: TbRoute,
  unlock: TbLockOpen,
} as const

export function MentoriaIndividual() {
  // No deck, os blocos aparecem um por clique (etapa 0 = só o título)
  const steps = useSlideSteps()

  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="mentoria-individual"
        className="relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh md:grid-cols-[1fr_1.15fr]"
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Coluna esquerda — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          <img
            src={asset('/assets/geral/dr_gusa.webp')}
            alt="Dr. Gustavo Sá sentado à mesa do seu escritório"
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </Reveal>

        {/* Coluna direita — conteúdo */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg">
          <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
            <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
              <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
              Bônus 04
            </p>
            <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', theme.muted)}>
              De R$19.997,00 por R$00,00
            </p>
            <h2 className={cn('font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl', theme.heading)}>
              <span className={theme.accent}>Mentoria Individual</span> com o Dr.&nbsp;Gustavo Sá
            </h2>
          </Reveal>

          <ul className="flex flex-col gap-3">
            {MENTORIA_INDIVIDUAL.items.map((item, index) => {
              const Icon = ICONS[item.icon]

              return (
                <li key={item.text}>
                  <Reveal
                    effect="rise"
                    delay={steps ? 0 : 0.35 + index * 0.1}
                    visible={steps ? steps.step > index : undefined}
                  >
                    <GlassCard className="gap-2 p-4 md:p-5">
                      <div className="flex items-center gap-4">
                        <span
                          className={cn('flex size-10 shrink-0 items-center justify-center rounded-full', theme.accentBg)}
                          aria-hidden
                        >
                          <Icon className="size-5" />
                        </span>
                        <p className={cn('text-lg leading-snug text-pretty md:text-xl', theme.text)}>{item.text}</p>
                      </div>
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
