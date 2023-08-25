import { locales } from 'hooks/LocaleHook'
import InputLabel from './InputLabel'

type LocaleDropdownProps = {
  selectedLocale: string
  onChange: (value: string) => void
}
export default function LocaleDropdown({
  selectedLocale,
  onChange
}: LocaleDropdownProps) {
  return (
    <div className="w-full">
      <InputLabel id={'input-locale-dropdown'}>Locale</InputLabel>
      <div className="relative mt-2">
        <select
          value={selectedLocale}
          onChange={(e) => onChange(e.target.value)}
          id="input-locale-dropdown"
          className="block w-full appearance-none rounded border bg-theme-primary-50 px-4 py-3 leading-tight text-theme-text focus:ring-4 focus:ring-theme-primary-300"
        >
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <DownArrow />
        </div>
      </div>
    </div>
  )
}

function DownArrow() {
  return (
    <svg
      className="ml-2.5 h-2.5 w-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  )
}
