import { PropsWithChildren } from 'react'
import { classNames } from 'utils'

type CardProps = {
  className?: string
} & PropsWithChildren
export default function Card(props: CardProps) {
  return (
    <div
      className={classNames(
        'rounded-lg',
        'shadow-lg dark:shadow-gray-900',
        'bg-white dark:bg-gray-500',
        'w-full px-6 py-6',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
