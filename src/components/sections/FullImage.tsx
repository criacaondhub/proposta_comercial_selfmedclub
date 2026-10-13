type FullImageProps = {
  id: string
  src: string
  alt?: string
}

export function FullImage({ id, src, alt = '' }: FullImageProps) {
  return (
    <section id={id} className="relative h-svh w-full shrink-0 overflow-hidden md:w-screen">
      <img
        src={src}
        alt={alt}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </section>
  )
}
