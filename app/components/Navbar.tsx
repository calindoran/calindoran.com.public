'use client'

import { IconLoader3 } from '@tabler/icons-react'
import classNames from 'classnames'
import { LayoutGroup } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

export const NavItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/posts': {
    name: 'Posts',
  },
}

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <aside className="-ml-[8px] mb-4 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16 bg-opacity-60 dark:text-gray-100"
            id="nav"
          >
            <div className="flex flex-row pr-10 space-x-0">
              <Suspense
                fallback={
                  <>
                    <div className="animate-spin">
                      <IconLoader3 />
                    </div>
                    <p>Loading...</p>
                  </>
                }
              >
                {Object.entries(NavItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />
                })}
              </Suspense>
            </div>
            <div>
              <Suspense
                fallback={
                  <>
                    <div className="animate-spin">
                      <IconLoader3 />
                    </div>
                    <p>Loading...</p>
                  </>
                }
              >
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className={classNames(
                    'transform hover:scale-[1.2] transition-all',
                    'rounded-xl p-1',
                  )}
                  onClick={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                  }
                >
                  {mounted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    >
                      {resolvedTheme === 'dark' ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      )}
                    </svg>
                  )}
                </button>
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}

function NavItem({ path, name }) {
  let pathname = usePathname() || '/'
  if (pathname.includes('/posts/')) {
    pathname = '/posts'
  }
  let isActive = path === pathname

  return (
    <Link
      key={path}
      href={path}
      className={classNames(
        'transition-all text-accent-6 hover:text-cd-fg flex align-middle',
        {
          'text-cd-fg': isActive,
        },
      )}
    >
      <span className="relative px-2 py-1">{name}</span>
    </Link>
  )
}
