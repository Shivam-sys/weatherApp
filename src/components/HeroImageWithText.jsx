import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme, { imageUrl }) => ({
  backgroundImageLayer: {
    position: 'relative',
    height: theme.spacing(43),
    padding: theme.spacing(2),
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundCover: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  heading: {
    fontSize: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    },
  },
}))

const HeroImageWithText = ({ image: imageUrl, title }) => {
  const { classes } = useStyles({ imageUrl })
  return (
    <Box className={classes.backgroundImageLayer}>
      <Typography variant="h2" color={'white'} className={classes.heading}>
        {title}
      </Typography>
    </Box>
  )
}

export default HeroImageWithText

HeroImageWithText.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
}
