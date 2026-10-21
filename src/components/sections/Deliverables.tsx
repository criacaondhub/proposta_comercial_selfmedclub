import { TbAffiliate, TbCalendarStar, TbDeviceLaptop, TbVideo } from 'react-icons/tb'
import { DELIVERABLES } from '@/config/content'
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
// Cada foto leva um véu escuro leve + degradê inferior para o título e os bullets se destacarem.
// Entrada: cada quadrante é revelado por uma cortina, um após o outro
export function Deliverables() {
  return (
    <section
      id="entregaveis"
      className="relative w-full shrink-0 overflow-hidden bg-background-dark md:h-svh md:w-screen"
    >
      <ul className="grid gap-1.5 md:h-full md:grid-cols-2 md:grid-rows-2">
        {DELIVERABLES.items.map((item, index) => {
          const Icon = ICONS[item.icon]
          const isBottomRow = index >= 2

          return (
            <li key={item.title} className="min-h-96 md:min-h-0">
              <Reveal effect="wipe" delay={index * 0.15} className="h-full">
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

                  <div className="relative z-10 flex max-w-xl flex-col gap-item [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]">
                    <h3 className="flex items-center gap-3 text-xl font-semibold leading-tight tracking-[0.01em] text-section-heading md:text-[clamp(1.25rem,1.9vw,2rem)]">
                      <span
                        className="h-[1.3em] w-[3px] flex-none rounded-[3px] bg-accent-light shadow-[0_0_12px_color-mix(in_srgb,var(--color-accent-light)_60%,transparent)]"
                        aria-hidden
                      />
                      <Icon className="size-[1.2em] shrink-0" aria-hidden />
                      {item.title}
                    </h3>
                    <ul className="flex flex-col gap-1.5">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-3 text-base leading-snug text-section-text md:text-[clamp(0.95rem,1.15vw,1.2rem)]"
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-accent-light" aria-hidden />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
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
