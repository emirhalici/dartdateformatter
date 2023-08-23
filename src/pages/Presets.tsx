import PresetTile from 'components/PresetTile'
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
        'rounded-lg shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-500 w-full',
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
