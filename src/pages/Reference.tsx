import ReferenceTile from 'components/ReferenceTile'
import { classNames } from 'utils'
import { FormattedReferenceCategory } from 'utils/reference_formats'

type ReferenceTabProps = {
  className?: string
  referenceCategories: FormattedReferenceCategory[]
  onReferenceClick: (format: string) => void
}
export default function ReferenceTab({
  className,
  referenceCategories,
  onReferenceClick
}: ReferenceTabProps) {
  return (
    <div
      className={classNames(
        'rounded-lg shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-500 w-full',
        'my-0 py-0 px-0 mx-0',
        className
      )}
    >
      {referenceCategories.map((referenceCategory) => {
        const totalFormatCount = referenceCategories.length
        return (
          <div key={referenceCategory.category}>
            <div className="bg-slate-500 px-4 py-3 font-semibold text-slate-100">
              {referenceCategory.category}
            </div>
            {referenceCategory.formats.map((preset, index) => (
              <div key={preset.format}>
                <ReferenceTile
                  formattedDate={preset.formattedDate}
                  format={preset.format}
                  isLastTile={index >= totalFormatCount - 1}
                  isFirstTile={index === 0}
                  onClick={onReferenceClick}
                  description={preset.description}
                />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
