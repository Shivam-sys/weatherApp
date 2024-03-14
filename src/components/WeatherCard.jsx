import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import WeatherIcon from './icons/WeatherIcon'

const useStyles = makeStyles()(() => ({
  card: {
    backgroundColor: 'seagreen',
    paddingTop: 8,
    flex: 1,
  },
  cardHead: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: '8px',
  },
  cardContent: {
    alignItems: 'center',
  },
}))

export const WeatherCard = ({ date, temp, wind_spd, weatherIconId, day }) => {
  const { classes } = useStyles()
  return (
    <Card variant="outlined" className={classes.card}>
      <CardHeader
        component={() => (
          <Stack direction={'row'} className={classes.cardHead}>
            <Chip label={day} size="small" color="secondary" />
            <Typography variant="body2" color="white">
              {date.slice(-2)}
            </Typography>
          </Stack>
        )}
      ></CardHeader>
      <CardContent>
        <Stack className={classes.cardContent}>
          <WeatherIcon iconId={weatherIconId} />
          <Typography color={'white'} sx={{ mt: 2 }}>
            {temp}&deg;F
          </Typography>
          <Typography color={'white'}>{wind_spd} mph</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

WeatherCard.propTypes = {
  date: PropTypes.string,
  temp: PropTypes.number,
  wind_spd: PropTypes.number,
  weatherIconId: PropTypes.oneOf([
    '01d',
    '02d',
    '03d',
    '04d',
    '09d',
    '10d',
    '11d',
    '13d',
    '50d',
  ]),
  day: PropTypes.oneOf(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
}
