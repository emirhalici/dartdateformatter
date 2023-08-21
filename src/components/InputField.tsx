import { PropsWithChildren } from 'react'
import { classNames } from 'utils'

type InputFieldProps = {
  id: string
  placeholder?: string
} & PropsWithChildren
export default function InputField({
  id,
  children,
  placeholder
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label
        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
        htmlFor={id}
      >
        {children}
      </label>
      <input
        className={classNames(
          'block w-full appearance-none rounded leading-tight border',
          'px-4 py-3',
          'border-gray-200 bg-gray-100 text-gray-700',
          'focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline'
        )}
        id={id}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}
