import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SlideVariant = 'light' | 'section'

type SlideProps = {
  id?: string
  variant?: SlideVariant
  className?: string
  children: ReactNode
}

const variantClasses: Record<SlideVariant, string> = {
  light: 'bg-background text-text',
  section: 'bg-background-section text-section-text',
}

export function Slide({ id, variant = 'light', className, children }: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        'flex w-full min-h-svh shrink-0 items-center md:w-screen md:h-svh',
        variantClasses[variant],
      )}
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-content flex-col gap-group px-slide-x py-slide-y md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg',
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}
