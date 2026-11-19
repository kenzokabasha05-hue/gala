import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// iOS home-screen icon: the K mark on brand bronze (iOS rounds the corners itself).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#8a6a45',
          color: '#ffffff',
          fontSize: 120,
          fontWeight: 700,
          fontFamily: 'sans-serif',
        }}
      >
        K
      </div>
    ),
    size,
  )
}
