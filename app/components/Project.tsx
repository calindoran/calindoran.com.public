'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ProjectType } from '../types/generic'
import CustomDate from './CustomDate'

export default function Project(props: ProjectType) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Link
      href={`${props.href}`}
      scroll
      className="flex flex-col sm:flex-row rounded-lg border-2 border-accent-2 p-4 transition-all duration-300 hover:scale-[1.01] hover:bg-accent-1"
    >
      <div
        className={classNames(
          'overflow-hidden flex content-baseline rounded-lg flex-1',
          isLoading ? 'animate-pulse' : '',
        )}
      >
        <Image
          className={classNames(
            'duration-700 ease-in-out flex-1',
            isLoading
              ? 'scale-[1.02] blur-xl grayscale'
              : 'scale-100 blur-0 grayscale-0',
          )}
          src={props.image ?? ''}
          alt={props.title}
          loading="lazy"
          quality={80}
          width={0}
          height={0}
          sizes="100vw"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="flex-1 px-4 py-4 md:py-2 md:px-4">
        <h4 className="text-2xl font-medium tracking-tight text-cd-fg md:text-2xl">
          {props.title}
        </h4>
        <p className="flex items-center gap-2 my-2 text-sm text-accent-6 font-small">
          {<CustomDate dateString={props.date} />}
        </p>
        <p className="text-accent-7">{props.description}</p>
      </div>
    </Link>
  )
}
