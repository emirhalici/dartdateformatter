export const presetFormats: string[] = [
  'EEEE, MMM d, yyyy',
  'MM/dd/yyyy',
  'MM-dd-yyyy HH:mm',
  'MMM d, h:mm a',
  'MMMM yyyy',
  'MMM d, yyyy',
  'E, d MMM yyyy HH:mm:ss Z',
  "yyyy-MM-dd'T'HH:mm:ssZ",
  'dd.MM.yy',
  'HH:mm:ss.SSS'
]

export type Preset = {
  formattedDate: string
  format: string
}
