import { TbBulb, TbCalendarEvent, TbMessageCircle, TbVideo } from 'react-icons/tb'
import { ONLINE_MENTORING } from '@/config/content'
import { FeatureSlide } from '@/components/ui/FeatureSlide'

const ICONS = {
  live: TbVideo,
  schedule: TbCalendarEvent,
  questions: TbMessageCircle,
  insights: TbBulb,
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
