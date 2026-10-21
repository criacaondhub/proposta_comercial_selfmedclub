import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

type PriceAnchorProps = {
  tagline: string
  /** Preço "DE" — aparece riscado em vermelho */
  from: string
  /** Preço "POR", à vista */
  to: string
  /** Ex.: 'ou 12x de R$ 7.900,00' */
  installments: string
  /** Nota do parcelamento, no estilo de tagline */
  note: string
  /** Valor da tag de desconto */
  discount: string
  /** Fundo do slide: preto (slide 22) ou azul da marca (slide 23) */
  tone?: 'dark' | 'blue'
  /** Preço "DE": riscado em vermelho, ou em branco translúcido com o risco sendo desenhado */
  strike?: 'red' | 'animated'
}

const STRIKE_EASE = [0.65, 0, 0.35, 1] as const

// Preço antigo em branco translúcido; o risco atravessa da esquerda para a direita depois que o preço entra
function AnimatedStrike({ children }: { children: string }) {
  return (
    <motion.span
      className="relative inline-block font-display text-4xl font-semibold tabular-nums text-white/40 md:text-5xl xl:text-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
      <motion.span
        className="absolute -inset-x-[1.5%] top-[46%] h-[0.05em] min-h-0.5 origin-left rounded-full bg-white/60"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 0.9, delay: 1.1, ease: STRIKE_EASE } },
        }}
        aria-hidden
      />
    </motion.span>
  )
}

// Os rótulos em azul claro não têm contraste sobre o azul da marca — no fundo azul eles usam o azul mais claro da tagline
const TONES = {
  dark: {
    tagline: 'text-white/50',
    fromLabel: 'text-white/40',
    label: 'text-accent-light',
    installments: 'text-white/80',
    note: 'text-white/50',
    pill: 'border-white/10 bg-white/5 text-white/60',
  },
  blue: {
    tagline: 'text-section-muted',
    fromLabel: 'text-white/60',
    label: 'text-section-tagline',
    installments: 'text-white/85',
    note: 'text-white/70',
    pill: 'border-white/15 bg-white/10 text-white/75',
  },
} as const

// Ancoragem de preço: tagline, DE riscado, POR à vista + parcelado, nota do parcelamento e tag de desconto
export function PriceAnchor({
  tagline,
  from,
  to,
  installments,
  note,
  discount,
  tone = 'dark',
  strike = 'red',
}: PriceAnchorProps) {
  const colors = TONES[tone]

  return (
    <div className="flex flex-col items-center gap-8 text-center md:gap-12">
      {/* Tagline */}
      <Reveal effect="drop">
        <p className={cn('text-sm font-medium uppercase tracking-[0.25em]', colors.tagline)}>{tagline}</p>
      </Reveal>

      {/* Bloco de preços */}
      <div className="flex flex-col items-center gap-4 md:gap-6">
        {/* DE */}
        <Reveal effect="rise" delay={0.2}>
          <div className="flex items-baseline gap-3">
            <span className={cn('text-sm font-semibold uppercase tracking-widest', colors.fromLabel)}>DE</span>
            {strike === 'animated' ? (
              <AnimatedStrike>{from}</AnimatedStrike>
            ) : (
              <span className="font-display text-4xl font-semibold tabular-nums text-price-old line-through decoration-price-old decoration-2 md:text-5xl xl:text-6xl">
                {from}
              </span>
            )}
          </div>
        </Reveal>

        {/* POR — à vista e parcelado */}
        <Reveal effect="rise" delay={0.4}>
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <div className="flex items-baseline gap-3">
              <span className={cn('text-sm font-semibold uppercase tracking-widest', colors.label)}>POR</span>
              <span className="font-display text-6xl font-semibold tabular-nums text-white md:text-7xl xl:text-8xl">
                {to}
              </span>
              <span className={cn('text-sm font-semibold uppercase tracking-widest', colors.label)}>à vista</span>
            </div>
            <p className={cn('font-display text-2xl font-semibold tabular-nums md:text-3xl xl:text-4xl', colors.installments)}>
              {installments}
            </p>
          </div>
        </Reveal>

        {/* Nota do parcelamento, no estilo de tagline */}
        <Reveal effect="rise" delay={0.5}>
          <p
            className={cn(
              'max-w-2xl text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-balance md:text-sm',
              colors.note,
            )}
          >
            {note}
          </p>
        </Reveal>
      </div>

      {/* Desconto */}
      <Reveal effect="rise" delay={0.6}>
        <div className={cn('rounded-full border px-6 py-2.5 backdrop-blur-sm', colors.pill)}>
          <p className="text-sm font-medium uppercase tracking-[0.2em]">
            Desconto de <span className="font-semibold text-white">{discount}</span>
          </p>
        </div>
      </Reveal>
    </div>
  )
}
