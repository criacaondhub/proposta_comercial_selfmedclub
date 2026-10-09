import { HorizontalScroll } from '@/components/ui/HorizontalScroll'
import { Slide } from '@/components/ui/Slide'

// ⚠️ Slides provisórios para validar a estrutura — serão substituídos pelas seções reais
function App() {
  return (
    <main>
      <HorizontalScroll>
        <Slide>
          <h1 className="text-5xl font-semibold text-text-heading">Slide 1 — claro</h1>
        </Slide>
        <Slide variant="section">
          <h2 className="text-5xl font-semibold text-section-heading">Slide 2 — azul</h2>
        </Slide>
        <Slide>
          <h2 className="text-5xl font-semibold text-text-heading">Slide 3 — claro</h2>
        </Slide>
      </HorizontalScroll>
    </main>
  )
}

export default App
