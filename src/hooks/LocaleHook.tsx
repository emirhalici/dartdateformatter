import { useState } from 'react'
import { locales } from 'utils'

export const useLocaleState = (initialLocale: keyof typeof locales) => {
  const [locale, setLocale] = useState(initialLocale)

  return {
    locale,
    setLocale,
    localeName: locales[locale]
  }
}
