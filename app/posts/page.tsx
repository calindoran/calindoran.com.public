import { IconLoader3 } from '@tabler/icons-react'
import { Suspense } from 'react'
import Post from '../components/Post'
import { getPosts } from '../lib/getPosts'

export default async function Posts() {
  let data = await getPosts().then((res) => res)

  return (
    <section>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-8 mx-auto border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl text-cd-fg">Posts</h1>
        <h2 className="my-4 text-1xl text-cd-fg">
          Check out some of my posts below!
        </h2>
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
          <div className="flex flex-col gap-4">
            {data
              .sort((a, b) => {
                if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
                  return -1
                }
                return 1
              })
              .map((post) => (
                <Post key={post.slug} post={post} />
              ))}
          </div>
        </Suspense>
      </div>
    </section>
  )
}
