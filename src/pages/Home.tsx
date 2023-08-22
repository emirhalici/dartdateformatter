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
import BuildYourOwnTab from './BuildYourOwn'
import PresetsTab from './Presets'
import ReferenceTab from './Reference'

export default function HomePage() {
  const { locale, setLocale } = useLocaleState('en_ISO')
  const [activeTab, setActiveTab] = useTabState<TabType>()

  const [dateValue, setDateValue] = useState('20/12/2020 13:10')
  const [formatPatternValue, setFormatPatternValue] = useState('MM/dd/yyyy')

  const [resultValue, setResultValue] = useState('')

  useEffect(() => {
    const result = DartBridge.formatUtcDateWithLocale(
      formatPatternValue,
      dateValue,
      locale
    )
    setResultValue(result)
  }, [dateValue, formatPatternValue, locale])

  return (
    <div
      className={classNames(
        'bg-gradient-light dark:bg-gradient-dark',
        'pt-12 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40',
        'flex flex-col items-center self-center',
        'px-4 sm:px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]'
      )}
    >
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
      <PresetsTab className={tabElementStyle(activeTab === 'presets')} />
      <BuildYourOwnTab
        className={tabElementStyle(activeTab === 'build-your-own')}
      />
      <ReferenceTab className={tabElementStyle(activeTab === 'reference')} />
    </div>
  )
}

const visibleTabStyles = 'mt-4 transition-all duration-300 delay-200 ease-out'
const shrunkTabStyles = 'mt-0 h-0 py-0 opacity-0 hidden'

function tabElementStyle(isActive: boolean): string {
  return classNames(visibleTabStyles, isActive ? '' : shrunkTabStyles)
}
