import { IconArrowUpRight } from '@tabler/icons-react'
import classNames from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = {
  href: string
  icon?: boolean
  animation?: boolean
  nextLinkProps?: Omit<NextLinkProps, 'href'>
} & React.ComponentPropsWithRef<'a'>

const Link = (props: LinkProps) => {
  const {
    href,
    children,
    icon = true,
    animation = true,
    className,
    nextLinkProps,
    ...rest
  } = props

  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        className={classNames(
          'relative',
          {
            ['before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:cd-fg before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100']:
              animation,
          },
          className,
        )}
        {...nextLinkProps}
        {...rest}
      >
        {children}
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return (
      <NextLink
        href={href}
        className={classNames(
          'relative',
          {
            ['before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:cd-fg before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100']:
              animation,
          },
          className,
        )}
        {...rest}
      >
        {children}
      </NextLink>
    )
  }

  return (
    <NextLink
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={classNames(
        'relative',
        {
          ['before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:cd-fg before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100']:
            animation,
        },
        className,
      )}
      {...rest}
    >
      {children}
      {icon && (
        <span>
          <IconArrowUpRight
            size={16}
            className="relative inline-block -top-px"
          />
        </span>
      )}
    </NextLink>
  )
}

export default Link
