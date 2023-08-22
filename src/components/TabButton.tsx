import { MouseEventHandler, PropsWithChildren } from 'react'
import { classNames } from 'utils'

type TabButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  isActive: boolean
} & PropsWithChildren
export default function TabButton({
  children,
  onClick,
  isActive
}: TabButtonProps) {
  const tabButtonStyles =
    'text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white'

  return (
    <button
      onClick={onClick}
      className={classNames([
        'inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
        isActive ? tabButtonStyles : ''
      ])}
    >
      {children} {isActive}
    </button>
  )
}
