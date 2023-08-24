export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export type TabType = 'presets' | 'build-your-own' | 'reference'
export const tabs: Record<TabType, string> = {
  presets: 'Presets',
  reference: 'Reference'
}
