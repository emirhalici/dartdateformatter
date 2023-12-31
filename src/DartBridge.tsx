type WindowWithDartBridge = {
  availableLocales: () => string[]
  formatUtcDate: (
    formatPattern: string,
    dateInDayMonthYearHourMinuteFormat: string
  ) => string
  formatUtcDateWithLocale: (
    formatPattern: string,
    dateInDayMonthYearHourMinuteFormat: string,
    locale: string
  ) => string
} & typeof window

export default class DartBridge {
  static availableLocales(): string[] {
    return (window as WindowWithDartBridge).availableLocales()
  }

  static formatUtcDate(
    formatPattern: string,
    dateInDayMonthYearHourMinuteFormat: string
  ): string {
    return (window as WindowWithDartBridge).formatUtcDate(
      formatPattern,
      dateInDayMonthYearHourMinuteFormat
    )
  }

  static formatUtcDateWithLocale(
    formatPattern: string,
    dateInDayMonthYearHourMinuteFormat: string,
    locale: string
  ): string {
    return (window as WindowWithDartBridge).formatUtcDateWithLocale(
      formatPattern,
      dateInDayMonthYearHourMinuteFormat,
      locale
    )
  }
}
