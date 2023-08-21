import Card from 'components/Card'
import Header from 'components/Header'
import InputField from 'components/InputField'
import ResultField from 'components/ResultField'
import { classNames } from 'utils'

export default function HomePage() {
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
          <ResultField>08/20/2023</ResultField>
        </form>
      </Card>
    </div>
  )
}
