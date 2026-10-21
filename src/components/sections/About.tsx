import { ABOUT } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { Reveal, RevealWords } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

// Entrada: brasão entra em foco, título sobe palavra por palavra, subtítulo entra em foco
export function About() {
  return (
    <Slide
      id="sobre"
      variant="section"
      background={<div className="absolute inset-0 bg-grain" />}
      className="items-center justify-center text-center md:h-full"
    >
      {/* Brasão no topo — no desktop sai do fluxo para o texto ficar no centro exato */}
      <Reveal effect="blur" className="flex justify-center md:absolute md:inset-x-0 md:top-slide-y-lg">
        <img src={ABOUT.symbol.src} alt={ABOUT.symbol.alt} className="h-16 w-auto md:h-24" />
      </Reveal>

      <h2
        className={cn(
          'max-w-5xl font-display text-4xl font-semibold text-balance md:text-6xl xl:text-7xl',
          theme.heading,
        )}
      >
        <RevealWords text={ABOUT.title} delay={0.4} />
      </h2>

      <Reveal effect="blur" delay={1.1}>
        <p
          className={cn(
            'max-w-6xl font-heading text-lg font-light leading-relaxed text-balance md:text-xl lg:whitespace-nowrap lg:text-2xl xl:text-3xl',
            theme.text,
          )}
        >
          {ABOUT.text.split('\n').map((line, index) => (
            <span key={index}>
              {index > 0 && <br className="hidden lg:block" />}
              {index > 0 && ' '}
              {line}
            </span>
          ))}
        </p>
      </Reveal>
    </Slide>
  )
}
