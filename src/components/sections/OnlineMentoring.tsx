import { TbAward, TbCalendarStar, TbGlassFull, TbHeartHandshake } from 'react-icons/tb'
import { ONLINE_MENTORING } from '@/config/content'
import { FeatureSlide } from '@/components/ui/FeatureSlide'

const ICONS = {
  events: TbCalendarStar,
  unique: TbAward,
  dinner: TbGlassFull,
  together: TbHeartHandshake,
} as const

const items = ONLINE_MENTORING.items.map((item) => ({ ...item, icon: ICONS[item.icon] }))

export function OnlineMentoring() {
  return (
    <FeatureSlide
      id="mentorias-online"
      tagline={ONLINE_MENTORING.tagline}
      title={ONLINE_MENTORING.title}
      highlight={ONLINE_MENTORING.highlight}
      items={items}
      image={ONLINE_MENTORING.image}
      imageClassName="object-[10%_center]"
    />
  )
}
