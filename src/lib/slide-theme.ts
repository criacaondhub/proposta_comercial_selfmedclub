import { createContext, useContext } from 'react'

export type SlideVariant = 'light' | 'section'

export const SLIDE_THEME = {
  light: {
    background: 'bg-background',
    heading: 'text-text-heading',
    text: 'text-text',
    muted: 'text-text-muted',
    accent: 'text-accent',
    accentBg: 'bg-accent text-accent-foreground',
    card: 'bg-surface border-border',
    divider: 'bg-border',
    button: 'bg-accent text-accent-foreground hover:bg-accent-hover focus-visible:outline-accent',
  },
  section: {
    background: 'bg-background-section',
    heading: 'text-section-heading',
    text: 'text-section-text',
    muted: 'text-section-muted',
    accent: 'text-section-accent',
    accentBg: 'bg-section-accent text-section-accent-foreground',
    card: 'bg-surface-section border-border-section',
    divider: 'bg-border-section',
    button:
      'bg-section-accent text-section-accent-foreground hover:bg-section-accent-hover focus-visible:outline-section-accent',
  },
} as const

export const SlideVariantContext = createContext<SlideVariant>('light')

export function useSlideTheme() {
  return SLIDE_THEME[useContext(SlideVariantContext)]
}
