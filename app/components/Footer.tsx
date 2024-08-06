import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto my-4">
        <hr className="w-full my-4 border-accent-2 border-1" />
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 mx-1 my-4 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="transition-colors text-accent-6 hover:text-cd-fg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors text-accent-6 hover:text-cd-fg"
            >
              About
            </Link>
            <Link
              href="/cookies"
              className="transition-colors text-accent-6 hover:text-cd-fg"
            >
              Cookies
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="https://www.linkedin.com/in/calin-doran/"
              className="transition-colors text-accent-6 hover:text-cd-fg"
            >
              Linkedin
            </Link>
            <Link
              href="https://www.github.com/calindoran"
              className="transition-colors text-accent-6 hover:text-cd-fg"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full max-w-2xl mx-auto mb-8">
        <p>&copy; Calin Doran {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
