import { PropsWithChildren } from 'react'
import { classNames } from 'utils'

export default function Card(props: PropsWithChildren) {
  return (
    <div
      className={classNames(
        'rounded-lg',
        'shadow-lg dark:shadow-gray-900',
        'bg-white dark:bg-gray-500',
        'px-6 py-6'
      )}
    >
      {props.children}
    </div>
  )
}
