import { PropsWithChildren } from 'react'

type InputLabelProps = { id: string } & PropsWithChildren
export default function InputLabel({ children, id }: InputLabelProps) {
  return (
    <label
      className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
      htmlFor={id}
    >
      <div id={id}>{children}</div>
    </label>
  )
}
