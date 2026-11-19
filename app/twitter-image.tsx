import { renderShareImage } from '@/lib/share-image'

export const alt = 'Lights On at Kigali Source Company, Friday 12 February 2027, 6pm until late'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function TwitterImage() {
  return renderShareImage()
}
