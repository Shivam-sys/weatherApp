import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box, Button } from '@mui/material'
import { createSearchParams, useNavigate } from 'react-router-dom'

const useStyles = makeStyles()((theme) => ({
  wrapper: {
    display: 'flex',
  },
  input: {
    width: '80%',
    padding: theme.spacing(1),
    border: 'none',
    borderRadius: '8px',
    outline: 'none',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '130%',

    /* Responsive width */
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(40),
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(50),
    },
  },
  button: {
    height: '100%',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}))

const Search = () => {
  const { classes } = useStyles()
  const [searchText, setSearchText] = useState('')

  const handleKeyDown = (e) => {
    e.stopPropagation()
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const navigate = useNavigate()

  const handleSearch = () => {
    if (!searchText) return
    navigate({
      pathname: 'weather',
      search: `?${createSearchParams({
        city: searchText,
      })}`,
    })
  }

  return (
    <Box className={classes.wrapper}>
      <input
        className={classes.input}
        value={searchText}
        placeholder="Type and hit enter"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        autoFocus
      />
      <Button
        variant="contained"
        color="success"
        className={classes.button}
        disabled={!searchText}
        onClick={handleSearch}
        disableElevation
      >
        Get Weather
      </Button>
    </Box>
  )
}

export default Search
