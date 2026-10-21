import { AnimatePresence, motion } from 'framer-motion'
import { COVER, OFFER } from '@/config/content'
import { asset } from '@/lib/asset'
import { useSlideSteps } from '@/lib/slide-steps'
import { Reveal } from '@/components/ui/Reveal'
import { PriceAnchor } from '@/components/ui/PriceAnchor'

const GLASS_EASE = [0.16, 1, 0.3, 1] as const

// Logo da capa (símbolo + nome, versões claras — sem a animação de desenho) + título da condição exclusiva
function ExclusiveCondition() {
  return (
    <div className="flex flex-col items-center gap-group text-center md:gap-group-lg">
      <div className="flex flex-col items-center gap-item md:gap-item-lg">
        <img src={COVER.symbol.src} alt={COVER.symbol.alt} className="block h-auto w-24 md:w-32 xl:w-36" />
        <img
          src={asset('/assets/01-capa/Logo-horizontal-branco.svg')}
          alt={COVER.wordmark.alt}
          className="block h-auto w-56 md:w-80 xl:w-96"
        />
      </div>

      <Reveal effect="rise" delay={0.3}>
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

        <div className="flex h-full items-center justify-center px-slide-x py-slide-y md:px-slide-x-lg md:py-slide-y-lg">
          <PriceAnchor {...OFFER} tone="dark" />
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
