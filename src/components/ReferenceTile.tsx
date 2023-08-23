import { classNames } from 'utils'
import { FormattedReference } from 'utils/reference_formats'
import Divider from './Divider'

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
  // isFirstTile,
  onClick
}: ReferenceTileProps) {
  return (
    <div>
      <div
        className={classNames(
          'flex flex-row w-full text-clip py-3 px-4',
          'hover:bg-neutral-100 hover:opacity-100 hover:dark:opacity-50 hover:font-medium hover:cursor-pointer'
          // isLastTile && 'rounded-b-lg',
          // isFirstTile && 'rounded-t-lg'
        )}
        onClick={onClick ? () => onClick(format) : undefined}
      >
        <div className="w-1/4 text-left hover:cursor-auto">{formattedDate}</div>
        <div className="grow">{description}</div>
        <div className="w-40 rounded-md bg-neutral-100 px-4 py-1 text-right hover:cursor-auto hover:bg-neutral-200">
          {format}
        </div>
      </div>
      {!isLastTile && <Divider />}
    </div>
  )
}
