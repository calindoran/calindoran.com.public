export type Metadata = {
  title: string
  date: string
  excerpt: string
  contentHtml?: string
}

export type PostType = {
  post: {
    metadata: Metadata
    slug: string
    content: string
  }
}

export type ProjectType = {
  id?: string
  title: string
  date: string
  description: string
  href: string
  image?: string
  iconName?: string
  contentHtml?: string
}
