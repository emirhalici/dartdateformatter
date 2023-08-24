import { PropsWithChildren } from 'react'
import InputLabel from './InputLabel'

type InputFieldProps = {
  id: string
  placeholder?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} & PropsWithChildren
export default function InputField({
  id,
  children,
  placeholder,
  value,
  onChange
}: InputFieldProps) {
  return (
    <div className="w-full">
      <InputLabel id={id}>{children}</InputLabel>
      <input
        className="mt-2 block w-full appearance-none rounded border bg-theme-primary-50 px-4 py-3 leading-tight text-theme-text focus:ring-4 focus:ring-theme-primary-300"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
