'use client'

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import PostCard from './components/PostCard'
import ProjectCard from './components/ProjectCard'
import { ProjectDataLinks } from './projects/ProjectDataLinks'

const Links = [
  {
    icon: <IconBrandGithub size={28} />,
    href: 'https://www.github.com/calindoran',
  },
  {
    icon: <IconBrandLinkedin size={28} />,
    href: 'https://www.linkedin.com/in/calin-doran/',
  },
]

export default function Home() {
  const [isLoading, setLoading] = useState(true)
  let projects = ProjectDataLinks

  return (
    <section>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-8 mx-auto border-gray-200 dark:border-gray-700">
        <div className="flex flex-col-reverse items-start mb-6 sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="flex flex-col gap-2 mb-12 sm:flex-row">
              <span className="text-4xl text-cd-fg">{"Hey, I'm"}</span>{' '}
              <span className="text-4xl">
                <span className="font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#11998e] to-[#38ef7d] animate-text">
                  {'Calin Doran'}
                </span>{' '}
                ✌️
              </span>
            </h1>
            <p className="mb-4 text-cd-fg">
              I'm a software engineer, musician and all around optimist from
              Ireland. I currently work at{' '}
              <Link href="https://intellync.com/">
                <span className="font-semibold">Intellync</span>
              </Link>{' '}
              as a frontend engineer, where I focus on building features with
              some quality{' '}
              <Link href={'https://playwright.dev/'}>
                <span className="font-semibold">testing</span>
              </Link>
              .
            </p>
            <p className="mb-8 text-cd-fg">
              So, check out my site and{' '}
              <Link href="/about">
                <span className="font-semibold">get in touch</span>
              </Link>{' '}
              if you have any query's thanks!
            </p>
            <div className="flex gap-6 my-2">
              {Links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={classNames(
                    'transform hover:scale-[1.2] transition-all',
                    'rounded-xl p-1',
                  )}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <div
              className={classNames(
                'overflow-hidden flex content-baseline rounded-lg',
                isLoading ? 'animate-pulse' : '',
              )}
            >
              <Image
                className={classNames(
                  'duration-700 ease-in-out',
                  isLoading
                    ? 'scale-[1.02] blur-xl grayscale'
                    : 'scale-100 blur-0 grayscale-0',
                )}
                src="/avatar.png"
                alt="logo-calindoran.com"
                loading="lazy"
                quality={60}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 176, height: 'auto' }}
                onLoad={() => setLoading(false)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-12">
          <h2 className="mb-8 text-3xl text-cd-fg">Projects</h2>
          <div className="flex flex-col gap-8">
            {projects.slice(0, 3).map((project) => {
              return <ProjectCard key={project.id} {...project} />
            })}
          </div>
        </div>
        <div className="flex flex-col w-full mt-12">
          <h2 className="mb-8 text-3xl text-cd-fg">Posts</h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <PostCard
              key={'new-website'}
              id={'new-website'}
              title={'New Website built with Nextjs 14!'}
              date={'2023-11-26'}
              gradient={'from-[#2e3192] to-[#1bffff]'}
            />
            <PostCard
              key={'pre-rendering'}
              id={'pre-rendering'}
              title={'Two Forms of Pre-rendering'}
              date={'2023-01-01'}
              gradient={'from-[#1bffff] to-[#11998e]'}
            />
            <PostCard
              key={'ssg-ssr'}
              id={'new-website'}
              title={
                'When to use Static Generation v.s. Server-side Rendering.'
              }
              date={'2023-01-02'}
              gradient={'from-[#11998e] to-[#38ef7d]'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
