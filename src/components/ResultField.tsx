import { PropsWithChildren } from 'react'
import InputLabel from './InputLabel'

export default function ExportField({ children }: PropsWithChildren) {
  return (
    <div>
      <InputLabel id="input-export-field">Result</InputLabel>
      <div className="mt-2 rounded-md bg-theme-primary-50 p-6 text-xl font-semibold tracking-wide text-theme-text">
        {children}
      </div>
    </div>
  )
}
