import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


export default function Lists() {
    const array = ["first", "second", "third"]
  return (
    <div>
        <Box> 
            
            <List sx={{ width: 300, background: "gray"}}>
                {array.map((ele) => (

                    <ListItem divider>
                    <ListItemButton> 
                    <DraftsIcon />
                
                    <ListItemText primary={ele} />
                    </ListItemButton>
                </ListItem>
                    ))}
            </List>
        </Box>


    </div>
  )
}
