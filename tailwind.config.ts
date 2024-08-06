import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cd-fg': 'var(--cd-fg)',
        'cd-bg': 'var(--cd-bg)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'theme-1': 'var(--theme-1)',
        'theme-2': 'var(--theme-2)',
        'theme-3': 'var(--theme-3)',
        'theme-4': 'var(--theme-4)',
        'theme-5': 'var(--theme-5)',
        'theme-6': 'var(--theme-6)',
        'theme-7': 'var(--theme-7)',
        'theme-8': 'var(--theme-8)',
        'theme-9': 'var(--theme-9)',
        'theme-10': 'var(--theme-10)',
        'theme-11': 'var(--theme-11)',
        'theme-12': 'var(--theme-12)',
        'scroll-bar-1': 'var(--scroll-bar-1)',
        'scroll-bar-2': 'var--scroll-bar-2)',
      },
      fontFamily: {
        default: ['Roboto', 'var(--font-inter)', 'var(--font-noto-sans-tc)'],
        code: [
          'var(--font-fira-code)',
          'var(--font-inter)',
          'var(--font-noto-sans-tc)',
        ],
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              textDecoration: 'none',
              color: theme('colors.theme-8'),
              '&:hover': {
                color: theme('colors.theme-11'),
              },
              code: { color: theme('colors.theme-4') },
            },
            'h2, h3, h4, h5, h6': {
              position: 'relative',
              scrollMarginTop: '128px',

              '& a::before': {
                content: 'none !important',
              },
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            code: { color: theme('colors.pink.500') },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              textDecoration: 'none',
              color: theme('colors.theme-8'),
              '&:hover': {
                color: theme('colors.theme-11'),
              },
              code: { color: theme('colors.theme-4') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2, h3, h4, h5, h6': {
              position: 'relative',
              scrollMarginTop: '128px',

              '& a::before': {
                content: 'none !important',
              },
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {},
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
}
export default config
