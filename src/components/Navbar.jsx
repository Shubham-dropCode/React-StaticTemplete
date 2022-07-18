import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Toolbar, Typography, Theeme, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  diplay: 'flex',
  justifyContent: 'space-between'
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "wheat",
  padding: "0px 10px",
  borderRadius: '6px',
  width: '50%'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up("sm")]: {
    display: 'flex'
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]: {
    display: 'none'
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar bgcolor='skyblue' position='sticky'>
      <StyledToolbar>
        <Typography variant='6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: '30px', hight: '30px' }}
            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            onClick={(e) => setOpen(true)} />

        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>

          <Avatar sx={{ width: '30px', hight: '30px' }} src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          <Typography variant='span'>Rocky</Typography>

        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
