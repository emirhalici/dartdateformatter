import Card from 'components/Card'
import Header from 'components/Header'
import InputField from 'components/InputField'
import LocaleDropdown from 'components/LocaleDropdown'
import ResultField from 'components/ResultField'
import TabHeader from 'components/TabHeader'
import { useLocaleState } from 'hooks/LocaleHook'
import useTabState from 'hooks/TabHook'
import { TabType, classNames } from 'utils'
import BuildYourOwnTab from './BuildYourOwn'
import PresetsTab from './Presets'
import ReferenceTab from './Reference'

const visibleTabStyles = 'mt-4 transition-all duration-300 ease-out'
const shrunkTabStyles = 'h-0 py-0 opacity-0 mt-0'

export default function HomePage() {
  const { locale, localeName, setLocale } = useLocaleState('en')
  const [activeTab, setActiveTab] = useTabState<TabType>()

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
          <InputField id="input-date" placeholder="08/20/2023 23:14PM">
            Date
          </InputField>
          <InputField id="input-format" placeholder="%A, %b %d">
            Format
          </InputField>
          <LocaleDropdown
            selectedLocale={locale}
            selectedLocaleName={localeName}
            onChange={setLocale}
          />
          <ResultField>08/20/2023</ResultField>
        </form>
      </Card>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <PresetsTab
        className={classNames(
          visibleTabStyles,
          activeTab === 'presets' ? '' : shrunkTabStyles
        )}
      />
      <BuildYourOwnTab
        className={classNames(
          visibleTabStyles,
          activeTab === 'build-your-own' ? '' : shrunkTabStyles
        )}
      />
      <ReferenceTab
        className={classNames(
          visibleTabStyles,
          activeTab === 'reference' ? '' : shrunkTabStyles
        )}
      />
    </div>
  )
}
