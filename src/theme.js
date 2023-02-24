import { createTheme, Typography } from "@mui/material";

export const theme =createTheme({
    palette: {
        primary:{
            main: "#F4005E",
            
        }
    }
    Typography:{
        h1:{
            fontsize:"20px"
        }
    }
    breakpoints :{
        values:{
            xs: 200px
        }
    }
});
