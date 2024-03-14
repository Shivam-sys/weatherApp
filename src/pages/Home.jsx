import { Box, Container, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Search from '../components/Search'
import background from '../assets/background.jpg'

const useStyles = makeStyles()((theme) => {
  return {
    wrapper: {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
    },
    container: {
      margin: '0 auto',
      padding: theme.spacing(5),
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(10),
      },
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(15),
      },
    },
    heading: {
      color: '#fdf4f4',
      marginInline: 'auto',
      textAlign: 'center',
      fontSize: '3rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '6rem',
      },
    },
  }
})

const Home = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Container fixed className={classes.container}>
        <Typography variant="h1" className={classes.heading}>
          Weather Forcast
        </Typography>
        <Search />
      </Container>
    </Box>
  )
}

export default Home
