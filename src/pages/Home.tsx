import DartBridge from 'DartBridge'
import Card from 'components/Card'
import Header from 'components/Header'
import InputField from 'components/InputField'
import LocaleDropdown from 'components/LocaleDropdown'
import ResultField from 'components/ResultField'
import TabHeader from 'components/TabHeader'
import { useLocaleState } from 'hooks/LocaleHook'
import useTabState from 'hooks/TabHook'
import { useEffect, useState } from 'react'
import { TabType, classNames } from 'utils'
import { Preset, presetFormats } from 'utils/preset_formats'
import {
  FormattedReference,
  FormattedReferenceCategory,
  Reference,
  referenceCategories
} from 'utils/reference_formats'
import PresetsTab from './Presets'
import ReferenceTab from './Reference'

export default function HomePage() {
  const { locale, setLocale } = useLocaleState('en_ISO')
  const [activeTab, setActiveTab] = useTabState<TabType>()

  const [dateValue, setDateValue] = useState('20/12/2020 13:10')
  const [formatPatternValue, setFormatPatternValue] = useState('MM/dd/yyyy')

  const [resultValue, setResultValue] = useState('')
  const [presets, setPresets] = useState<Preset[]>([])

  const [referenceCategoriesValue, setReferenceCategoriesValue] = useState<
    FormattedReferenceCategory[]
  >([])

  useEffect(() => {
    const result = DartBridge.formatUtcDateWithLocale(
      formatPatternValue,
      dateValue,
      locale
    )
    setResultValue(result)
  }, [dateValue, formatPatternValue, locale])

  useEffect(() => {
    const computedPreset: Preset[] = []
    for (const presetFormat of presetFormats) {
      const formattedDate = DartBridge.formatUtcDateWithLocale(
        presetFormat,
        dateValue,
        locale
      )
      computedPreset.push({
        formattedDate,
        format: presetFormat
      })
    }

    setPresets(computedPreset)
  }, [dateValue, formatPatternValue, locale])

  useEffect(() => {
    function computeFormattedReference(
      reference: Reference
    ): FormattedReference {
      return {
        description: reference.description,
        format: reference.format,
        formattedDate: DartBridge.formatUtcDateWithLocale(
          reference.format,
          dateValue,
          locale
        )
      }
    }

    const computedReferenceCategories: FormattedReferenceCategory[] =
      referenceCategories.map((refCategory) => {
        return {
          category: refCategory.category,
          formats: refCategory.formats.map(computeFormattedReference)
        }
      })

    setReferenceCategoriesValue(computedReferenceCategories)
  }, [dateValue, locale])

  return (
    <div className="flex flex-col items-center self-center bg-theme-background px-4 pt-12 sm:px-[5%] sm:pt-24 md:px-[10%] lg:px-[15%] lg:pt-40 xl:px-[20%]">
      <Header />
      <Card>
        <form className="mb-0 space-y-6">
          <InputField
            id="input-date"
            placeholder="dd/MM/yyyy HH:mm"
            value={dateValue}
            onChange={(event) => setDateValue(event.target.value)}
          >
            Date
          </InputField>
          <InputField
            id="input-format"
            placeholder="MM/dd/yyyy"
            value={formatPatternValue}
            onChange={(event) => setFormatPatternValue(event.target.value)}
          >
            Format
          </InputField>
          <LocaleDropdown selectedLocale={locale} onChange={setLocale} />
          <ResultField>{resultValue}</ResultField>
        </form>
      </Card>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <PresetsTab
        className={tabElementStyle(activeTab === 'presets')}
        presets={presets}
        onPresetClick={setFormatPatternValue}
      />
      <ReferenceTab
        className={tabElementStyle(activeTab === 'reference')}
        referenceCategories={referenceCategoriesValue}
        onReferenceClick={(referenceFormat) =>
          setFormatPatternValue(
            (existingFormat) => `${existingFormat} ${referenceFormat}`
          )
        }
      />
      <div className="h-10" />
    </div>
  )
}

const visibleTabStyles = 'mt-4 transition-all duration-300 delay-200 ease-out'
const shrunkTabStyles = 'mt-0 h-0 py-0 opacity-0 hidden'

function tabElementStyle(isActive: boolean): string {
  return classNames(visibleTabStyles, isActive ? '' : shrunkTabStyles)
}
