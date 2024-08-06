'use client'

import { IconArrowUpRight } from '@tabler/icons-react'
import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper'

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null)

    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    })

    setLocalStorage('cookie_consent', cookieConsent)
  }, [cookieConsent])

  return (
    <div
      className={`bg-cd-bg dark:bg-cd-bg my-10 mx-auto max-w-max md:max-w-screen-sm
                  fixed bottom-0 left-0 right-0
                  ${cookieConsent !== null ? 'hidden' : 'flex'} px-3
                  md:px-4 py-3 justify-between items-center flex-col 
                  sm:flex-row p-4 gap-4 rounded-lg border-2 border-accent-2`}
    >
      <div className="text-center">
        <p>
          <Link href="/cookies">
            <span className="font-semibold">Cookies</span>{' '}
            <IconArrowUpRight
              size={16}
              className="relative inline-block -top-px"
            />
          </Link>{' '}
          are used on my site for analytics and preferences.
        </p>
      </div>

      <div className={`flex gap-2`}>
        <button
          className={classNames(
            'transform hover:scale-[1.2] transition-all',
            'rounded-xl p-1',
          )}
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className={classNames(
            'transform hover:scale-[1.2] transition-all',
            'rounded-xl p-1',
          )}
          onClick={() => setCookieConsent(true)}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
