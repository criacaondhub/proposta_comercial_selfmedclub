import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SLIDE_THEME, SlideVariantContext, type SlideVariant } from '@/lib/slide-theme'

type SlideProps = {
  id?: string
  variant?: SlideVariant
  className?: string
  children: ReactNode
}

export function Slide({ id, variant = 'light', className, children }: SlideProps) {
  const theme = SLIDE_THEME[variant]

  return (
    <SlideVariantContext.Provider value={variant}>
      <section
        id={id}
        className={cn(
          'flex w-full min-h-svh shrink-0 items-center md:w-screen md:h-svh',
          theme.background,
          theme.text,
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
    </SlideVariantContext.Provider>
  )
}
