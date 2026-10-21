import { TbCalendarStar, TbGlassFull, TbHeartHandshake, TbMapPin } from 'react-icons/tb'
import { EXPERIENCES } from '@/config/content'
import { FeatureSlide } from '@/components/ui/FeatureSlide'

const ICONS = {
  events: TbCalendarStar,
  places: TbMapPin,
  dinner: TbGlassFull,
  connections: TbHeartHandshake,
} as const

const items = EXPERIENCES.items.map((item) => ({ ...item, icon: ICONS[item.icon] }))

export function Experiences() {
  return (
    <FeatureSlide
      id="experiencias-presenciais"
      tagline={EXPERIENCES.tagline}
      title={EXPERIENCES.title}
      highlight={EXPERIENCES.highlight}
      items={items}
      image={EXPERIENCES.image}
      imageClassName="object-[60%_center]"
      imageSide="right"
    />
  )
}
