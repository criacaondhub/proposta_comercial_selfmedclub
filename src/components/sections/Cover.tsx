import { COVER } from '@/config/content'
import { Slide } from '@/components/ui/Slide'
import { LogoReveal } from '@/components/ui/LogoReveal'
import { DarkBackground } from '@/components/ui/DarkBackground'

const SYMBOL_COLORS = { 'cls-1': 'var(--color-section-text)' }
// No fundo azul, o azul original do logotipo vira branco para manter a leitura
const WORDMARK_COLORS = { 'cls-1': 'var(--color-section-heading)', 'cls-2': 'var(--color-section-text)' }

export function Cover() {
  return (
    <Slide
      id="capa"
      variant="section"
      background={<DarkBackground />}
      className="relative items-center justify-center md:h-full"
    >
      <h1 className="sr-only">{COVER.title}</h1>

      <div className="flex flex-col items-center gap-group md:gap-group-lg">
        <LogoReveal
          src={COVER.symbol.src}
          viewBox={COVER.symbol.viewBox}
          label={COVER.symbol.alt}
          colors={SYMBOL_COLORS}
          className="w-32 md:w-44"
        />
        <LogoReveal
          src={COVER.wordmark.src}
          viewBox={COVER.wordmark.viewBox}
          label={COVER.wordmark.alt}
          colors={WORDMARK_COLORS}
          delay={0.9}
          strokeWidth={2}
          className="w-64 md:w-md"
        />
      </div>
    </Slide>
  )
}
