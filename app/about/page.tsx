import Link from 'next/link'

const FeatureLinks = [
  {
    name: 'Framework',
    desc: 'NextJS',
    href: 'https://nextjs.org/',
  },
  {
    name: 'Styling',
    desc: 'Tailwinds',
    href: 'https://tailwindcss.com/',
  },
  {
    name: 'Deployment',
    desc: 'GitHub Pages',
    href: 'https://pages.github.com/',
  },
  {
    name: 'Content',
    desc: 'Markdown Guide',
    href: 'https://www.markdownguide.org/',
  },
  {
    name: 'Favicon',
    desc: 'Favicon Generator',
    href: 'https://realfavicongenerator.net/',
  },
]

export default function About() {
  return (
    <section>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-8">
        <h1 className="text-4xl text-gray-700 dark:text-gray-200">About</h1>
        <div className="prose dark:prose-dark">
          <h2 className="text-1xl text-gray-700 dark:text-gray-200 mb-4">
            Current Position
          </h2>
          <p>
            Software Engineer at{' '}
            <Link href="https://intellync.com/">
              <span className="font-semibold">Intellync</span>
            </Link>{' '}
          </p>

          <h3 className="text-1xl text-gray-700 dark:text-gray-200">
            A problem solver
          </h3>
          <p>
            An experienced Software Engineer with a strong track record of
            contributing to SaaS products and enterprise projects. Dedicated to
            writing modern, performant, and maintainable code. Thrives in
            diverse environments, working with various languages, platforms, and
            frameworks. Has the ability to collaborate effectively with
            cross-functional teams to be a valuable asset in any project.
          </p>
          <p>
            Enjoy's creating anything that live's on the internet. Their Goal is
            to always build products that provide pixel-perfect, performant
            experiences for the user.
          </p>

          <h2 className="text-1xl text-gray-700 dark:text-gray-200 mb-4">
            Education
          </h2>
          <p>
            Graduated from{' '}
            <Link href="https://www.itcarlow.ie/">
              <span className="font-semibold"> SETU Carlow </span>
            </Link>{' '}
            with a Bachelor of Science (Honours) in Software Development.
          </p>

          <h2 className="text-1xl text-gray-700 dark:text-gray-200 mb-4">
            Contact
          </h2>
          <p>
            Need more information? Download my CV{' '}
            <Link
              href="/static/content/Calin_Doran_Software_Engineer_CV.pdf"
              target={'_blank'}
            >
              <span className="font-semibold">here</span>
            </Link>{' '}
            and get in touch.
          </p>

          <div>
            <h2 className="text-1xl text-gray-700 dark:text-gray-200 mb-4">
              About the site
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              This site uses all of these great services.
            </p>
            {FeatureLinks.map((link, i) => (
              <Link key={i} href={link.href} className={'flex mb-2'}>
                {link.desc}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
