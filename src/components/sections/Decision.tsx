import { Reveal } from '@/components/ui/Reveal'

export function Decision() {
  return (
    <section
      id="decisao"
      className="relative h-svh w-full shrink-0 overflow-hidden bg-black md:w-screen"
    >
      <div className="flex h-full flex-col items-center justify-center px-slide-x text-center md:px-slide-x-lg">
        <Reveal effect="rise">
          <h2 className="font-display text-5xl font-semibold text-balance text-white md:text-6xl xl:text-7xl">
            Para você tomar essa{' '}
            <span className="text-accent-light">decisão</span>{' '}
            agora
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
