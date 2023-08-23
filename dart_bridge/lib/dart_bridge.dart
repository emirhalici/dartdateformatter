import 'package:intl/date_symbol_data_file.dart';
import 'package:intl/date_symbol_data_local.dart' as local;
import 'package:intl/intl.dart';

String formatUtcDate(String formatPattern, String dateInDayMonthYearHourMinuteFormat) {
  // Any exceptions should be immidiately returned to other side
  try {
    final DateFormat expectedDateFormat = DateFormat('dd/MM/yyyy HH:mm');
    final DateTime inputDateTime = expectedDateFormat.parse(dateInDayMonthYearHourMinuteFormat);
    final DateFormat targetDateFormat = DateFormat(formatPattern);

    return targetDateFormat.format(inputDateTime);
  } catch (exception) {
    return exception.toString();
  }
}

String formatUtcDateWithLocale(String formatPattern, String dateInDayMonthYearHourMinuteFormat, String locale) {
  // Any exceptions should be immidiately returned to other side
  try {
    local.initializeDateFormatting(locale);
    final DateFormat expectedDateFormat = DateFormat('dd/MM/yyyy HH:mm', locale);
    final DateTime inputDateTime = expectedDateFormat.parse(dateInDayMonthYearHourMinuteFormat);
    final DateFormat targetDateFormat = DateFormat(formatPattern, locale);

    return targetDateFormat.format(inputDateTime);
  } catch (exception) {
    return exception.toString();
  }
}

List<String> availableLocales() {
  return availableLocalesForDateFormatting;
}
