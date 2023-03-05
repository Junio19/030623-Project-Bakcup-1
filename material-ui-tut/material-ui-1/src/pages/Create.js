import React from 'react'
import { Typography, Button, ButtonGroup } from '@material-ui/core'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';





const Create = () => {
  return (
    <container>
        <Typography 
          variant='h6'
          color='secondaryText'
          
        >
          Create a New Note
        </Typography>

        <Button type='submit' color='primary'> Submit </Button>
        <Button type='submit' color='secondary' variant='outlined'> Submit </Button>

        <ButtonGroup color='secondary' variant='contained'>
          <Button>One</Button>
          <Button>Two</Button>
          
          <Button>Three</Button>
        </ButtonGroup>

        <AccessAlarm />
    </container>
  )
}

export default Create