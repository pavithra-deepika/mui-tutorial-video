import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function Colour() {
  const theme = useTheme();
  console.log(theme)
  return (
    <Box>
      <Typography variant='h1' color="primary">
       Hello World 
      </Typography>
    </Box>
  )
}
