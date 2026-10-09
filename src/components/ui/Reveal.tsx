import { Fragment, type ReactNode } from 'react'
import { motion, useReducedMotion, type TargetAndTransition } from 'framer-motion'

/**
 * Efeitos de entrada — cada slide usa um diferente:
 * rise  → sobe com fade (padrão)
 * blur  → entra em foco (desfoque → nítido)
 * left  → desliza da esquerda
 * tilt  → vem da direita com giro 3D
 * zoom  → cresce a partir do centro
 * wipe  → revelado por cortina da esquerda para a direita
 * drop  → cai de cima
 * flip  → vira de baixo para cima em 3D
 * pop   → aparece com leve elástico
 * spread → letras se aproximam enquanto entram em foco
 * unveil → revelado de baixo para cima enquanto assenta de um leve zoom
 */
export type RevealEffect = 'rise' | 'blur' | 'left' | 'tilt' | 'zoom' | 'wipe' | 'drop' | 'flip' | 'pop' | 'spread' | 'unveil'

// Expo out: entra decidido e pousa bem devagar
const EASE = [0.16, 1, 0.3, 1] as const

// Desfoque leve em quase todos os efeitos: o elemento "entra em foco" enquanto se move
const SHARP = 'blur(0px)'
const SOFT = 'blur(10px)'

const EFFECTS: Record<RevealEffect, { from: TargetAndTransition; to: TargetAndTransition; duration: number }> = {
  rise: { from: { opacity: 0, y: 32, filter: SOFT }, to: { opacity: 1, y: 0, filter: SHARP }, duration: 1.2 },
  blur: { from: { opacity: 0, filter: 'blur(18px)', scale: 1.05 }, to: { opacity: 1, filter: SHARP, scale: 1 }, duration: 1.6 },
  left: { from: { opacity: 0, x: -72, filter: SOFT }, to: { opacity: 1, x: 0, filter: SHARP }, duration: 1.3 },
  tilt: {
    from: { opacity: 0, x: 90, rotateY: -24, filter: SOFT, transformPerspective: 1200 },
    to: { opacity: 1, x: 0, rotateY: 0, filter: SHARP, transformPerspective: 1200 },
    duration: 1.4,
  },
  zoom: { from: { opacity: 0, scale: 0.9, filter: SOFT }, to: { opacity: 1, scale: 1, filter: SHARP }, duration: 1.3 },
  wipe: { from: { clipPath: 'inset(0% 100% 0% 0%)' }, to: { clipPath: 'inset(0% 0% 0% 0%)' }, duration: 1.4 },
  drop: { from: { opacity: 0, y: -40, filter: SOFT }, to: { opacity: 1, y: 0, filter: SHARP }, duration: 1.2 },
  flip: {
    from: { opacity: 0, rotateX: 60, y: 40, filter: SOFT, transformPerspective: 1000, originY: 1 },
    to: { opacity: 1, rotateX: 0, y: 0, filter: SHARP, transformPerspective: 1000, originY: 1 },
    duration: 1.4,
  },
  pop: { from: { opacity: 0, scale: 0.7, filter: SOFT }, to: { opacity: 1, scale: 1, filter: SHARP }, duration: 0.9 },
  spread: {
    from: { opacity: 0, letterSpacing: '0.12em', filter: 'blur(8px)' },
    to: { opacity: 1, letterSpacing: '0em', filter: SHARP },
    duration: 1.8,
  },
  unveil: {
    from: { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.12 },
    to: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 },
    duration: 1.8,
  },
}

type RevealProps = {
  children: ReactNode
  effect?: RevealEffect
  delay?: number
  className?: string
}

export function Reveal({ children, effect = 'rise', delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const { from, to, duration } = EFFECTS[effect]
  const transition =
    effect === 'pop' ? { type: 'spring' as const, stiffness: 260, damping: 18, delay } : { duration, delay, ease: EASE }

  // wipe e unveil recortam o elemento por clip-path até área zero — o IntersectionObserver então nunca o vê
  // entrar na tela. Por isso o invólucro (sem recorte) é observado e a cortina anima por dentro.
  // className fica no invólucro; o miolo ocupa a altura toda.
  if (effect === 'wipe' || effect === 'unveil') {
    return (
      <motion.div
        className={className}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div className="h-full" variants={{ hidden: from, visible: { ...to, transition } }}>
          {children}
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : from}
      whileInView={to}
      viewport={{ once: true, amount: 0.6 }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

type RevealWordsProps = {
  /** Texto com \n para quebras de linha */
  text: string
  /** Classe do <br> — define a partir de qual breakpoint as quebras valem */
  breakClass?: string
  delay?: number
  stagger?: number
}

// Palavras sobem uma a uma de dentro de uma máscara
export function RevealWords({ text, breakClass = 'hidden md:block', delay = 0, stagger = 0.06 }: RevealWordsProps) {
  const reduceMotion = useReducedMotion()
  let wordIndex = 0

  return text.split('\n').map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br className={breakClass} />}
      {line.split(' ').map((word, index) => {
        const order = wordIndex++
        return (
          <Fragment key={index}>
            {(index > 0 || lineIndex > 0) && ' '}
            <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={reduceMotion ? false : { y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: delay + order * stagger, ease: EASE }}
              >
                {word}
              </motion.span>
            </span>
          </Fragment>
        )
      })}
    </Fragment>
  ))
}
