import Link from 'next/link'
import { PostType } from '../types/generic'
import CustomDate from './CustomDate'

export default function Post(props: PostType) {
  return (
    <Link
      key={props.post.slug}
      href={`/posts/${props.post.slug}`}
      className="flex w-full flex-1 items-center justify-start rounded-lg border-2 border-accent-2 p-4 transition-all duration-300 hover:scale-[1.01] sm:px-6"
    >
      <div className="flex-1 px-2 py-2">
        <h4 className="text-2xl font-medium tracking-tight text-cd-fg md:text-2xl">
          {props.post.metadata.title}
        </h4>
        <p className="flex items-center gap-2 my-2 text-sm text-accent-6 font-small">
          {<CustomDate dateString={props.post.metadata.date} />}
        </p>
        <p className="my-2 text-accent-7">{props.post.metadata.excerpt}</p>
      </div>
    </Link>
  )
}
