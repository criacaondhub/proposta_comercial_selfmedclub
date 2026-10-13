import { Reveal } from '@/components/ui/Reveal'
import { DarkBackground } from '@/components/ui/DarkBackground'

const items = [
  { label: '12 Mentorias AO VIVO com Dr. Gustavo Sá', value: 'R$ 60.000,00' },
  { label: '6 Encontros com convidados especiais', value: 'R$ 30.000,00' },
  { label: '4 Experiências presenciais de alto nível', value: 'R$ 24.000,00' },
  { label: 'Plataforma educacional com aulas exclusivas', value: 'R$ 7.000,00' },
  { label: 'Comunidade de Networking', value: 'IMENSURÁVEL' },
  { label: '[BÔNUS 1] Concierge Pessoal', value: 'IMENSURÁVEL' },
  { label: '[BÔNUS 2] Oficina de Marketing', value: 'R$ 4.000,00' },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative h-svh w-full shrink-0 overflow-hidden bg-background-dark md:w-screen"
    >
      <DarkBackground />

      <div className="flex h-full flex-col items-center justify-center gap-8 px-slide-x py-slide-y md:gap-10 md:px-slide-x-lg md:py-slide-y-lg">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 text-center">
          <Reveal effect="drop">
            <h1 className="font-display text-4xl font-semibold text-white md:text-5xl xl:text-6xl">
              Vamos calcular juntos
            </h1>
          </Reveal>
          <Reveal effect="rise" delay={0.15}>
            <h2 className="font-heading text-base font-light text-white/60 md:text-lg">
              Sem ancoragem barata
            </h2>
          </Reveal>
        </div>

        {/* Line items com leader dots */}
        <div className="w-full max-w-3xl flex-col gap-2.5 flex">
          {items.map((item, index) => (
            <Reveal key={item.label} effect="rise" delay={0.3 + index * 0.08}>
              <div className="flex w-full items-baseline gap-2">
                <span className="shrink-0 text-sm font-medium text-white md:text-base">
                  {item.label}
                </span>
                <span className="mx-1 min-w-0 flex-1 self-end border-b border-dotted border-white/25 mb-[0.35em]" />
                <span className="shrink-0 text-sm font-semibold tabular-nums text-white md:text-base">
                  {item.value}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Total + rodapé */}
        <Reveal effect="rise" delay={0.9}>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="font-display text-3xl font-semibold text-white md:text-4xl xl:text-5xl">
              Total: R$ 125.000,00
            </p>
            <p className="max-w-lg font-heading text-sm font-light leading-snug text-balance text-white/60 md:text-base">
              Este é o valor que poderiamos cobrar com tranquilidade no acesso ao Mastermind se formos somar todas as entregas
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
