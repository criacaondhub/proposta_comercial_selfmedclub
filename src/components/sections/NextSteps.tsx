import { TbBrandWhatsapp } from 'react-icons/tb'
import { CONFIG, NEXT_STEPS } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

export function NextSteps() {
  return (
    <Slide id="proximos-passos" variant="section" className="md:grid md:grid-cols-2 md:items-center">
      <div className="flex flex-col gap-group md:gap-group-lg">
        <SlideHeading label={NEXT_STEPS.label} title={NEXT_STEPS.title} text={NEXT_STEPS.text} />
        <Reveal delay={0.2}>
          <Button href={CONFIG.WHATSAPP_URL} external>
            <TbBrandWhatsapp className="size-5" aria-hidden />
            {NEXT_STEPS.cta}
          </Button>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <ol className="flex flex-col gap-item">
          {NEXT_STEPS.steps.map((step, index) => (
            <li key={step}>
              <GlassCard className="flex-row items-center gap-group">
                <span className={cn('text-3xl font-semibold tabular-nums md:text-4xl', theme.heading)}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={cn('text-lg font-medium md:text-xl', theme.heading)}>{step}</span>
              </GlassCard>
            </li>
          ))}
        </ol>
      </Reveal>
    </Slide>
  )
}
