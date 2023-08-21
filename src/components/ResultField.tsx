import { PropsWithChildren } from 'react'
import InputLabel from './InputLabel'

export default function ExportField({ children }: PropsWithChildren) {
  return (
    <div>
      <InputLabel id="input-export-field">Result</InputLabel>
      <div className="rounded-md bg-slate-100 p-6 font-mono text-xl font-semibold tracking-wide text-gray-500">
        {children}
      </div>
    </div>
  )
}
