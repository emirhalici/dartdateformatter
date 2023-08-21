import Card from 'components/Card'
import Header from 'components/Header'
import InputField from 'components/InputField'
import LocaleDropdown from 'components/LocaleDropdown'
import ResultField from 'components/ResultField'
import { useLocaleState } from 'hooks/LocaleHook'
import { classNames } from 'utils'

export default function HomePage() {
  const { locale, localeName, setLocale } = useLocaleState('en')

  return (
    <div
      className={classNames(
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
            onChange={(newLocale) => {
              setLocale(newLocale)
            }}
          />
          <ResultField>08/20/2023</ResultField>
        </form>
      </Card>
    </div>
  )
}
