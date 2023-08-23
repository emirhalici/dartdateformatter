@JS()
library callable_function;

import 'package:dart_bridge/dart_bridge.dart' as implementation;
import 'package:js/js.dart';

@JS('formatUtcDate')
external set _formatUtcDate(String Function(String format, String dateInDayMonthYearHourMinuteFormat) f);

@JS()
external void formatUtcDate();

@JS('formatUtcDateWithLocale')
external set _formatUtcDateWithLocale(
  String Function(String format, String dateInDayMonthYearHourMinuteFormat, String locale) f,
);

@JS()
external void formatUtcDateWithLocale();

@JS('availableLocales')
external set _availableLocales(List<String> Function() f);

@JS()
external void availableLocales;

void main() {
  _formatUtcDate = allowInterop(implementation.formatUtcDate);
  _availableLocales = allowInterop(implementation.availableLocales);
  _formatUtcDateWithLocale = allowInterop(implementation.formatUtcDateWithLocale);
}
