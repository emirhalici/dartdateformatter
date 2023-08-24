export type Reference = {
  format: string
  description: string
}

export type ReferenceCategory = {
  category: string
  formats: Reference[]
}

export type FormattedReference = {
  formattedDate: string
} & Reference

export type FormattedReferenceCategory = {
  category: string
  formats: FormattedReference[]
}

const year: Reference[] = [
  {
    format: 'y',
    description: 'Year, no padding'
  },
  {
    format: 'yy',
    description: 'Year, two digits (padding with a zero if necessary)'
  },
  {
    format: 'yyyy',
    description:
      'Year, minimum of four digits (padding with zeros if necessary)'
  }
]

const quarter: Reference[] = [
  {
    format: 'Q',
    description: 'The quarter of the year. Use QQ if you want zero padding.'
  },
  {
    format: 'QQQ',
    description: 'Quarter including "Q"'
  },
  {
    format: 'QQQQ',
    description: 'Quarter spelled out'
  }
]

const month: Reference[] = [
  {
    format: 'M',
    description:
      "The numeric month of the year. A single M will use '1' for January."
  },
  {
    format: 'MM',
    description:
      "The numeric month of the year. A double M will use '01' for January."
  },
  {
    format: 'MMM',
    description: 'The shorthand name of the month'
  },
  {
    format: 'MMMM',
    description: 'Full name of the month'
  },
  {
    format: 'MMMMM',
    description: 'Narrow name of the month'
  }
]

const day: Reference[] = [
  {
    format: 'd',
    description: 'The day of the month. A single d will use 1 for January 1st.'
  },
  {
    format: 'dd',
    description: 'The day of the month. A double d will use 01 for January 1st.'
  },
  {
    format: 'F',
    description: '(numeric) The day of week in the month.'
  },
  {
    format: 'E',
    description: 'The abbreviation for the day of the week'
  },
  {
    format: 'EEEE',
    description: 'The wide name of the day of the week'
  },
  {
    format: 'EEEEE',
    description: 'The narrow day of week'
  },
  {
    format: 'EEEEEE',
    description: 'The short day of week'
  }
]

const hour: Reference[] = [
  {
    format: 'h',
    description: 'The 12-hour hour.'
  },
  {
    format: 'hh',
    description: 'The 12-hour hour padding with a zero if there is only 1 digit'
  },
  {
    format: 'H',
    description: 'The 24-hour hour.'
  },
  {
    format: 'HH',
    description:
      'The 24-hour hour padding with a zero if there is only 1 digit.'
  },
  {
    format: 'a',
    description: 'AM / PM for 12-hour time formats'
  }
]

const minute: Reference[] = [
  {
    format: 'm',
    description: 'The minute, with no padding for zeroes.'
  },
  {
    format: 'mm',
    description: 'The minute with zero padding.'
  }
]
const second: Reference[] = [
  {
    format: 's',
    description: 'The seconds, with no padding for zeroes.'
  },
  {
    format: 'ss',
    description: 'The seconds with zero padding.'
  },
  {
    format: 'SSS',
    description: 'The milliseconds.'
  }
]
// const timeZone: Reference[] = [
//   {
//     format: 'zzz',
//     description:
//       'The 3 letter name of the time zone. Falls back to GMT-08:00 (hour offset) if the name is not known.'
//   },
//   {
//     format: 'zzzz',
//     description:
//       'The expanded time zone name, falls back to GMT-08:00 (hour offset) if name is not known.'
//   },
//   {
//     format: 'ZZZZ',
//     description: 'Time zone with abbreviation and offset'
//   },
//   {
//     format: 'Z',
//     description:
//       'RFC 822 GMT format. Can also match a literal Z for Zulu (UTC) time.'
//   },
//   {
//     format: 'ZZZZZ',
//     description: 'ISO 8601 time zone format'
//   }
// ]

export const referenceCategories: ReferenceCategory[] = [
  {
    category: 'Year',
    formats: year
  },
  {
    category: 'Quarter',
    formats: quarter
  },
  {
    category: 'Month',
    formats: month
  },
  {
    category: 'Day',
    formats: day
  },
  {
    category: 'Hour',
    formats: hour
  },
  {
    category: 'Minute',
    formats: minute
  },
  {
    category: 'Second',
    formats: second
  }
  // {
  //   category: 'Time Zone',
  //   formats: timeZone
  // }
]
