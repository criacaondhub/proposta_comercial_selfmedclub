// Pinta com a cor de destaque as palavras indicadas dentro do texto
export function highlightWords(text: string, words: readonly string[] | undefined, accentClass: string) {
  if (!words?.length) return text

  const escaped = words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`)

  return text.split(pattern).map((part, index) =>
    words.includes(part) ? (
      <span key={index} className={accentClass}>
        {part}
      </span>
    ) : (
      part
    ),
  )
}
