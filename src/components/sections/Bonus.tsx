import { Reveal } from '@/components/ui/Reveal'

export function Bonus() {
  return (
    <section
      id="bonus"
      className="relative h-svh w-full shrink-0 overflow-hidden bg-background-dark md:w-screen"
    >
      <div className="flex h-full flex-col items-center justify-center gap-6 px-slide-x text-center md:gap-8 md:px-slide-x-lg">
        <Reveal effect="rise">
          <h1 className="font-display text-5xl font-semibold text-accent-light text-balance md:text-7xl xl:text-8xl">
            Não acaba aqui…
          </h1>
        </Reveal>
        <Reveal effect="rise" delay={0.25}>
          <h2 className="max-w-3xl font-heading text-xl font-semibold leading-snug text-white text-balance md:text-2xl xl:text-3xl">
            Os membros fundadores receberão{' '}
            <span className="text-accent-light">BÔNUS EXCLUSIVOS</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
