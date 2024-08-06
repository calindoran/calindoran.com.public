import type { Metadata } from 'next'
import CookieBanner from './components/CookieBanner'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import { Navbar } from './components/Navbar'
import NextThemeProvider from './provider/NextThemeProvider'
import './styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://calindoran.com'),
  title: {
    default: 'Calin Doran',
    template: '%s | Calin Doran',
  },
  description: 'Engineer, musician and all around optimist from Ireland',
  openGraph: {
    title: 'Calin Doran',
    description: 'Engineer, musician and all around optimist from Ireland',
    url: 'https://calindoran.com',
    siteName: 'Calin Doran',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Calin Doran',
    description: 'Software Engineer // Musician',
    creator: '@calindoran',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'dark'} style={{ colorScheme: 'dark' }}>
      <GoogleAnalytics GA_MEASUREMENT_ID="" />
      <body className="flex flex-col justify-center px-8 overflow-x-hidden antialiased font-default bg-cd-bg dark:bg-cd-bg">
        <NextThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
        </NextThemeProvider>
      </body>
    </html>
  )
}
