import React from "react";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const Test = () => {
  return (
    <div>
      <div>
        <Typography
          variant="h4"
          sx={{ color: "red", border: "1px solid black", borderRadius: 5 }}
        >
          hello world
        </Typography>
      </div>
      <br></br>
      <div>
      <Button onClick={() =>alert("Button clicked") } variant="text" color="secondary" size="large" sx={{ margin:3 }}>
        First
        </Button>
      <Button onClick={() =>alert("Button clicked") } variant="contained"  color="success" size="medium" sx={{ margin:3 }}>
        Second
      </Button>
      <Button onClick={() =>alert("Button clicked") } variant="outlined" color="error" size="small" sx={{ margin:3 }}>
        Third
      </Button>
      </div>
      <div>
        
    
      </div>
    </div>
  );
};

export default Test;
