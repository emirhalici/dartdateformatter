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
          'flex w-full flex-auto grow flex-col sm:flex-row text-clip py-3 px-4 justify-start',
          'transition-all hover:bg-neutral-100 hover:opacity-100 hover:dark:opacity-50 hover:font-medium hover:cursor-pointer',
          isLastTile && 'rounded-b-lg',
          isFirstTile && 'rounded-t-lg'
        )}
        onClick={onClick ? () => onClick(format) : undefined}
      >
        <p className="my-auto grow text-left transition-all">{formattedDate}</p>
        <p className="mb-2 mt-4 w-full rounded-md bg-theme-accent-200 px-4 py-2 sm:my-0 sm:w-1/3">
          {format}
        </p>
      </div>
      {!isLastTile && <Divider />}
    </div>
  )
}
