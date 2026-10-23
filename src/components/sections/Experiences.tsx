import { TbAward, TbCalendarStar, TbGlassFull, TbHeartHandshake } from 'react-icons/tb'
import { EXPERIENCES } from '@/config/content'
import { FeatureSlide } from '@/components/ui/FeatureSlide'

const ICONS = {
  events: TbCalendarStar,
  unique: TbAward,
  dinner: TbGlassFull,
  together: TbHeartHandshake,
} as const

const items = EXPERIENCES.items.map((item) => ({ ...item, icon: ICONS[item.icon] }))

export function Experiences() {
  return (
    <FeatureSlide
      id="experiencias-presenciais"
      tagline={EXPERIENCES.tagline}
      title={EXPERIENCES.title}
      highlight={EXPERIENCES.highlight}
      strike={EXPERIENCES.strike}
      items={items}
      image={EXPERIENCES.image}
      // Foto larga: os quatro integrantes ficam na metade direita — coluna maior e foto alinhada à direita
      imageClassName="object-[96%_center]"
      imageSide="right"
      wideImage
    />
  )
}
