import { IconLoader3 } from '@tabler/icons-react'
import { Suspense } from 'react'
import Project from '../components/Project'
import { ProjectDataLinks } from './ProjectDataLinks'

export default function Projects() {
  let projects = ProjectDataLinks

  return (
    <section>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-8 mx-auto border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl text-cd-fg">Projects</h1>
        <h2 className="my-4 text-1xl text-cd-fg">
          Check out my projects on GitHub!
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
            {Object.entries(projects).map(([path, project]) => {
              return <Project key={project.id} {...project} />
            })}
          </div>
        </Suspense>
      </div>
    </section>
  )
}
