import { AppBar,Button,IconButton,Toolbar, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
export default function App_Toolbar() {
  return (
    <div>
         <AppBar position="static" sx={{ ml:3 , width:1000, height: 50}}>
        <Toolbar variant="dense" sx={{minHeight: 36
}}>
          <Typography variant="h6" color="inherit" component="div" >
            Photos
          </Typography>
          <IconButton>
          Person
          </IconButton>
          <Button color="warning" size="large" sx={{ margin:3 }}  variant="text">login</Button>
        </Toolbar>
      </AppBar>

    </div>
  )
}

