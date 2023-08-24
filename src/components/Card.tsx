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
        'bg-gradient-to-b from-theme-primary-500 to-theme-primary-400',
        'w-full px-6 py-6',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
