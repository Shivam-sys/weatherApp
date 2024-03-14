/**
 * determineWeather
 * @param {Number} clouds
 * @param {Number} precip
 * @param {Number} temp
 * @returns the OpenWeatherAPI standard iconID of of weather on basis of given parameter
 */
export const determineWeather = (clouds, precip, temp) => {
  if (clouds <= 10) {
    return '01d' //clear sky
  } else if (clouds <= 25) {
    return '02d' // few clouds
  } else if (clouds <= 50) {
    return '03d' //'scattered_clouds'
  } else if (clouds <= 85) {
    return '04d' //'broken_clouds'
  } else if (precip > 0) {
    if (temp < 0) {
      return '13d' // Snow if temperature is below freezing
    } else if (precip < 0.1) {
      return '09d' // Light rain if precipitation is less than 0.1
    } else if (precip < 0.5) {
      return '10d' // Moderate rain if precipitation is less than 0.5
    } else {
      return '11d' // Heavy rain for higher precipitation values
    }
  } else {
    return '50d' //mist
  }
}

/**
 * getDay
 * @param {string} date
 * @returns day of a date
 */
export const getDay = (date) => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return dayNames[new Date(date).getDay()]
}

/**
 * generateRandomNumber
 * @param {Number} max
 * @returns a random number between 0 to Max(excluding max)
 */
export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
}
