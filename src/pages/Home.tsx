import DartBridge from 'DartBridge'
import Card from 'components/Card'
import Header from 'components/Header'
import InputField from 'components/InputField'
import LocaleDropdown from 'components/LocaleDropdown'
import ResultField from 'components/ResultField'
import TabHeader from 'components/TabHeader'
import useParamsState from 'hooks/StateParamsHook'
import useTabState from 'hooks/TabHook'
import { useCallback, useEffect, useState } from 'react'
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
  // State persisted in URL
  const [locale, setLocale] = useParamsState('en_ISO', 'locale')
  const [dateValue, setDateValue] = useParamsState('20/12/2020 13:10', 'date')
  const [formatPatternValue, setFormatPatternValue] = useParamsState(
    'MM/dd/yyyy',
    'pattern'
  )

  const [activeTab, setActiveTab] = useTabState<TabType>()
  // Computed/Derived state
  const [resultValue, setResultValue] = useState('')
  const [presets, setPresets] = useState<Preset[]>([])
  const [referenceCategoriesValue, setReferenceCategoriesValue] = useState<
    FormattedReferenceCategory[]
  >([])

  const computeFormattedReference = useCallback(
    (reference: Reference): FormattedReference => {
      return {
        description: reference.description,
        format: reference.format,
        formattedDate: DartBridge.formatUtcDateWithLocale(
          reference.format,
          dateValue,
          locale
        )
      }
    },
    [dateValue, locale]
  )

  useEffect(() => {
    setResultValue(
      DartBridge.formatUtcDateWithLocale(formatPatternValue, dateValue, locale)
    )
  }, [dateValue, formatPatternValue, locale])

  useEffect(() => {
    const computedPreset = presetFormats.map((presetFormat) => {
      return {
        formattedDate: DartBridge.formatUtcDateWithLocale(
          presetFormat,
          dateValue,
          locale
        ),
        format: presetFormat
      }
    })

    setPresets(computedPreset)
  }, [dateValue, formatPatternValue, locale])

  useEffect(() => {
    const computedReferenceCategories: FormattedReferenceCategory[] =
      referenceCategories.map((refCategory) => {
        return {
          category: refCategory.category,
          formats: refCategory.formats.map(computeFormattedReference)
        }
      })

    setReferenceCategoriesValue(computedReferenceCategories)
  }, [computeFormattedReference, dateValue, locale])

  return (
    <div className="flex flex-col items-center self-center bg-theme-background px-4 pt-12 sm:px-[5%] sm:pt-24 md:px-[10%] lg:px-[15%] lg:pt-40 xl:px-[20%]">
      <Header />
      <Card>
        <form className="space-y-6">
          <div className="flex flex-col space-y-6 align-top md:flex-row md:space-x-6 md:space-y-0">
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
          </div>
          <div className="flex flex-row align-top md:space-x-6">
            <LocaleDropdown selectedLocale={locale} onChange={setLocale} />
            <div className="w-0 md:w-full" />
          </div>

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
