import { TbAffiliate, TbCalendarStar, TbDeviceLaptop, TbVideo } from 'react-icons/tb'
import { DELIVERABLES } from '@/config/content'
import { useSlideSteps } from '@/lib/slide-steps'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

const ICONS = {
  platform: TbDeviceLaptop,
  events: TbCalendarStar,
  mentoring: TbVideo,
  network: TbAffiliate,
} as const

// Slide em tela cheia dividido em 4 quadrantes, um por entregável, na ordem do content
// (superior esquerdo → superior direito → inferior esquerdo → inferior direito). No mobile ficam empilhados.
// Cada foto leva um véu escuro leve + degradê inferior; o título fica numa tarja azul.
// Entrada: cada quadrante é revelado por uma cortina — no deck, um por clique (etapa 0 = só o fundo off-white)
export function Deliverables() {
  const steps = useSlideSteps()

  return (
    <section
      id="entregaveis"
      className="relative w-full shrink-0 overflow-hidden bg-background md:h-svh md:w-screen"
    >
      <ul className="grid gap-1.5 md:h-full md:grid-cols-2 md:grid-rows-2">
        {DELIVERABLES.items.map((item, index) => {
          const Icon = ICONS[item.icon]
          const isBottomRow = index >= 2

          return (
            <li key={item.title} className="min-h-96 md:min-h-0">
              <Reveal
                effect="wipe"
                delay={steps ? 0 : index * 0.15}
                visible={steps ? steps.step > index : undefined}
                className="h-full"
              >
                <div
                  className={cn(
                    'relative flex h-full flex-col justify-end overflow-hidden px-6 pt-24 pb-8 md:px-10 md:pt-10',
                    // Fileira de baixo sobe o texto para não ficar sob a barra de navegação centralizada no rodapé
                    isBottomRow ? 'md:pb-24' : 'md:pb-10',
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 size-full select-none object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-background-dark/40" aria-hidden />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-background-dark/90 via-background-dark/40 to-transparent"
                    aria-hidden
                  />

                  {/* Pílula no mesmo estilo da tag "Entregáveis", um pouco maior */}
                  <h3 className="relative z-10 flex max-w-full items-center gap-2.5 self-start rounded-full border border-border-section bg-accent/90 px-5 py-2 font-heading text-xs font-light uppercase leading-snug tracking-[0.18em] text-accent-foreground backdrop-blur-glass md:whitespace-nowrap md:px-6 md:py-2.5 md:text-[clamp(0.75rem,0.95vw,0.95rem)] md:tracking-[0.25em]">
                    <Icon className="size-[1.3em] shrink-0" aria-hidden />
                    {item.title}
                  </h3>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>

      {/* Tag no canto superior esquerdo, sobre o primeiro quadrante */}
      <Reveal
        effect="wipe"
        delay={0.6}
        className="pointer-events-none absolute top-slide-y left-slide-x z-10 md:top-slide-y-lg md:left-slide-x-lg"
      >
        <p className="rounded-full border border-border-section bg-background-dark/50 px-4 py-1.5 font-heading text-xs font-light uppercase tracking-[0.25em] text-section-heading backdrop-blur-glass">
          {DELIVERABLES.tag}
        </p>
      </Reveal>
    </section>
  )
}
