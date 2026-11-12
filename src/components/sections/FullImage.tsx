import { useImageLoading } from '@/lib/slide-steps'

type FullImageProps = {
  id: string
  src: string
  alt?: string
  fit?: 'cover' | 'contain'
}

export function FullImage({ id, src, alt = '', fit = 'cover' }: FullImageProps) {
  const loading = useImageLoading()

  return (
    <section id={id} className="relative h-svh w-full shrink-0 overflow-hidden bg-black md:w-screen">
      <img
        src={src}
        alt={alt}
        decoding="async"
        fetchPriority="low"
        loading={loading}
        className={`absolute inset-0 h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      />
    </section>
  )
}
