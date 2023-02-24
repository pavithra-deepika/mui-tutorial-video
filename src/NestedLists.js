import React, { useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Collapse from '@mui/material/Collapse';





const array = ["first", "second", "third"]
export default function NestedLists() {
  const [open, setOpen] = useState()
  return (
    <div>
        <Box> 
          <ListItem divider>
                    <ListItemButton> 
                    <InboxIcon />
                
                    <ListItemText primary={List} />
                    </ListItemButton>
                </ListItem>

          <Collapse in={open}> 
            <List sx={{ width: 300, background: "gray"}}>
                {array.map((ele) => (
                    <ListItem divider>
                    <ListItemButton onClick={() => setOpen(false)}> 
                    <DraftsIcon />
            
                    <ListItemText primary={ele} />
                    </ListItemButton>
                </ListItem>

                    ))}
            </List>
          </Collapse>
        </Box>


    </div>
  )
}

