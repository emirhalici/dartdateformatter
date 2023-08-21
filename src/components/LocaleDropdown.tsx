import { locales } from 'utils'
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
      <select
        value={selectedLocale}
        onChange={(e) => onChange(e.target.value as keyof typeof locales)}
        id="input-locale-dropdown"
      >
        {Object.entries(locales).map(([locale, localeName]) => (
          <option key={locale} value={locale}>
            {`${locale} | ${localeName}`}
          </option>
        ))}
      </select>
    </div>
  )
}
