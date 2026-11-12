import { createContext, useContext } from 'react'

/**
 * Etapas internas de um slide (ex.: boxes dos slides 07–10, revelados um por clique).
 * A navegação do deck percorre as etapas antes de trocar de slide.
 * null = sem deck (mobile) — o componente se controla sozinho.
 */
export type SlideSteps = {
  step: number
  setStep: (step: number) => void
  /** true só no slide que está na tela — usado para parar animações em loop dos outros */
  active: boolean
}

export const SlideStepsContext = createContext<SlideSteps | null>(null)

export function useSlideSteps() {
  return useContext(SlideStepsContext)
}

/**
 * Como carregar as imagens dos slides.
 * No deck (desktop) elas precisam estar prontas antes do slide entrar — o navegador trata os
 * slides seguintes como fora da tela e o lazy deixaria a imagem aparecer depois da transição.
 * No mobile, que é uma página rolável normal, o lazy evita baixar todas as fotos de uma vez.
 */
export function useImageLoading(): 'eager' | 'lazy' {
  return useSlideSteps() === null ? 'lazy' : 'eager'
}
