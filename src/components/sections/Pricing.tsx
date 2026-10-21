import { asset } from '@/lib/asset'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'
import { DarkBackground } from '@/components/ui/DarkBackground'

const theme = SLIDE_THEME.section

const items = [
  { label: '24 Mentorias AO VIVO com Dr. Gustavo Sá', value: 'R$ 60.000,00' },
  { label: '6 Encontros com convidados especiais', value: 'R$ 30.000,00' },
  { label: '4 Experiências presenciais de alto nível', value: 'R$ 24.000,00' },
  { label: 'Plataforma educacional com aulas exclusivas', value: 'R$ 7.000,00' },
  { label: 'Comunidade de Networking', value: 'IMENSURÁVEL' },
  { label: '[BÔNUS 1] Concierge Pessoal', value: 'IMENSURÁVEL' },
  { label: '[BÔNUS 2] Oficina de Marketing', value: 'R$ 4.000,00' },
  { label: '[BÔNUS 3] 1 Dia de fellow na clínica do Dr. Gustavo Sá', value: 'R$ 25.000,00' },
  { label: '[BÔNUS 4] Mentoria Estratégica Individual', value: 'IMENSURÁVEL' },
]

export function Pricing() {
  return (
    <SlideVariantContext.Provider value="section">
      <section
        id="pricing"
        className="relative isolate flex h-svh w-full shrink-0 flex-col items-center justify-center overflow-hidden px-slide-x py-slide-y md:w-screen md:px-slide-x-lg md:py-slide-y-lg"
      >
        {/* Mesmo fundo do slide 13 (Dúvidas): degradê azul escuro da capa + ruído */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <DarkBackground />
        </div>

        <div className="flex w-full max-w-3xl flex-col gap-6 md:gap-8">
          {/* Heading — logo por escrito (versão clara, para o fundo azul) acima do título */}
          <div className="flex flex-col items-center gap-1 text-center">
            <Reveal effect="drop" className="mb-4 md:mb-6">
              <img
                src={asset('/assets/01-capa/Logo-horizontal-branco.svg')}
                alt="SelfMed Club"
                className="h-10 w-auto md:h-12"
              />
            </Reveal>
            <Reveal effect="drop" delay={0.1}>
              <h2 className={cn('font-display text-4xl font-semibold md:text-5xl xl:text-6xl', theme.heading)}>
                Vamos calcular juntos
              </h2>
            </Reveal>
            <Reveal effect="rise" delay={0.15}>
              <p className={cn('font-heading text-base font-light md:text-lg', theme.muted)}>
                Sem ancoragem barata
              </p>
            </Reveal>
          </div>

          {/* Line items */}
          <div className="flex w-full flex-col gap-2">
            {items.map((item, index) => (
              <Reveal key={item.label} effect="rise" delay={0.25 + index * 0.06}>
                <div className="flex w-full items-baseline gap-2">
                  <span className={cn('shrink-0 text-base font-medium md:text-lg', theme.heading)}>
                    {item.label}
                  </span>
                  <span className="mx-1 min-w-0 flex-1 self-end border-b border-dotted border-white/30 mb-[0.35em]" />
                  <span className={cn('shrink-0 text-base font-semibold tabular-nums md:text-lg', theme.heading)}>
                    {item.value}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Total */}
          <Reveal effect="rise" delay={0.95}>
            <div className="flex flex-col items-center gap-2 text-center">
              {/* Total e nota em azul claro (#84a7ed) */}
              <p className="font-display text-3xl font-semibold text-accent-pale md:text-4xl xl:text-5xl">
                Total: R$ 150.000,00
              </p>
              <p className="max-w-lg font-heading text-sm font-light leading-snug text-balance text-accent-pale md:text-base">
                Este é o valor que poderíamos cobrar com tranquilidade no acesso ao Mastermind se formos somar todas as entregas
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
