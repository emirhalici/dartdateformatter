@TestOn('browser')
import 'package:dart_bridge/dart_bridge.dart' as implementation;
import 'package:intl/intl.dart';
import 'package:test/test.dart';

const String inputDateFormatPattern = 'dd/MM/yyyy HH:mm';

void main() {
  test('availableLocales works', () {
    expect(
      implementation.availableLocales().isNotEmpty,
      true,
      reason: "availableLocales must return all available locales, which cannot be an empty list.",
    );
  });

  test('formatUtcDate works', () {
    final DateTime now = DateTime.now();

    final DateFormat inputDateFormat = DateFormat(inputDateFormatPattern);
    final String inputDateString = inputDateFormat.format(now);

    final result = implementation.formatUtcDate(inputDateFormatPattern, inputDateString);
    expect(
      result,
      inputDateString,
      reason: "For the same DateFormat, formatUtcDate must return same input.",
    );
  });

  test('formatUtcDate works for valid format', () {
    final DateFormat inputDateFormat = DateFormat(inputDateFormatPattern);
    final String targetDateFormatPattern = 'MMM d, yyyy';

    final DateTime now = DateTime.now();
    final String inputDateString = inputDateFormat.format(now);
    final String expectedDateString = DateFormat(targetDateFormatPattern).format(now);

    final String result = implementation.formatUtcDate(targetDateFormatPattern, inputDateString);
    expect(
      result,
      expectedDateString,
      reason: "For given DateFormat, formatUtcDate must return correct output.",
    );
  });
}
