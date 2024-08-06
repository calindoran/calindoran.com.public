import * as TablerIcon from '@tabler/icons-react'
import Link from 'next/link'
import { ProjectType } from '../types/generic'

export default function ProjectCard(props: ProjectType) {
  const Icon: React.FC<TablerIcon.TablerIconsProps> =
    // @ts-expect-error - given that the icon name is a string, this should work
    TablerIcon[props.iconName]

  return (
    <Link
      href={`${props.href}`}
      className="flex w-full flex-1 items-center justify-start rounded-lg border-2 border-accent-2 p-4 transition-all duration-300 hover:scale-[1.01] sm:px-6"
    >
      <p className="text-lg">
        <Icon />
      </p>
      <div className="w-full px-6">
        <h4 className="text-lg font-medium tracking-tight text-cd-fg">
          {props.title}
        </h4>
        <p className="mb-1 text-accent-7">{props.description}</p>
      </div>
      <p className="text-lg">
        <TablerIcon.IconArrowUpRight className="relative inline-block -top-px" />
      </p>
    </Link>
  )
}
