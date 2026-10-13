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

export function SlideProgress({ current, total, progress, onPrevious, onNext }: SlideProgressProps) {
  return (
    <nav
      aria-label={NAVIGATION.progress}
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/25 px-1 py-1 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={current === 0}
        aria-label={NAVIGATION.previous}
        className="flex size-7 cursor-pointer items-center justify-center rounded-full text-white/50 transition-colors duration-200 hover:text-white/90 disabled:cursor-default disabled:opacity-20 focus-visible:outline-2 focus-visible:outline-white/40"
      >
        <TbChevronLeft className="size-3.5" aria-hidden />
      </button>

      <div className="flex items-center gap-2.5 px-2" aria-live="polite">
        <span className="text-[11px] font-medium tabular-nums text-white/60">
          {formatIndex(current + 1)}
        </span>
        <div className="h-px w-20 overflow-hidden rounded-full bg-white/15" aria-hidden>
          <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-white/70" />
        </div>
        <span className="text-[11px] tabular-nums text-white/30">
          {formatIndex(total)}
        </span>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={current === total - 1}
        aria-label={NAVIGATION.next}
        className="flex size-7 cursor-pointer items-center justify-center rounded-full text-white/50 transition-colors duration-200 hover:text-white/90 disabled:cursor-default disabled:opacity-20 focus-visible:outline-2 focus-visible:outline-white/40"
      >
        <TbChevronRight className="size-3.5" aria-hidden />
      </button>
    </nav>
  )
}
