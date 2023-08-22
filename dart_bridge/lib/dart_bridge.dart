import 'package:intl/date_symbol_data_http_request.dart';
import 'package:intl/intl.dart';

// TODO: Add locale
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

List<String> availableLocales() {
  return availableLocalesForDateFormatting;
}
