import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const CustomizedTypography = styled(Typography)`
  color: #000055;
  :hover{
    color:#75125c;

  }`;
export default function styles() {
  
  
  return (
    
    <Box>
      <CustomizedTypography>Hello World</CustomizedTypography>
    </Box>
  )
}
