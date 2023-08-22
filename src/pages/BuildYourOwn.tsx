import Card from 'components/Card'

type BuildYourOwnTabProps = {
  className?: string
}
export default function BuildYourOwnTab({ className }: BuildYourOwnTabProps) {
  return <Card className={className}>Build</Card>
}
