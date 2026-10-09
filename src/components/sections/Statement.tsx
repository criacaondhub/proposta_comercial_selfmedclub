import { motion } from 'framer-motion'
import { STATEMENT } from '@/config/content'

// Slide só de imagem. Entrada: a câmera "assenta", com um zoom lento de fora para dentro enquanto a imagem clareia
export function Statement() {
  return (
    <section
      id="manifesto"
      className="relative w-full shrink-0 overflow-hidden bg-background-section md:h-svh md:w-screen"
    >
      <motion.img
        src={STATEMENT.image.src}
        alt={STATEMENT.image.alt}
        width={STATEMENT.image.width}
        height={STATEMENT.image.height}
        decoding="async"
        // Mobile: imagem inteira na largura da tela (o texto está no centro e seria cortado em retrato)
        // Desktop: tela cheia, cortando as bordas de céu
        className="block h-auto w-full md:h-full md:object-cover"
        initial={{ opacity: 0, scale: 1.15, filter: 'brightness(0.6)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'brightness(1)' }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </section>
  )
}
