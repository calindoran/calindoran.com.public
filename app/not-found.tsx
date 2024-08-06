import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-8 mx-auto border-gray-200 dark:border-gray-700">
        <h1 className="mb-2 text-4xl text-gray-700 dark:text-gray-200">
          404 – Unavailable
        </h1>
        <div className="mb-8 leading-6 prose dark:prose-dark">
          <p className="mb-8">
            Wow! It seems you've found something that used to exist, or you
            spelled something wrong. Can you double check that URL?
          </p>
          <Link
            href="/"
            className="flex items-center gap-4 my-2 text-lg font-medium group"
          >
            <span>Back to Safety!</span>
            <IconArrowRight className="w-4 h-4 transition duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
