type WordMark = { words: readonly string[] | undefined; className: string }

// Envolve as palavras indicadas dentro do texto num <span> com a classe do grupo (ex.: cor de destaque, riscado)
export function markWords(text: string, marks: readonly WordMark[]) {
  const words = marks.flatMap((mark) => mark.words ?? [])
  if (!words.length) return text

  const escaped = words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`)

  return text.split(pattern).map((part, index) => {
    const mark = marks.find((entry) => entry.words?.includes(part))
    return mark ? (
      <span key={index} className={mark.className}>
        {part}
      </span>
    ) : (
      part
    )
  })
}
