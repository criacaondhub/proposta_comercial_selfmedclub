// Esmaecido em cascata: cada letra surge suavemente, uma após a outra
export const FADE_LETTER_MS = 1100 // duração do esmaecido de cada letra
export const FADE_STAGGER_MS = 24 // intervalo entre o início de uma letra e a próxima

export type Segment = { chars: string[]; highlight: boolean }

/** Remove os *asteriscos* de destaque */
export const plainText = (text: string) => text.replace(/\*/g, '')

/** Divide o texto em trechos normais e trechos entre *asteriscos* */
export const parseSegments = (text: string): Segment[] =>
  text
    .split(/(\*[^*]+\*)/)
    .filter(Boolean)
    .map((part) => {
      const highlight = part.startsWith('*') && part.endsWith('*')
      return { chars: Array.from(highlight ? part.slice(1, -1) : part), highlight }
    })

/** Duração total (s) até a última letra aparecer — para encadear animações depois do texto */
export function fadeTextDuration(text: string) {
  const length = Array.from(plainText(text)).length
  return ((length - 1) * FADE_STAGGER_MS + FADE_LETTER_MS) / 1000
}
