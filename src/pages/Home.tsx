import Card from 'components/Card'
import Header from 'components/Header'
import { classNames } from 'utils'

function HomePage() {
  return (
    <div
      className={classNames(
        'flex flex-col items-center self-center',
        'px-4 sm:px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]'
      )}
    >
      <Header />
      <Card>
        <div className="mb-2 text-xl font-bold dark:text-white">
          The Coldest Sunset
        </div>
        <p className="text-base text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div className="relative inline-block w-64" />
      </Card>
    </div>
  )
}

export default HomePage
