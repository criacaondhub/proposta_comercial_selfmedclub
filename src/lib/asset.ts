// Prefixa caminhos de public/ com o base do Vite (o site é publicado em subpasta)
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
