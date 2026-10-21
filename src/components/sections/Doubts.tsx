import { Reveal } from '@/components/ui/Reveal'
import { DarkBackground } from '@/components/ui/DarkBackground'

export function Doubts() {
  return (
    <section
      id="duvidas"
      className="relative h-svh w-full shrink-0 overflow-hidden md:w-screen"
    >
      <DarkBackground />

      <div className="flex h-full flex-col items-center justify-center px-slide-x md:px-slide-x-lg">
        <Reveal effect="zoom" delay={0.2}>
          <h2 className="font-display text-6xl leading-none font-semibold text-white md:text-9xl xl:text-[12rem]">
            Dúvidas?
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
