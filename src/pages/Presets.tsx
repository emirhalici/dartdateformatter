import { classNames } from 'utils'
import { Preset } from 'utils/preset_formats'

type PresetsProps = {
  className?: string
  presets: Preset[]
  onPresetClick: (format: string) => void
}

export default function PresetsTab({
  className,
  presets,
  onPresetClick
}: PresetsProps) {
  const totalPresetsCount = presets.length

  return (
    <div
      className={classNames(
        'rounded-lg shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-500 w-full px-6',
        'my-0 py-0 px-0 mx-0',
        className
      )}
    >
      {presets.map((preset, index) => (
        <div key={preset.format}>
          <PresetTile
            formattedDate={preset.formattedDate}
            format={preset.format}
            isLastTile={index >= totalPresetsCount - 1}
            isFirstTile={index === 0}
            onClick={onPresetClick}
          />
        </div>
      ))}
    </div>
  )
}

type PresetTileProps = {
  isLastTile: boolean
  isFirstTile: boolean
  onClick: (format: string) => void | undefined
} & Preset
function PresetTile({
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
        <div className="text-left hover:cursor-auto">{formattedDate}</div>
        <div className="grow" />
        <div className="rounded-md bg-neutral-100 px-4 py-1 text-right hover:cursor-auto hover:bg-neutral-200">
          {format}
        </div>
      </div>
      {!isLastTile && <Divider />}
    </div>
  )
}

function Divider() {
  return (
    <div className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
  )
}
