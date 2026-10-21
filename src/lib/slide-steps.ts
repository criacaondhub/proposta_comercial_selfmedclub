import { createContext, useContext } from 'react'

/**
 * Etapas internas de um slide (ex.: boxes dos slides 07–10, revelados um por clique).
 * A navegação do deck percorre as etapas antes de trocar de slide.
 * null = sem deck (mobile) — o componente se controla sozinho.
 */
export type SlideSteps = {
  step: number
  setStep: (step: number) => void
}

export const SlideStepsContext = createContext<SlideSteps | null>(null)

export function useSlideSteps() {
  return useContext(SlideStepsContext)
}
