import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Alert, Box, Button, Paper } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { createApi } from 'unsplash-js'
import { makeStyles } from 'tss-react/mui'
import { getWeatherData } from '../services'
import { generateRandomNumber } from '../utils'
import HeroImageWithText from '../components/HeroImageWithText'
import CardTray from '../components/CardTray'

const useStyles = makeStyles()((_theme, { bgImage }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    padding: '80px',
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    filter: 'blur(24px)',
    transform: 'scale(1.4)',
  },
  paper: {
    maxWidth: '800px',
    width: '100%',
    marginInline: 'auto',
    filter: 'blur(0px)',
  },
  cardTray: {
    backgroundColor: 'seagreen',
  },
}))

const unSplashApi = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_MY_API_KEY,
})

const WeatherDetail = () => {
  const [bgImage, setBgImage] = useState({
    url: 'https://images.unsplash.com/photo-1614089782989-efb339bfd01d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Nzg2MzZ8MHwxfHNlYXJjaHwzfHxnb29kJTIwd2VhdGhlcnxlbnwwfDB8fHwxNzEwMzgwMDAyfDA&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'Alt Image',
  })
  const [weather, setWeather] = useState({
    data: {},
    loading: false,
    error: false,
  })

  const { classes } = useStyles({ bgImage: bgImage.url })
  const [searchParams] = useSearchParams()
  const city = searchParams.get('city')

  useEffect(() => {
    setWeather({ ...weather, loading: true })
    const fetchData = async () => {
      try {
        const weatherData = await getWeatherData(city)
        setWeather({ ...weatherData, loading: false })
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [city])

  const IMAGE_LIMIT = 10
  const randomIndex = generateRandomNumber(IMAGE_LIMIT)

  // Set random image related to the city entered as background
  useEffect(() => {
    unSplashApi.search
      .getPhotos({
        query: city,
        orientation: 'landscape',
        per_page: IMAGE_LIMIT,
        contentFilter: 'high',
      })
      .then((result) => {
        if (result.response.results[randomIndex]?.urls) {
          setBgImage({
            url: result.response.results[randomIndex].urls.regular,
            alt: result.response.results[randomIndex].alt_description,
          })
        }
      })
      .catch((error) => {
        console.error('Failed to fetch image:', error)
      })
  }, [city])

  const navigate = useNavigate()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.background} />
      <Paper className={classes.paper}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
          Go Home
        </Button>
        {weather.loading && <Alert severity="warning">Loading {city}...</Alert>}
        {weather.error && (
          <Alert severity="error">
            {weather.errMsg} for searched city &apos;{city}&apos;
          </Alert>
        )}
        {!weather.loading && !weather.error && (
          <>
            <HeroImageWithText
              image={bgImage.url}
              title={`${weather.data.city_name} | ${weather.data.country_code}`}
            />
            <CardTray weatherData={weather.data.data} />
          </>
        )}
      </Paper>
    </Box>
  )
}

export default WeatherDetail
