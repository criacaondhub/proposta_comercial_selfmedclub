/**
 * AccordionGallery — React Bits (TypeScript + Tailwind), adaptado ao projeto:
 * - `height` aceita string (ex.: '100%') para a galeria ocupar a tela inteira
 * - cada item aceita `icon` (exibido junto da legenda)
 * - fundo dos painéis usa `overlayColor` em vez de hex fixo
 * - corrigido: `--ag-dim` era animado na imagem, mas a camada escura (irmã) nunca o herdava —
 *   o painel aberto ficava sempre 35% escuro. Agora a variável é animada no painel
 * - degradê inferior mais leve (só para legibilidade da legenda)
 * - modo controlado: `activeIndex` + `onActiveChange` (o deck de slides decide qual painel está aberto)
 */
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { gsap } from 'gsap'

export interface AccordionGalleryItem {
  image: string
  label?: string
  link?: string
  alt?: string
  icon?: ReactNode
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[]
  defaultIndex?: number
  /** Modo controlado: painel aberto definido de fora */
  activeIndex?: number
  onActiveChange?: (index: number) => void
  accentColor?: string
  overlayColor?: string
  textColor?: string
  /** Número = px; string = qualquer altura CSS (ex.: '100%') */
  height?: number | string
  gap?: number
  radius?: number
  expandRatio?: number
  orientation?: 'horizontal' | 'vertical'
  duration?: number
  ease?: string
  parallax?: number
  tilt?: number
  stagger?: number
  trigger?: 'hover' | 'click'
  showLabels?: boolean
  grayscale?: boolean
  className?: string
}

