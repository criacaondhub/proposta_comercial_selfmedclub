import { motion, type MotionValue } from 'framer-motion'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { NAVIGATION } from '@/config/content'

type SlideProgressProps = {
  current: number
  total: number
  progress: MotionValue<number>
  onPrevious: () => void
  onNext: () => void
}

const formatIndex = (value: number) => String(value).padStart(2, '0')

const buttonClasses =
  'flex size-11 cursor-pointer items-center justify-center rounded-full text-text transition-colors duration-200 hover:bg-surface hover:text-accent disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text focus-visible:outline-2 focus-visible:outline-accent'

export function SlideProgress({ current, total, progress, onPrevious, onNext }: SlideProgressProps) {
  return (
    <nav
      aria-label={NAVIGATION.progress}
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-item rounded-full border border-border bg-background px-2 py-1"
    >
      <button type="button" onClick={onPrevious} disabled={current === 0} aria-label={NAVIGATION.previous} className={buttonClasses}>
        <TbChevronLeft className="size-5" aria-hidden />
      </button>

      <div className="flex items-center gap-item">
        <span className="text-sm font-medium tabular-nums text-text" aria-live="polite">
          {formatIndex(current + 1)}
          <span className="text-text-muted"> / {formatIndex(total)}</span>
        </span>
        <div className="h-0.5 w-24 overflow-hidden rounded-full bg-border" aria-hidden>
          <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-accent" />
        </div>
      </div>

      <button type="button" onClick={onNext} disabled={current === total - 1} aria-label={NAVIGATION.next} className={buttonClasses}>
        <TbChevronRight className="size-5" aria-hidden />
      </button>
    </nav>
  )
}
