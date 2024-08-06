import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Calin Doran',
    short_name: 'Calin Doran',
    description: 'Engineer, musician and all around optimist from Ireland',
    start_url: '/',
    id: '/',
    display: 'standalone',
    theme_color: '#121212',
    background_color: '#121212',
    icons: [
      {
        src: '/static/favicons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/static/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/static/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/static/favicons/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        src: '/static/favicons/safari-pinned-tab.svg',
        sizes: 'any',
      },
    ],
  }
}
