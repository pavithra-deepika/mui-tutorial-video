import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';


const Form = () => {
    const [name, setName] = useState("")
   
  return (
    <div>
        <TextField 
    
          variant="outlined"
          placeholder='Name' 
          sx={{ margin:3 }} 
          value={name} onChange={(e) => setName(e.target.value)} 
          />
        <TextField 
         variant="standard" 
         placeholder='password' 
         sx={{ margin:3 }}
          />
        <TextField  
        variant="filled" 
        placeholder='Email' 
        sx={{ margin:3 }} 
           />
        <Typography>
            {name}
        </Typography>


    </div>
  )
}

export default Form