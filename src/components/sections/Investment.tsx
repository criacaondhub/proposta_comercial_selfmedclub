import { INVESTMENT } from '@/config/content'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

type Plan = (typeof INVESTMENT.plans)[number]

// O plano em destaque usa o tema azul dentro do slide claro
function PlanCard({ plan }: { plan: Plan }) {
  const variant = plan.featured ? 'section' : 'light'
  const theme = SLIDE_THEME[variant]

  return (
    <SlideVariantContext.Provider value={variant}>
      <GlassCard className={cn('h-full', plan.featured && 'border-background-section bg-background-section')}>
        <div className="flex min-h-7 items-center justify-between gap-item">
          <p className={cn('text-sm font-medium uppercase tracking-[0.2em]', theme.muted)}>{plan.name}</p>
          {plan.featured && (
            <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', theme.accentBg)}>
              {INVESTMENT.featuredLabel}
            </span>
          )}
        </div>
        <p className={cn('text-4xl font-semibold tracking-tight md:text-5xl', theme.heading)}>{plan.price}</p>
        <p className={cn('text-sm', theme.muted)}>{plan.period}</p>
        <p className={cn('leading-relaxed', theme.text)}>{plan.description}</p>
      </GlassCard>
    </SlideVariantContext.Provider>
  )
}

export function Investment() {
  return (
    <Slide id="investimento">
      <SlideHeading label={INVESTMENT.label} title={INVESTMENT.title} />

      <Reveal delay={0.15} className="grid gap-item md:grid-cols-3 md:gap-item-lg">
        {INVESTMENT.plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </Reveal>

      <Reveal delay={0.25}>
        <p className={cn('text-sm', SLIDE_THEME.light.muted)}>{INVESTMENT.note}</p>
      </Reveal>
    </Slide>
  )
}
