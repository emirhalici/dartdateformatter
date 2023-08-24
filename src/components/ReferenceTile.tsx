import { classNames } from 'utils'
import { FormattedReference } from 'utils/reference_formats'

type ReferenceTileProps = {
  isLastTile: boolean
  isFirstTile: boolean
  onClick: (format: string) => void
} & FormattedReference
export default function ReferenceTile({
  formattedDate,
  format,
  isLastTile,
  description,
  isFirstTile,
  onClick
}: ReferenceTileProps) {
  return (
    <div
      className={classNames(
        'flex flex-col lg:flex-row w-full text-clip py-3 px-4 hover:bg-neutral-100 hover:opacity-100 hover:dark:opacity-50 hover:font-medium hover:cursor-pointer border-b',
        isFirstTile && 'rounded-t-lg',
        isLastTile && 'rounded-b-lg border-b-0'
      )}
      onClick={onClick ? () => onClick(format) : undefined}
    >
      <p className="order-1 my-auto w-1/4  text-left hover:cursor-auto lg:order-1">
        {formattedDate}
      </p>
      <p className="order-3 my-auto w-full grow lg:order-2 lg:mr-6 lg:w-1/2">
        {description}
      </p>
      <p className="order-2 my-4 w-fit rounded-md bg-theme-accent-200 px-4 py-1 hover:cursor-auto md:w-1/4 lg:order-3 lg:my-0">
        {format}
      </p>
    </div>
  )
}
