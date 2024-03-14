import { Grid } from '@mui/material'
import PropTypes from 'prop-types'
import { WeatherCard } from './WeatherCard'
import { determineWeather, getDay } from '../utils'

const CardTray = ({ weatherData }) => {
  return (
    <Grid container sx={{ backgroundColor: 'seagreen' }}>
      {Array.isArray(weatherData) &&
        weatherData.map((w) => (
          <Grid xs={12} sm={6} md={3} lg={12 / 7} key={w.date}>
            <WeatherCard
              day={getDay(w.date)}
              wind_spd={w.wind_spd}
              temp={w.temp}
              date={w.date}
              weatherIconId={determineWeather(w.clouds, w.precip, w.temp)}
            />
          </Grid>
        ))}
    </Grid>
  )
}

export default CardTray

CardTray.propTypes = {
  weatherData: PropTypes.array,
}
