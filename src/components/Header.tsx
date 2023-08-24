export default function Header() {
  return (
    <div className="flex w-full flex-col justify-start pr-5">
      <h1 className="flex text-5xl font-bold">
        <div className="text-theme-primary-800">Dart&nbsp;</div>
        <div className="text-theme-primary-800">Date&nbsp;</div>
        <div className="text-theme-primary-800">Formatter</div>
      </h1>
      <h2 className="flex pb-8 pt-4 text-2xl font-semibold text-theme-text">
        Easily find the{' '}
        <div className="text-theme-primary-600">&nbsp;DateFormat &nbsp;</div>
        you&apos;re looking for in Dart&Flutter applications!
      </h2>
    </div>
  )
}
