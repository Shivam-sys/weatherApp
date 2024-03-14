/* eslint-disable no-unused-vars */
import axios from 'axios'
//import mock_response from './mocks/weatherbit_response'

/**
 *
 * @param {string} city
 * @returns gets historical weather data. If city passed doesn't matches, it gets data of similar ones.
 */
export const getWeatherData = async (city) => {
  try {
    const url = 'https://api.weatherbit.io/v2.0/history/energy'
    const api_key = import.meta.env.VITE_WEATHERBIT_MY_API_KEY

    const response = await axios.get(url, {
      params: {
        city: city,
        start_date: '2024-03-03',
        end_date: '2024-03-10',
        threshold: 63,
        units: 'I',
        key: api_key,
        tp: 'daily',
      },
    })

    const weatherData = response.data
    // const weatherData = mock_response

    //if city is not found, returns empty object as data
    if (!weatherData.city_id) {
      return { data: {}, error: true, errMsg: 'No Matching City Found' }
    }
    return { data: weatherData, error: false }
  } catch (error) {
    console.log('error', error.message)
    return { data: {}, error: true, errMsg: 'Some error occured' }
  }
}
