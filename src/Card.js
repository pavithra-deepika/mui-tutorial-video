import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Cards() {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fnewborn-baby&psig=AOvVaw2zXoU-E6yA1nL9J8tw_40K&ust=1677305467688000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDdnfa_rf0CFQAAAAAdAAAAABAE" />
        title="green iguana"
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    </div>
  )
}
