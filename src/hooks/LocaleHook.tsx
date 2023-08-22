import DartBridge from 'DartBridge'
import { useState } from 'react'
export const locales = DartBridge.availableLocales()
export const useLocaleState = (initialLocale: string) => {
  const [locale, setLocale] = useState(initialLocale)

  return {
    locale,
    setLocale
  }
}
