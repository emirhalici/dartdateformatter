export default function Header() {
  return (
    <div className="flex w-full flex-col justify-start pr-5">
      <h1 className="flex text-5xl font-bold text-theme-primary-800">
        Dart Date Formatter
      </h1>
      <h3 className="flex pb-8 pt-4 text-xl font-semibold text-gray-600">
        Easy date formatting for Dart and Flutter. Uses&nbsp;
        <a
          href="https://api.flutter.dev/flutter/intl/DateFormat-class.html"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          DateFormat
        </a>
        &nbsp;class from&nbsp;
        <a
          href="https://pub.dev/packages/intl"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          intl
        </a>{' '}
        &nbsp;package.
      </h3>
    </div>
  )
}
