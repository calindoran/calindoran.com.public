import { IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'

export default function Cookies() {
  return (
    <section>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-8 mx-auto border-gray-200 dark:border-gray-700">
        <h1 className="mb-2 text-4xl text-gray-700 dark:text-gray-200">
          Cookie Policy for calindoran.com
        </h1>
        <div className="leading-6 prose dark:prose-dark">
          <p>This is the Cookie Policy for calindoran.com</p>
          <h2 className="mb-4 text-gray-700 text-1xl dark:text-gray-200">
            Note
          </h2>
          <p>
            This site uses cookies for Google Analytics which is opted-in when
            you press "Allow Cookies". The rest of this page was generated with{' '}
            <Link href="https://www.termsfeed.com/cookies-policy-generator/">
              <span className="font-semibold">Cookies Policy Generator</span>
              <IconArrowUpRight
                size={16}
                className="relative inline-block -top-px"
              />
            </Link>
            .
          </p>
          <h2 className="mb-4 text-gray-700 text-1xl dark:text-gray-200">
            What Are Cookies
          </h2>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>
          <h2 className="mb-4 text-gray-700 text-1xl dark:text-gray-200">
            How We Use Cookies
          </h2>
          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
          <h2 className="mb-4 text-gray-700 text-1xl dark:text-gray-200">
            Disabling Cookies
          </h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies. This Cookies Policy was created with the help of the{' '}
            <Link href="https://www.termsfeed.com/cookies-policy-generator/">
              <span className="font-semibold">Cookies Policy Generator</span>
              <IconArrowUpRight
                size={16}
                className="relative inline-block -top-px"
              />
            </Link>
            .
          </p>
          <h2 className="mb-4 text-gray-700 text-1xl dark:text-gray-200">
            The Cookies We Set
          </h2>
          <p>- Site preferences cookies</p>
          <p>
            In order to provide you with a great experience on this site we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences we need
            to set cookies so that this information can be called whenever you
            interact with a page is affected by your preferences.
          </p>
          <h2 className="mb-4 text-gray-700 text-1xl dark:text-gray-200">
            Third Party Cookies
          </h2>
          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>
          <p>
            - This site uses Google Analytics which is one of the most
            widespread and trusted analytics solution on the web for helping us
            to understand how you use the site and ways that we can improve your
            experience. These cookies may track things such as how long you
            spend on the site and the pages that you visit so we can continue to
            produce engaging content. For more information on Google Analytics
            cookies, see the official Google Analytics page.
          </p>
          <h2 className="mb-4 text-gray-700 text-1xl dark:text-gray-200">
            More Information
          </h2>
          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren't sure whether you
            need or not it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site. For more
            general information on cookies, please read the Cookies Policy
            article. However if you are still looking for more information then
            you can contact us through one of our preferred contact methods.
          </p>
        </div>
      </div>
    </section>
  )
}
