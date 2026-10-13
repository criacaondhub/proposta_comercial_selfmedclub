import { Reveal } from '@/components/ui/Reveal'

const bullets = [
  'Gestão das datas de Encontros Presenciais;',
  'Auxílio com translados, hospedagem e estadia do mentorado;',
  'Acompanhamento de Resultados para garantir seu crescimento;',
  'Suporte para dúvidas e dificuldades.',
]

export function Concierge() {
  return (
    <section
      id="concierge"
      className="relative h-svh w-full shrink-0 overflow-hidden bg-background-dark md:w-screen"
    >
      <div className="flex h-full flex-col justify-center gap-group px-slide-x py-slide-y md:grid md:grid-cols-2 md:items-center md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg">

        {/* Esquerda — tagline + H1 + H2 */}
        <div className="flex flex-col gap-item md:gap-item-lg">
          <Reveal effect="drop">
            <p className="flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              <span className="h-px w-8 bg-white/20 md:w-12" aria-hidden />
              Bônus
            </p>
          </Reveal>

          <Reveal effect="rise" delay={0.15}>
            <h1 className="font-display text-4xl font-semibold text-accent-light text-balance md:text-5xl xl:text-6xl">
              Concierge Pessoal
            </h1>
          </Reveal>

          <Reveal effect="rise" delay={0.3}>
            <h2 className="max-w-md font-heading text-base font-light leading-relaxed text-white/70 text-balance md:text-lg">
              Você terá um Concierge dedicado a acompanhar seus resultados e te ajudar com qualquer tipo de dificuldade e dúvidas como:
            </h2>
          </Reveal>
        </div>

        {/* Direita — bullets */}
        <ul className="flex flex-col gap-4 md:gap-5">
          {bullets.map((bullet, index) => (
            <Reveal key={bullet} effect="left" delay={0.35 + index * 0.12}>
              <li className="flex items-start gap-4 border-b border-white/10 pb-4 md:pb-5">
                <span className="mt-[0.35em] size-1.5 shrink-0 rounded-full bg-accent-light" aria-hidden />
                <p className="font-heading text-sm font-light leading-relaxed text-white/80 md:text-base">
                  {bullet}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  )
}
