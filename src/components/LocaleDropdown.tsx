import { classNames, locales } from 'utils'
import InputLabel from './InputLabel'

type LocaleDropdownProps = {
  selectedLocale: keyof typeof locales
  selectedLocaleName: string
  onChange: (value: keyof typeof locales) => void
}
export default function LocaleDropdown({
  selectedLocale,
  onChange
}: LocaleDropdownProps) {
  return (
    <div className="w-1/2">
      <InputLabel id={'input-locale-dropdown'}>Locale</InputLabel>
      <div className="relative mt-2">
        <select
          value={selectedLocale}
          onChange={(e) => onChange(e.target.value as keyof typeof locales)}
          id="input-locale-dropdown"
          className={classNames(
            'block w-full appearance-none rounded leading-tight border',
            'px-4 py-3',
            'border-gray-200 bg-gray-100 text-gray-700',
            'focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline'
          )}
        >
          {Object.entries(locales).map(([locale, localeName]) => (
            <option key={locale} value={locale}>
              {`${locale} | ${localeName}`}
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
