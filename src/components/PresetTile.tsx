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
          'transition-all hover:bg-neutral-100 hover:opacity-100 hover:dark:opacity-50 hover:font-medium hover:cursor-pointer',
          isLastTile && 'rounded-b-lg',
          isFirstTile && 'rounded-t-lg'
        )}
        onClick={onClick ? () => onClick(format) : undefined}
      >
        <div className="m-auto text-left transition-all hover:cursor-auto ">
          {formattedDate}
        </div>
        <div className="grow" />
        <div className="w-1/4 rounded-md bg-theme-accent-200 px-4 py-1 text-right hover:cursor-auto">
          {format}
        </div>
      </div>
      {!isLastTile && <Divider />}
    </div>
  )
}
