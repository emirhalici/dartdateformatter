import { locales } from 'utils'

type LocaleDropdownProps = {
  selectedLocale: keyof typeof locales
  selectedLocaleName: string
  onChange: (value: keyof typeof locales) => void
}
export default function LocaleDropdown({
  selectedLocale,
  selectedLocaleName,
  onChange
}: LocaleDropdownProps) {
  return (
    <div>
      <p>Selected Locale: {selectedLocaleName}</p>
      <select
        value={selectedLocale}
        onChange={(e) => onChange(e.target.value as keyof typeof locales)}
      >
        {Object.keys(locales).map((key) => (
          <option key={key} value={key}>
            {locales[key as keyof typeof locales]}
          </option>
        ))}
      </select>
    </div>
  )
}
