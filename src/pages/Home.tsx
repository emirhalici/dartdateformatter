import { PropsWithChildren } from 'react'
import { classNames } from 'utils'

function HomePage() {
  return (
    <div
      className={classNames(
        'flex flex-col items-center self-center',
        'px-4  sm:px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%]'
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

function Card(props: PropsWithChildren) {
  return (
    <div
      className={classNames(
        'rounded-lg',
        'shadow-lg dark:shadow-gray-900',
        'bg-white dark:bg-gray-500',
        'px-6 py-6'
      )}
    >
      {props.children}
    </div>
  )
}

function Header() {
  return (
    <div className="flex w-full flex-col pr-10">
      <h1 className="text-5xl font-bold text-slate-800">Dart Date Formatter</h1>
      <h2 className="pb-8 pt-4 text-2xl text-slate-800">
        {
          "Easily find the Date format you're looking for in Dart&Flutter applications! "
        }
      </h2>
    </div>
  )
}

export default HomePage
