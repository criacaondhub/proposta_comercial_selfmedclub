// Fundo escuro premium: degradê azul + ruído (usado na capa e em slides de destaque)
export function DarkBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-cover-gradient" />
      <div className="absolute inset-0 bg-grain" />
    </>
  )
}
