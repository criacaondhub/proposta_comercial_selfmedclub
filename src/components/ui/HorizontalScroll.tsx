import {
  Children,
  isValidElement,
  useEffect,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react'
import { animate, motion, useMotionValue, useReducedMotion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SlideProgress } from '@/components/ui/SlideProgress'
import { SlideStepsContext } from '@/lib/slide-steps'

type HorizontalScrollProps = {
  children: ReactNode
  /** Slides (componentes) que entram subindo por cima do anterior, em vez de virem da direita */
  enterFromBottom?: ComponentType[]
  /** Slides (componentes) que entram descendo por cima do anterior */
  enterFromTop?: ComponentType[]
  /** Slides com etapas internas: as setas percorrem as etapas antes de trocar de slide */
  steps?: { component: ComponentType; count: number }[]
}

const NEXT_KEYS = ['ArrowRight', 'PageDown']
const PREVIOUS_KEYS = ['ArrowLeft', 'PageUp']

// Transição em camadas: o slide novo desliza por cima e o anterior recua ao fundo.
// Curva quart in-out longa — arranca suave, cruza rápido e pousa macio
const TRANSITION = { duration: 1.1, ease: [0.77, 0, 0.175, 1] } as const

type Entry = 'side' | 'bottom' | 'top'
type Pose = { x: string; y: string; scale: number; borderRadius: number; dim: number }

const CENTER: Pose = { x: '0%', y: '0%', scale: 1, borderRadius: 0, dim: 0 }

// Fora da tela, aguardando a vez (de onde o slide vai entrar)
const AHEAD: Record<Entry, Pose> = {
  side: { ...CENTER, x: '100%' },
  bottom: { ...CENTER, y: '100%' },
  top: { ...CENTER, y: '-100%' },
}

// Recuado ao fundo, sob o slide que entrou: encolhe, arredonda, escurece e desliza um pouco (parallax)
// no sentido em que foi empurrado
const PARKED = { scale: 0.88, borderRadius: 28, dim: 0.65 }
const BEHIND: Record<Entry, Pose> = {
  side: { ...CENTER, ...PARKED, x: '-28%' },
  bottom: { ...CENTER, ...PARKED, y: '-14%' },
  top: { ...CENTER, ...PARKED, y: '14%' },
}

/**
 * Pose de cada slide em relação ao atual:
 * - atual: centro, em tela cheia
 * - à frente: fora da tela, do lado por onde vai entrar (direita, abaixo ou acima)
 * - atrás: recuado ao fundo — sempre coberto pelos slides de cima (z-index crescente)
 */
function poseFor(index: number, current: number, entries: Entry[]): Pose {
  if (index === current) return CENTER
  if (index > current) return AHEAD[entries[index]]
  return BEHIND[entries[index + 1] ?? 'side']
}

// Desktop/tablet: slides travados — só avançam pelos botões (ou setas do teclado), nunca pela rolagem
function SlideDeck({ children, enterFromBottom = [], enterFromTop = [], steps = [] }: HorizontalScrollProps) {
  const [position, setPosition] = useState({ current: 0, step: 0 })
  const { current, step } = position
  const slides = Children.toArray(children)
  const total = slides.length
  const entries = slides.map((slide): Entry => {
    if (!isValidElement(slide)) return 'side'
    const type = slide.type as ComponentType
    if (enterFromBottom.includes(type)) return 'bottom'
    if (enterFromTop.includes(type)) return 'top'
    return 'side'
  })
  const stepCounts = slides.map((slide) =>
    isValidElement(slide) ? (steps.find((entry) => entry.component === slide.type)?.count ?? 1) : 1,
  )
  const progress = useMotionValue(0)
  const reduceMotion = useReducedMotion()

  // Avança/volta uma etapa; ao passar da primeira ou da última etapa, troca de slide.
  // Voltando para um slide com etapas, ele abre na última.
  const goBy = (direction: 1 | -1) =>
    setPosition((previous) => {
      const count = stepCounts[previous.current]
      if (direction > 0 && previous.step < count - 1) return { ...previous, step: previous.step + 1 }
      if (direction < 0 && previous.step > 0) return { ...previous, step: previous.step - 1 }

      const next = Math.min(Math.max(previous.current + direction, 0), total - 1)
      if (next === previous.current) return previous
      return { current: next, step: direction > 0 ? 0 : stepCounts[next] - 1 }
    })

  useEffect(() => {
    const target = total > 1 ? current / (total - 1) : 0
    const controls = animate(progress, target, reduceMotion ? { duration: 0 } : TRANSITION)
    return () => controls.stop()
  }, [current, total, progress, reduceMotion])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      // Componentes que tratam as setas por conta própria (ex.: galeria) chamam preventDefault
      if (event.defaultPrevented) return
      const target = event.target as HTMLElement
      if (target.closest('input, textarea, select, [contenteditable="true"]')) return

      if (NEXT_KEYS.includes(event.key)) {
        event.preventDefault()
        goBy(1)
      } else if (PREVIOUS_KEYS.includes(event.key)) {
        event.preventDefault()
        goBy(-1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  return (
    <>
      <div className="relative h-svh overflow-hidden bg-background-dark">
        {slides.map((slide, index) => {
          const { dim, ...pose } = poseFor(index, current, entries)
          const transition = reduceMotion ? { duration: 0 } : TRANSITION

          return (
            <motion.div
              key={index}
              className="absolute inset-0 overflow-hidden shadow-2xl will-change-transform"
              style={{ zIndex: index }}
              initial={false}
              animate={pose}
              transition={transition}
              aria-hidden={index !== current}
              inert={index !== current}
            >
              <SlideStepsContext.Provider
                value={{
                  step: index === current ? step : index < current ? stepCounts[index] - 1 : 0,
                  setStep: (next) =>
                    setPosition((previous) => (previous.current === index ? { ...previous, step: next } : previous)),
                }}
              >
                {slide}
              </SlideStepsContext.Provider>

              {/* Véu que escurece o slide enquanto ele recua */}
              <motion.div
                className="pointer-events-none absolute inset-0 z-50 bg-background-dark"
                initial={false}
                animate={{ opacity: dim }}
                transition={transition}
                aria-hidden
              />
            </motion.div>
          )
        })}
      </div>

      <SlideProgress
        current={current}
        total={total}
        progress={progress}
        onPrevious={() => goBy(-1)}
        onNext={() => goBy(1)}
      />
    </>
  )
}

export function HorizontalScroll({ children, enterFromBottom, enterFromTop, steps }: HorizontalScrollProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (!isDesktop) return <div className="flex flex-col">{children}</div>

  return (
    <SlideDeck enterFromBottom={enterFromBottom} enterFromTop={enterFromTop} steps={steps}>
      {children}
    </SlideDeck>
  )
}
