'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function useGoogleEventLogger(pageTitle: string, eventCategory: string) {
  const pathname = usePathname()
  useEffect(() => {
    window.gtag('event', eventCategory, {
      page_title: pageTitle,
      page_path: pathname,
      send_page_view: true,
      event_category: eventCategory,
    })
  }, [eventCategory, pageTitle, pathname])
}
