import { DateTime } from "luxon";
var dt = DateTime;
const days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
var locale = "en";
var format = { month: "long", day: "numeric", year: "numeric" };
function today() {
  return dt
    .now()
    .setLocale(locale)
    .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
}
function todayShort() {
  return dt.now().setLocale(locale).toLocaleString(DateTime.DATE_SHORT);
}
function currentMonthIndex() {
  return months.indexOf(
    dt
      .now()
      .setLocale(locale)
      .toLocaleString(DateTime.DATE_MED)
      .split(",")[0]
      .split(" ")[0]
      .toLowerCase()
  );
}
function currentDayIndex() {
  return days.indexOf(
    dt
      .now()
      .setLocale(locale)
      .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
      .split(",")[0]
      .toLowerCase()
  );
}
function currentWeekIndex(day) {
  if (day == 7 || day == 14 || day == 21 || day == 28) {
    switch (day) {
      case 7:
        return 1;
        break;
      case 14:
        return 2;
        break;
      case 21:
        return 3;
        break;
      case 28:
        return 4;
        break;

      default:
        return null;
        break;
    }
  }
}
function isLeapYear(val = DateTime.DATETIME_MED_WITH_WEEKDAY.year) {
  if (val % 4 == 0) {
    return true;
  }
  return false;
}
function daysInMonth(month) {
  if (
    months[month] == "sep" ||
    months[month] == "apr" ||
    months[month] == "jun" ||
    months[month] == "nov"
  ) {
    return 30;
  } else if (
    months[month] == "mar" ||
    months[month] == "jan" ||
    months[month] == "may" ||
    months[month] == "jul" ||
    months[month] == "oct" ||
    months[month] == "dec" ||
    months[month] == "aug"
  ) {
    return 31;
  } else {
    if (months[month] == "feb" && isLeapYear()) {
      return 29;
    } else if (months[month] == "feb" && isLeapYear() == false) {
      return 28;
    }
  }
  return null;
}
function returnMonth(val) {
  return `${months[val]}`;
}

function returnDay(val) {
  return `${days[val]}`;
}
export default {
  today,
  todayShort,
  returnMonth,
  returnDay,
  currentDayIndex,
  currentMonthIndex,
  currentWeekIndex,
  daysInMonth,
  isLeapYear,
};
