import Card from 'components/Card'

type PresetsProps = {
  className?: string
}
export default function PresetsTab({ className }: PresetsProps) {
  return <Card className={className}>Presets</Card>
}
