import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

type HorizontalScrollProps = {
  children: ReactNode
}

function HorizontalTrack({ children }: HorizontalScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

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

  return (
    <div ref={wrapperRef} className="relative" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex h-full w-max will-change-transform">
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (!isDesktop) return <div className="flex flex-col">{children}</div>

  return <HorizontalTrack>{children}</HorizontalTrack>
}
