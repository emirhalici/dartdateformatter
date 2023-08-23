import { classNames } from 'utils'
import { Preset } from 'utils/preset_formats'
import Divider from './Divider'

type PresetTileProps = {
  isLastTile: boolean
  isFirstTile: boolean
  onClick: (format: string) => void
} & Preset
export default function PresetTile({
  formattedDate,
  format,
  isLastTile,
  isFirstTile,
  onClick
}: PresetTileProps) {
  return (
    <div>
      <div
        className={classNames(
          'flex w-full flex-auto grow flex-row text-clip py-3 px-4',
          'hover:bg-neutral-100 hover:opacity-100 hover:dark:opacity-50 hover:font-medium hover:cursor-pointer',
          isLastTile && 'rounded-b-lg',
          isFirstTile && 'rounded-t-lg'
        )}
        onClick={onClick ? () => onClick(format) : undefined}
      >
        <div className="m-auto text-left hover:cursor-auto">
          {formattedDate}
        </div>
        <div className="grow" />
        <div className="rounded-md bg-neutral-100 px-4 py-1 text-right hover:cursor-auto hover:bg-neutral-200">
          {format}
        </div>
      </div>
      {!isLastTile && <Divider />}
    </div>
  )
}
