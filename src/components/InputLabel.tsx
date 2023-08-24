import { PropsWithChildren } from 'react'
import { classNames } from 'utils'

type InputLabelProps = {
  id: string
  className?: string
} & PropsWithChildren
export default function InputLabel({
  children,
  id,
  className
}: InputLabelProps) {
  return (
    <label
      className={classNames(
        'block text-xs font-bold uppercase tracking-wide text-theme-primary-50',
        className
      )}
      htmlFor={id}
    >
      <div id={id}>{children}</div>
    </label>
  )
}
