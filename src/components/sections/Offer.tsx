import { AnimatePresence, motion } from 'framer-motion'
import { COVER } from '@/config/content'
import { useSlideSteps } from '@/lib/slide-steps'
import { Reveal } from '@/components/ui/Reveal'
import { LogoReveal } from '@/components/ui/LogoReveal'

// Mesmas cores do logo na capa (slide 01)
const SYMBOL_COLORS = { 'cls-1': 'var(--color-section-text)' }
const WORDMARK_COLORS = { 'cls-1': 'var(--color-section-heading)', 'cls-2': 'var(--color-section-text)' }

const GLASS_EASE = [0.16, 1, 0.3, 1] as const

// Logo da capa (símbolo + nome, desenhados com o traço metálico) + título da condição exclusiva
function ExclusiveCondition() {
  return (
    <div className="flex flex-col items-center gap-group text-center md:gap-group-lg">
      <div className="flex flex-col items-center gap-item md:gap-item-lg">
        <LogoReveal
          src={COVER.symbol.src}
          viewBox={COVER.symbol.viewBox}
          label={COVER.symbol.alt}
          colors={SYMBOL_COLORS}
          delay={0.3}
          className="w-24 md:w-32 xl:w-36"
        />
        <LogoReveal
          src={COVER.wordmark.src}
          viewBox={COVER.wordmark.viewBox}
          label={COVER.wordmark.alt}
          colors={WORDMARK_COLORS}
          delay={0.9}
          strokeWidth={2}
          className="w-56 md:w-80 xl:w-96"
        />
      </div>

      <Reveal effect="rise" delay={1.4}>
        <h2 className="max-w-5xl font-display text-4xl font-semibold text-balance text-white md:text-5xl xl:text-6xl">
          Uma condição <span className="text-accent-light">extremamente exclusiva</span> para fechamento em call
        </h2>
      </Reveal>
    </div>
  )
}

export function Offer() {
  // No deck, o clique seguinte cobre a oferta com um vidro embaçado e mostra a condição exclusiva
  const steps = useSlideSteps()
  const showGlass = steps !== null && steps.step >= 1

  return (
    <>
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
                <span className="font-display text-4xl font-semibold tabular-nums text-price-old line-through decoration-price-old decoration-2 md:text-5xl xl:text-6xl">
                  R$ 150.000,00
                </span>
              </div>
            </Reveal>

            {/* POR — à vista e parcelado */}
            <Reveal effect="rise" delay={0.4}>
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">POR</span>
                  <span className="font-display text-6xl font-semibold tabular-nums text-white md:text-7xl xl:text-8xl">
                    R$ 90.000,00
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">à vista</span>
                </div>
                <p className="font-display text-2xl font-semibold tabular-nums text-white/80 md:text-3xl xl:text-4xl">
                  ou 12x de R$ 7.900,00
                </p>
              </div>
            </Reveal>

            {/* Nota do parcelamento, no estilo de tagline */}
            <Reveal effect="rise" delay={0.5}>
              <p className="max-w-2xl text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-balance text-white/50 md:text-sm">
                Este parcelamento é sem comprometer o limite do seu cartão de crédito (você só precisa ter o limite da parcela)
              </p>
            </Reveal>
          </div>

          {/* Desconto */}
          <Reveal effect="rise" delay={0.6}>
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                Desconto de{' '}
                <span className="font-semibold text-white">R$ 60.000,00</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Vidro embaçado na frente da oferta + condição exclusiva (o logo é desenhado ao entrar) */}
        <AnimatePresence>
          {showGlass && (
            <motion.div
              key="vidro"
              className="absolute inset-0 z-10 flex items-center justify-center bg-linear-to-b from-white/10 via-white/5 to-white/10 px-slide-x md:px-slide-x-lg"
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(28px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 1, ease: GLASS_EASE }}
            >
              <div className="pointer-events-none absolute inset-0 bg-grain" aria-hidden />
              <ExclusiveCondition />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Mobile (sem deck e sem cliques): a condição exclusiva entra como bloco próprio, logo após a oferta */}
      {steps === null && (
        <section className="relative flex min-h-svh w-full shrink-0 items-center justify-center overflow-hidden bg-black px-slide-x py-slide-y">
          <div className="pointer-events-none absolute inset-0 bg-grain" aria-hidden />
          <ExclusiveCondition />
        </section>
      )}
    </>
  )
}
