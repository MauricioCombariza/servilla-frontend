import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import { NavListDrawer } from './NavListDrawer'
import { DetailList } from './DetailList';
import MenuIcon from "@mui/icons-material/Menu";
import { ServiceList } from './ServiceList';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';

const NavBar = () => {
    const [open, setOpen] = React.useState(false)
    const [openNav, setOpenNav] = React.useState(false);
    const [openServ, setOpenServ] = React.useState(false)
    
  const handleClick = () => {
    setOpenNav(!openNav);
  };
  const handleClickServ = () => {
    setOpenServ(!openServ);
  };
  return (
    <>
    <AppBar position='static' >
        <Toolbar>
           <IconButton
            color='inherit'
            size='large'
            sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
            onClick={()=>setOpen(true)}
            >
                <MenuIcon />
            </IconButton>
            <Box sx={{flexGrow: 1}}>
            <NavLink to="/"> 
               <img
                src="https://res.cloudinary.com/combariza/image/upload/w_200,h_50,c_fill/v1643312479/Servilla/servilla_logo_white_pzdmwm.png"
                alt="logo1"
                className="cursor-pointer grow w-60 h-16"
              />
            </NavLink>
            </Box>
            
            {/* <Typography variant='h6' >News</Typography> */}
            <List>
                <ListItem disablePadding sx={{display: { xs: "none", sm: "block" }, "& :hover": { backgroundColor: "#4cd137" }}}>
                    <ListItemButton onClick={handleClick} sx={{justifyContent:'center'}}>
                        <ListItemIcon>
                            <HomeIcon sx={{ color:"white", "& :hover": { color: "Green" } }}/>
                        </ListItemIcon>
                        <ListItemText primary="NOSOTROS" />
                        {openNav ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding sx={{display: { xs: "none", sm: "block" }, "& :hover": { backgroundColor: "#4cd137" }}}>
                    <ListItemButton onClick={handleClickServ} sx={{justifyContent:'center'}}>
                        <ListItemIcon>
                            <PedalBikeIcon sx={{ color:{xs:"green", sm:"white"} }}/>
                        </ListItemIcon>
                        <ListItemText primary="SERVICIOS" />
                        {openServ ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
            </List>

           
        </Toolbar>
    </AppBar>
    <Drawer
    anchor="left"
    open={open}
    onClose={() => setOpen(false)}
    >
        <NavListDrawer />
    </Drawer>
    <Drawer
    anchor="left"
    open={openNav}
    onClose={() => setOpenNav(false)}
    >
        <DetailList />
    </Drawer>
    <Drawer
    anchor="left"
    open={openServ}
    onClose={() => setOpenServ(false)}
    >
        <ServiceList />
    </Drawer>
    </>
  )
}

export {NavBar}