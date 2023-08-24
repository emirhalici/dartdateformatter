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
  const totalFormatCount = referenceCategories.length

  return (
    <div
      className={classNames(
        'rounded-lg shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-500 w-full',
        'my-0 py-0 px-0 mx-0',
        className
      )}
    >
      <div className="px-4 py-3">
        Following reference samples are based on the input date. All reference
        samples are updated if you change input date. Clicking on a reference
        adds it to the selected format.
      </div>
      {referenceCategories.map((referenceCategory, categoryIndex) => {
        return (
          <ReferenceCategoryTile
            key={referenceCategory.category}
            referenceCategory={referenceCategory}
            onReferenceClick={onReferenceClick}
            categoryIndex={categoryIndex}
            totalCategoryCount={totalFormatCount}
          />
        )
      })}
    </div>
  )
}

type ReferenceCategoryTileProps = {
  referenceCategory: FormattedReferenceCategory
  onReferenceClick: (format: string) => void
  categoryIndex: number
  totalCategoryCount: number
}
function ReferenceCategoryTile({
  referenceCategory,
  onReferenceClick,
  categoryIndex,
  totalCategoryCount
}: ReferenceCategoryTileProps) {
  return (
    <div key={referenceCategory.category}>
      <div className="bg-theme-accent-500 px-4 py-3 font-semibold text-theme-accent-100">
        {referenceCategory.category}
      </div>
      {referenceCategory.formats.map((preset, index, allFormats) => (
        <ReferenceTile
          key={preset.format}
          formattedDate={preset.formattedDate}
          format={preset.format}
          isLastTile={
            categoryIndex === totalCategoryCount - 1 &&
            index == allFormats.length - 1
          }
          isFirstTile={index === 0}
          onClick={onReferenceClick}
          description={preset.description}
        />
      ))}
    </div>
  )
}
