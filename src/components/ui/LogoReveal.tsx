import { useEffect, useId, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type LogoRevealProps = {
  src: string
  /** viewBox do SVG original — reserva a proporção antes do carregamento */
  viewBox: string
  /** Cor de preenchimento por classe do SVG (ex.: { 'cls-1': 'var(--color-section-text)' }) */
  colors: Record<string, string>
  label: string
  /** Atraso (s) para encadear vários logos */
  delay?: number
  /** Espessura do traço em unidades do viewBox */
  strokeWidth?: number
  className?: string
}

type LogoPath = { d: string; className: string }

const EASE = [0.65, 0, 0.35, 1] as const
const DRAW_DURATION = 2.2
const PATH_STAGGER = 0.06
const FILL_DURATION = 1.2
const SHEEN_DURATION = 1.6

function useLogoPaths(src: string) {
  const [paths, setPaths] = useState<LogoPath[]>([])

  useEffect(() => {
    let cancelled = false

    fetch(src)
      .then((response) => response.text())
      .then((markup) => {
        if (cancelled) return
        const doc = new DOMParser().parseFromString(markup, 'image/svg+xml')
        const parsed = Array.from(doc.querySelectorAll('path')).map((path) => ({
          d: path.getAttribute('d') ?? '',
          className: path.getAttribute('class') ?? '',
        }))
        setPaths(parsed)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [src])

  return paths
}

export function LogoReveal({ src, viewBox, colors, label, delay = 0, strokeWidth = 1.6, className }: LogoRevealProps) {
  const paths = useLogoPaths(src)
  const reduceMotion = useReducedMotion()
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const [, , width, height] = viewBox.split(/\s+/).map(Number)

  const fillDelay = delay + DRAW_DURATION * 0.7
  const sheenDelay = fillDelay + FILL_DURATION * 0.6

  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      className={cn('block h-auto overflow-visible', className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <defs>
        {/* Traço metálico: o reflexo percorre o logo enquanto ele é desenhado */}
        <linearGradient
          id={`${id}-metal`}
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={0}
          x2={width * 0.5}
          y2={height * 0.5}
          spreadMethod="reflect"
        >
          <stop offset="0" style={{ stopColor: 'var(--color-metal-shadow)' }} />
          <stop offset="0.35" style={{ stopColor: 'var(--color-metal-mid)' }} />
          <stop offset="0.5" style={{ stopColor: 'var(--color-metal-light)' }} />
          <stop offset="0.65" style={{ stopColor: 'var(--color-metal-warm)' }} />
          <stop offset="1" style={{ stopColor: 'var(--color-metal-shadow)' }} />
          {!reduceMotion && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 0"
              to={`${width} ${height}`}
              dur="3s"
              repeatCount="indefinite"
            />
          )}
        </linearGradient>

        {/* Faixa de brilho que varre o logo já preenchido */}
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--color-metal-light)', stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: 'var(--color-metal-light)', stopOpacity: 0.55 }} />
          <stop offset="1" style={{ stopColor: 'var(--color-metal-light)', stopOpacity: 0 }} />
        </linearGradient>

        <clipPath id={`${id}-clip`}>
          {paths.map((path, index) => (
            <path key={index} d={path.d} />
          ))}
        </clipPath>
      </defs>

      {paths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          fill={colors[path.className] ?? 'currentColor'}
          stroke={`url(#${id}-metal)`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? false : { pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
          animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}
          transition={{
            pathLength: { duration: DRAW_DURATION, delay: delay + index * PATH_STAGGER, ease: EASE },
            fillOpacity: { duration: FILL_DURATION, delay: fillDelay + index * PATH_STAGGER * 0.5, ease: 'easeOut' },
            strokeOpacity: { duration: FILL_DURATION, delay: fillDelay + FILL_DURATION * 0.5, ease: 'easeOut' },
          }}
        />
      ))}

      {!reduceMotion && paths.length > 0 && (
        <g clipPath={`url(#${id}-clip)`}>
          <motion.rect
            y={-height * 0.25}
            width={width * 0.35}
            height={height * 1.5}
            fill={`url(#${id}-sheen)`}
            initial={{ x: -width * 0.5 }}
            animate={{ x: width * 1.2 }}
            transition={{
              duration: SHEEN_DURATION,
              delay: sheenDelay,
              ease: EASE,
              repeat: Infinity,
              repeatDelay: 6,
            }}
            style={{ skewX: -20 }}
          />
        </g>
      )}
    </svg>
  )
}
