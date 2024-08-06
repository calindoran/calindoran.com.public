import { CustomMDX } from '@/app/components/CustomMDX'
import { getPosts } from '@/app/lib/getPosts'
import { IconLoader3 } from '@tabler/icons-react'
import { format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export default async function Post({ params }) {
  let data = await getPosts().then((res) =>
    res.find((post) => post.slug === params.slug),
  )

  if (!data) {
    notFound()
  }

  return (
    <section className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PostPosting',
              headline: data.metadata.title,
              datePublished: data.metadata.date,
              dateModified: data.metadata.date,
              description: data.metadata.excerpt,
              url: `https://calindoran.com/posts/${data.slug}`,
              author: {
                '@type': 'Person',
                name: 'Calin Doran',
              },
            }),
          }}
        />
        <h1 className="mb-2 text-4xl text-gray-700 dark:text-gray-200">
          {data.metadata.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {'Calin Doran / '}
              {format(parseISO(data.metadata.date), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>

        <div className="w-full prose dark:prose-dark max-w-none">
          <div className="w-full">
            <article>
              <CustomMDX source={data.content} />
            </article>
          </div>
        </div>
      </Suspense>
    </section>
  )
}

export async function generateStaticParams() {
  let data = await getPosts().then((res) => res)
  return data.map((post) => ({
    slug: post.slug,
  }))
}
