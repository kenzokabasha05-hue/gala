import { ImageResponse } from 'next/og'

// Shared 1200×630 link-preview image for Open Graph and Twitter cards.
// Mirrors the poster block: brand bronze, white type, the event essentials.
export const shareImageSize = { width: 1200, height: 630 }
export const shareImageAlt = 'Lights On at Kigali Source Company, Friday 12 February 2027, 6pm until late'

export function renderShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#8a6a45',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, letterSpacing: 4, fontWeight: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                width: 52,
                height: 52,
                borderRadius: 26,
                background: '#ffffff',
                color: '#8a6a45',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                letterSpacing: 0,
              }}
            >
              K
            </div>
            KIGALI SOURCE
          </div>
          <div style={{ display: 'flex' }}>EST. 2010</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 168, fontWeight: 700, letterSpacing: -10, lineHeight: 0.9 }}>LIGHTS ON</div>
          <div style={{ marginTop: 28, fontSize: 38, opacity: 0.92 }}>
            Every light in the shop switched on at once.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, fontWeight: 600 }}>
          <div style={{ display: 'flex' }}>Fri 12 Feb 2027 · 6pm until late</div>
          <div style={{ display: 'flex' }}>KN 76 St, Kigali</div>
        </div>
      </div>
    ),
    shareImageSize,
  )
}
