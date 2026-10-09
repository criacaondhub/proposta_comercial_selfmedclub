import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SLIDE_THEME, SlideVariantContext, type SlideVariant } from '@/lib/slide-theme'

type SlideProps = {
  id?: string
  variant?: SlideVariant
  className?: string
  /** Camada decorativa atrás do conteúdo (degradês, texturas) */
  background?: ReactNode
  children: ReactNode
}

export function Slide({ id, variant = 'light', className, background, children }: SlideProps) {
  const theme = SLIDE_THEME[variant]

  return (
    <SlideVariantContext.Provider value={variant}>
      <section
        id={id}
        className={cn(
          'relative isolate flex w-full min-h-svh shrink-0 items-center overflow-hidden md:w-screen md:h-svh',
          theme.background,
          theme.text,
        )}
      >
        {background && (
          <div className="absolute inset-0 -z-10" aria-hidden>
            {background}
          </div>
        )}
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
