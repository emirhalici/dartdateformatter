import { MouseEventHandler, PropsWithChildren } from 'react'

type TabButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  isActive: boolean
} & PropsWithChildren
export default function TabButton({
  children,
  onClick,
  isActive
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
    >
      {children} {isActive}
    </button>
  )
}
