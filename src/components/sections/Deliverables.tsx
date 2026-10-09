import { TbAffiliate, TbCalendarStar, TbDeviceLaptop, TbVideo } from 'react-icons/tb'
import { DELIVERABLES } from '@/config/content'
import { Reveal } from '@/components/ui/Reveal'
import AccordionGallery from '@/components/ui/AccordionGallery'
import { useSlideSteps } from '@/lib/slide-steps'

const ICONS = {
  platform: TbDeviceLaptop,
  events: TbCalendarStar,
  mentoring: TbVideo,
  network: TbAffiliate,
} as const

const items = DELIVERABLES.items.map((item) => {
  const Icon = ICONS[item.icon]
  return {
    image: item.image,
    label: item.title,
    alt: item.title,
    icon: <Icon className="size-[1.3em] shrink-0" aria-hidden />,
  }
})

// Slide em tela cheia: galeria acordeão com um painel por entregável.
// Cada painel é uma etapa do slide: a seta "próximo" abre o seguinte e só depois do último avança de slide.
// Clicar num painel também o abre. No mobile (sem deck), a galeria se controla sozinha.
// Entrada: a galeria é revelada por uma cortina da esquerda para a direita
export function Deliverables() {
  const steps = useSlideSteps()

  return (
    <section
      id="entregaveis"
      className="relative h-svh w-full shrink-0 overflow-hidden bg-background-dark md:w-screen"
    >
      <Reveal effect="wipe" className="h-full">
        <AccordionGallery
          items={items}
          defaultIndex={0}
          height="100%"
          gap={6}
          radius={0}
          expandRatio={0.55}
          trigger="click"
          activeIndex={steps?.step}
          onActiveChange={steps?.setStep}
          accentColor="var(--color-accent-light)"
          overlayColor="var(--color-background-dark)"
          textColor="var(--color-section-heading)"
        />
      </Reveal>

      {/* Tag no canto superior esquerdo, sobre a galeria */}
      <Reveal
        effect="wipe"
        delay={0.6}
        className="pointer-events-none absolute top-slide-y left-slide-x z-10 md:top-slide-y-lg md:left-slide-x-lg"
      >
        <p className="rounded-full border border-border-section bg-surface-section px-4 py-1.5 font-heading text-xs font-light uppercase tracking-[0.25em] text-section-heading backdrop-blur-glass">
          {DELIVERABLES.tag}
        </p>
      </Reveal>
    </section>
  )
}
