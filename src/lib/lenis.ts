import Lenis from 'lenis'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// No desktop o deck é travado (h-svh, sem rolagem): o Lenis só manteria um requestAnimationFrame
// rodando a cada frame sem nada para fazer, roubando tempo das transições. Ele só entra no
// layout mobile, onde os slides viram uma coluna rolável.
const isDeck = window.matchMedia('(min-width: 768px)').matches

export const lenis = isDeck
  ? null
  : new Lenis({
      autoRaf: true,
      smoothWheel: !prefersReducedMotion,
    })
