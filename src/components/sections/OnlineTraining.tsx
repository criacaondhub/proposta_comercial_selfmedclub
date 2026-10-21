import { TbDeviceMobile, TbDeviceTv, TbRoute, TbUsersGroup } from 'react-icons/tb'
import { ONLINE_TRAINING } from '@/config/content'
import { FeatureSlide } from '@/components/ui/FeatureSlide'

const ICONS = {
  streaming: TbDeviceTv,
  tracks: TbRoute,
  app: TbDeviceMobile,
  guests: TbUsersGroup,
} as const

const items = ONLINE_TRAINING.items.map((item) => ({ ...item, icon: ICONS[item.icon] }))

export function OnlineTraining() {
  return (
    <FeatureSlide
      id="formacao-online"
      tagline={ONLINE_TRAINING.tagline}
      title={ONLINE_TRAINING.title}
      highlight={ONLINE_TRAINING.highlight}
      items={items}
      image={ONLINE_TRAINING.image}
    />
  )
}
