weekday(new Date(2017, 5, 19))

function weekday(date) {
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
 let monthOfYear = months[date.getMonth()]
 let fullDate = monthOfYear + date.getDay() + ', ' + year

  let days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ]
  let dayOfWeek = days[date.getDay()]
  return dayOfWeek
}

weekday(new Date(2017, 5, 15))

/*-----------------------------------------------------*/

function snippet(string, maxlength){
  if (string > maxlength) {
    return string.substring(0, maxlength - 3) + '...'
  } else {
    return string
  }
}

/*------------------------------------------------------*/

function numProps(obj) {
 let findProps = Object.keys(obj)
  return numProps.length
}

/*-----------------------------------------------------*/

let filterBetween(array, min, max) =
  arr.filter(function (x, min, max) {
    return x <= min && x >= max
  }
