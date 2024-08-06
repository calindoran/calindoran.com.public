import { IconArrowUpRight } from '@tabler/icons-react'
import classNames from 'classnames'
import Link from 'next/link'
import CustomDate from './CustomDate'

export default function PostCard({
  id,
  title,
  date,
  gradient,
}: {
  id: string
  title: string
  date: string
  gradient: string
}) {
  return (
    <Link
      href={`/posts/${id}`}
      className={classNames(
        'transform hover:scale-[1.01] transition-all bg-gradient-to-b',
        'rounded-xl w-full md:w-1/3 md:bg-gradient-to-r p-1',
        gradient,
      )}
    >
      <div className="flex flex-col justify-between h-full p-4 rounded-lg bg-cd-bg dark:bg-cd-bg">
        <div className="flex flex-row justify-between align-top">
          <h4 className="text-lg font-medium tracking-tight text-cd-fg md:text-lg sm:mb-10 ">
            {title}
          </h4>
          <p className="text-lg">
            <IconArrowUpRight className="relative inline-block -top-px" />
          </p>
        </div>
        <p className="flex items-center gap-2 my-2 text-sm text-accent-6 font-small">
          {<CustomDate dateString={date} />}
        </p>
      </div>
    </Link>
  )
}
