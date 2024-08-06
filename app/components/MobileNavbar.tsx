'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from '../styles/mobile-menu.module.css'
import { NavItems } from './Navbar'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={classNames(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      <CSSTransition
        in={isMenuOpen}
        timeout={200}
        classNames={{
          enter: styles.menuEnter,
          enterActive: styles.menuEnterActive,
          exit: styles.menuExit,
          exitActive: styles.menuExitActive,
        }}
        unmountOnExit
      >
        <ul
          className={classNames(
            styles.menu,
            'flex flex-col absolute bg-cd-bg dark:bg-cd-bg',
            isMenuOpen && styles.menuRendered,
          )}
        >
          {Object.entries(NavItems).map(([path, { name }]) => {
            return <MobileNavItem key={path} path={path} name={name} />
          })}
        </ul>
      </CSSTransition>
    </>
  )
}

function MobileNavItem({ path, name }: { path: string; name: string }) {
  return (
    <li
      className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
      style={{ transitionDelay: '150ms' }}
    >
      <Link key={path} href={path} className={'flex w-auto pb-4'}>
        {name}
      </Link>
    </li>
  )
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-5 h-5 text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-5 h-5 text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
