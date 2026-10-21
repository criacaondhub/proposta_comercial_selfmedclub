import { CALL_OFFER } from '@/config/content'
import { SlideVariantContext } from '@/lib/slide-theme'
import { PriceAnchor } from '@/components/ui/PriceAnchor'

// Mesma diagramação da oferta (slide 22), no fundo azul da marca
export function CallOffer() {
  return (
    <SlideVariantContext.Provider value="section">
      <section
        id="oferta-call"
        className="relative isolate h-svh w-full shrink-0 overflow-hidden bg-background-section md:w-screen"
      >
        <div className="absolute inset-0 -z-10 bg-grain" aria-hidden />

        <div className="flex h-full items-center justify-center px-slide-x py-slide-y md:px-slide-x-lg md:py-slide-y-lg">
          <PriceAnchor {...CALL_OFFER} tone="blue" strike="animated" />
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
