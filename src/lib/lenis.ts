import Lenis from 'lenis'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const lenis = new Lenis({
  autoRaf: true,
  smoothWheel: !prefersReducedMotion,
})
