import 'package:intl/date_symbol_data_http_request.dart';
import 'package:intl/intl.dart';

String formatUtcDate(String format, int millisSinceEpochUtc) {
  final DateTime dateTime = DateTime.fromMillisecondsSinceEpoch(millisSinceEpochUtc, isUtc: true);
  final DateFormat dateFormat = DateFormat(format);
  return dateFormat.format(dateTime);
}

List<String> availableLocales() {
  return availableLocalesForDateFormatting;
}
