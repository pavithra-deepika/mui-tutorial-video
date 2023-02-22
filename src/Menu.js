import React, { useState } from 'react'
// import Menu from '@mui/material/Menu';
import { MenuItem, Menu, Button} from '@mui/material';

export default function MenuList() {
    const [anchor, setAnchor] = useState(null);
    const[open, SetOpen] = useState(false)
    const handleClose = () => {
        setAnchor(null);
       SetOpen(false);

    }
    const handleClick = (e) => {
        setAnchor(e.currentTarget);
        SetOpen(true)

    }
  return (
    <div>
        <Button variant='contained' onClick={handleClick}>Display</Button>
        <Menu anchorEl= {anchor} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Amount</MenuItem>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
            <MenuItem onClick={handleClose}>Acount</MenuItem>    
        </Menu>
    </div>
  )
}
