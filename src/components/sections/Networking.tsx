import { TbAffiliate, TbBriefcase, TbLock, TbUserCheck } from 'react-icons/tb'
import { NETWORKING } from '@/config/content'
import { FeatureSlide } from '@/components/ui/FeatureSlide'

const ICONS = {
  curated: TbUserCheck,
  closed: TbLock,
  network: TbAffiliate,
  business: TbBriefcase,
} as const

const items = NETWORKING.items.map((item) => ({ ...item, icon: ICONS[item.icon] }))

export function Networking() {
  return (
    <FeatureSlide
      id="grupo-de-networking"
      tagline={NETWORKING.tagline}
      title={NETWORKING.title}
      highlight={NETWORKING.highlight}
      items={items}
      image={NETWORKING.image}
      imageClassName="object-[55%_center]"
      imageSide="right"
    />
  )
}
