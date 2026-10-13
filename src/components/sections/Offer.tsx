import { Reveal } from '@/components/ui/Reveal'

export function Offer() {
  return (
    <section
      id="oferta"
      className="relative h-svh w-full shrink-0 overflow-hidden bg-black md:w-screen"
    >

      <div className="flex h-full flex-col items-center justify-center gap-8 px-slide-x py-slide-y text-center md:gap-12 md:px-slide-x-lg md:py-slide-y-lg">
        {/* Tagline */}
        <Reveal effect="drop">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            Mas você não vai pagar
          </p>
        </Reveal>

        {/* Bloco de preços */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* DE */}
          <Reveal effect="rise" delay={0.2}>
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/40">DE</span>
              <span className="font-display text-4xl font-semibold tabular-nums text-white/30 line-through decoration-white/40 decoration-2 md:text-5xl xl:text-6xl">
                R$ 125.000,00
              </span>
            </div>
          </Reveal>

          {/* POR */}
          <Reveal effect="rise" delay={0.4}>
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">POR</span>
              <span className="font-display text-6xl font-semibold tabular-nums text-white md:text-7xl xl:text-8xl">
                R$ 95.000,00
              </span>
            </div>
          </Reveal>
        </div>

        {/* Desconto */}
        <Reveal effect="rise" delay={0.6}>
          <div className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              Desconto de{' '}
              <span className="font-semibold text-white">R$ 30.000,00</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