const AccordionGallery = ({
  items,
  defaultIndex = 2,
  activeIndex,
  onActiveChange,
  accentColor = '#ffffff',
  overlayColor = '#060010',
  textColor = '#ffffff',
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = '',
}: AccordionGalleryProps) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<(HTMLElement | null)[]>([])
  const mediaRefs = useRef<(HTMLElement | null)[]>([])
  const barRefs = useRef<(HTMLElement | null)[]>([])
  const textRefs = useRef<(HTMLElement | null)[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const firstRunRef = useRef(true)
  const mediaSizeRef = useRef(320)

  const vertical = orientation === 'vertical'
  const count = items.length
  const [internalActive, setInternalActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1))
  const active = activeIndex ?? internalActive
  const setActive = (index: number) => (onActiveChange ? onActiveChange(index) : setInternalActive(index))

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const overlayBg = `linear-gradient(180deg, transparent 60%, color-mix(in srgb, ${overlayColor} 60%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`

  const rootHeight =
    typeof height === 'number' ? `${vertical ? Math.round(height * 1.6) : height}px` : height

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current
      if (!panels.length) return

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9)
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1
      const mediaSize = mediaSizeRef.current

      tlRef.current?.kill()
      const dur = animate && !prefersReduced ? duration : 0
      const tl = gsap.timeline()

      panels.forEach((panel, i) => {
        if (!panel) return
        const isActive = i === active
        const media = mediaRefs.current[i]
        const bar = barRefs.current[i]
        const text = textRefs.current[i]

        const rot = isActive ? 0 : i < active ? tilt : -tilt
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot }

        // --ag-dim fica no painel: a camada escura é irmã da imagem e herda a variável daqui
        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, '--ag-dim': isActive ? 0 : 0.35, duration: dur, ease }, 0)

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i))
          const shift = drift * parallax * mediaSize * 0.06
          const gray = grayscale ? (isActive ? 0 : 1) : 0
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              duration: dur,
              ease,
            },
            0,
          )
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0)
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0)
          }
        }
      })

      tlRef.current = tl
    },
    [active, count, expandRatio, duration, ease, vertical, tilt, parallax, grayscale, showLabels, stagger, prefersReduced],
  )

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const measure = () => {
      const rect = el.getBoundingClientRect()
      const total = vertical ? rect.height : rect.width
      const usable = Math.max(total - gap * (count - 1), 120)
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22)
      mediaSizeRef.current = size
      el.style.setProperty('--ag-media-size', `${size}px`)
      applyLayout(!firstRunRef.current)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [applyLayout, gap, count, expandRatio, vertical])

  useEffect(() => {
    applyLayout(!firstRunRef.current)
    firstRunRef.current = false
  }, [applyLayout])

  useEffect(
    () => () => {
      tlRef.current?.kill()
    },
    [],
  )

  const handleEnter = (i: number) => {
    if (trigger === 'hover') setActive(i)
  }

  const handleClick = (i: number, e: MouseEvent) => {
    if (i !== active) {
      e.preventDefault()
      setActive(i)
    }
  }

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i + 1) % count)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i - 1 + count) % count)
    }
  }

  return (
    <div
      ref={rootRef}
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} w-full max-w-full [perspective:1400px] max-[520px]:!flex-col max-[520px]:[perspective:none] ${className}`}
      style={{ gap: `${gap}px`, height: rootHeight }}
      role="list"
      aria-label="Galeria de entregáveis"
    >
      {items.map((item, i) => {
        const isActive = i === active
        const Tag = (item.link ? 'a' : 'div') as 'a'
        return (
          <Tag
            key={i}
            ref={(el: HTMLElement | null) => {
              panelRefs.current[i] = el
            }}
            className="group relative block min-h-0 min-w-0 flex-[1_1_0] cursor-pointer overflow-hidden no-underline outline-none [box-shadow:0_10px_30px_-18px_rgba(0,0,0,0.8)] [transform-origin:center] [transform-style:preserve-3d] focus-visible:[box-shadow:0_0_0_2px_var(--ag-accent),0_10px_30px_-18px_rgba(0,0,0,0.8)] max-[520px]:min-h-[84px] max-[520px]:!transform-none"
            style={
              {
                borderRadius: `${radius}px`,
                background: overlayColor,
                '--ag-accent': accentColor,
                willChange: 'flex-grow, transform',
              } as CSSProperties
            }
            href={item.link || undefined}
            onClick={(e) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <span
                ref={(el: HTMLElement | null) => {
                  mediaRefs.current[i] = el
                }}
                className="absolute top-1/2 left-1/2 [filter:grayscale(var(--ag-gray,1))]"
                style={{
                  width: vertical ? '100%' : 'var(--ag-media-size, 320px)',
                  height: vertical ? 'var(--ag-media-size, 320px)' : '100%',
                  willChange: 'transform, filter',
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.label || ''}
                  draggable={false}
                  className="block h-full w-full select-none object-cover [-webkit-user-drag:none]"
                />
              </span>
              <span className="pointer-events-none absolute inset-0" style={{ background: overlayBg }} aria-hidden="true" />
            </span>
            {showLabels && (
              <span
                className="pointer-events-none absolute right-5 bottom-5 left-5 z-[2] flex items-center gap-3 md:right-8 md:bottom-24 md:left-8"
                aria-hidden="true"
              >
                <span
                  ref={(el: HTMLElement | null) => {
                    barRefs.current[i] = el
                  }}
                  className="h-[26px] w-[3px] flex-none rounded-[3px] opacity-0"
                  style={{
                    background: accentColor,
                    boxShadow: `0 0 12px color-mix(in srgb, ${accentColor} 60%, transparent)`,
                  }}
                />
                <span
                  ref={(el: HTMLElement | null) => {
                    textRefs.current[i] = el
                  }}
                  className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1rem,1.4vw,1.4rem)] font-semibold tracking-[0.01em] opacity-0 [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]"
                  style={{ color: textColor }}
                >
                  {item.icon}
                  {item.label}
                </span>
              </span>
            )}
          </Tag>
        )
      })}
    </div>
  )
}

export default AccordionGallery
