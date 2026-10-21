import { TbBrandWhatsapp, TbGift, TbUserCheck } from 'react-icons/tb'
import { NETWORKING } from '@/config/content'
import { FeatureSlide } from '@/components/ui/FeatureSlide'

const ICONS = {
  curated: TbUserCheck,
  community: TbBrandWhatsapp,
  referral: TbGift,
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
