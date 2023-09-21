import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react'
import { DetailList } from './DetailList';
import { ServiceList } from './ServiceList';
import { verticalNavItems } from './NavBarList';
import { NavLink } from 'react-router-dom';


const NavListDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const [openServ, setOpenServ] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickServ = () => {
    setOpenServ(!openServ);
  };

  return (
    <Box sx={{ width: 250}}>
        <nav>
            <List>
                {verticalNavItems.map(i => (
                    <NavLink to={i.link} key={i.id}>
                        <ListItemButton
                            onClick={i.nested?handleClick:i.nestedServ?handleClickServ:undefined}
                            >
                                <ListItemIcon>
                                    {i.icon}
                                </ListItemIcon>
                                <ListItemText primary={i.title}/>
                                {i.nested? open ? <ExpandLess /> : <ExpandMore /> : ''}
                                {i.nestedServ? openServ ? <ExpandLess /> : <ExpandMore /> : ''}
                            </ListItemButton>
                    </NavLink>
                 ))}
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <DetailList />
                </Collapse> 
                <Collapse in={openServ} timeout="auto" unmountOnExit>
                    <ServiceList />
                </Collapse>         
            </List>
        </nav>
        <Divider />
    </Box>
  )
}

export {NavListDrawer}