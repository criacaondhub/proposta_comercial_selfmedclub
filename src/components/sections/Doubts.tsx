import { Reveal } from '@/components/ui/Reveal'
import { DarkBackground } from '@/components/ui/DarkBackground'

export function Doubts() {
  return (
    <section
      id="duvidas"
      className="relative h-svh w-full shrink-0 overflow-hidden md:w-screen"
    >
      <DarkBackground />

      <div className="flex h-full flex-col items-center justify-center gap-6 px-slide-x md:px-slide-x-lg">
        <Reveal effect="rise">
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            <span className="h-px w-8 bg-white/30 md:w-12" aria-hidden />
            Dúvidas
            <span className="h-px w-8 bg-white/30 md:w-12" aria-hidden />
          </p>
        </Reveal>
        <Reveal effect="zoom" delay={0.2}>
          <h2 className="font-display text-7xl font-semibold tracking-widest text-white md:text-9xl xl:text-[12rem]">
            ???
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
