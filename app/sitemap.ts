import { getPosts } from './lib/getPosts'
import { writeFileSync } from 'fs'

// generate sitemap.xml with nextjs
export default async function sitemap() {
  let posts = await getPosts().then((res) =>
    res.map((post) => ({
      url: `https://calindoran.com/posts/${post.slug}`,
      lastModified: post.metadata.date,
    })),
  )

  let routes = ['', '/home', '/projects', '/posts', '/about', '/cookies'].map(
    (route) => ({
      url: `https://calindoran.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  )

  return [...routes, ...posts]
}

// manually generate sitemap.xml
// create a node script in package.json to run this
// "generate-sitemap": "node app/sitemap.ts"
export async function generateSitemap() {
  let posts = await getPosts().then((res) =>
    res.map((post) => ({
      url: `https://calindoran.com/posts/${post.slug}`,
      lastModified: post.metadata.date,
    })),
  )

  let routes = ['', '/home', '/projects', '/posts', '/about', '/cookies'].map(
    (route) => ({
      url: `https://calindoran.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  )

  let pages = [...routes, ...posts]

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
                <loc>${page.url}</loc>
            </url>
          `
        })
        .join('')}
  </urlset>
  `

  // eslint-disable-next-line no-sync
  return writeFileSync('public/sitemap.xml', sitemap)
}
