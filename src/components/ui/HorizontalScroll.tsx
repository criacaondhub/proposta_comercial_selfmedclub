import { Children, useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { lenis } from '@/lib/lenis'
import { SlideProgress } from '@/components/ui/SlideProgress'

type HorizontalScrollProps = {
  children: ReactNode
}

const NEXT_KEYS = ['ArrowRight', 'PageDown']
const PREVIOUS_KEYS = ['ArrowLeft', 'PageUp']

function HorizontalTrack({ children }: HorizontalScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const [current, setCurrent] = useState(0)
  const total = Children.count(children)

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => setDistance(track.scrollWidth - window.innerWidth)
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setCurrent(Math.round(value * (total - 1)))
  })

  // Cada slide tem 100vw de largura, então avançar um slide = rolar 1 innerWidth na vertical
  const goBy = useCallback(
    (step: number) => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const slideWidth = window.innerWidth
      const targetIndex = Math.round((lenis.targetScroll - wrapper.offsetTop) / slideWidth) + step
      const clampedIndex = Math.min(Math.max(targetIndex, 0), total - 1)

      lenis.scrollTo(wrapper.offsetTop + clampedIndex * slideWidth)
    },
    [total],
  )

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
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
  }, [goBy])

  return (
    <>
      <div ref={wrapperRef} className="relative" style={{ height: `calc(100svh + ${distance}px)` }}>
        <div className="sticky top-0 h-svh overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex h-full w-max will-change-transform">
            {children}
          </motion.div>
        </div>
      </div>

      <SlideProgress
        current={current}
        total={total}
        progress={scrollYProgress}
        onPrevious={() => goBy(-1)}
        onNext={() => goBy(1)}
      />
    </>
  )
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (!isDesktop) return <div className="flex flex-col">{children}</div>

  return <HorizontalTrack>{children}</HorizontalTrack>
}
