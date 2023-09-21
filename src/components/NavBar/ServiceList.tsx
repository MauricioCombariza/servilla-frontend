import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import { serviceItems } from './NavBarList'
import { NavLink } from 'react-router-dom';

const ServiceList = () => {
  return (
    <Box maxWidth={250}>
        <nav>
            <List>
                {serviceItems.map(i => (
                    <NavLink to={i.link} key={i.id}>
                        <ListItem sx={{backgroundColor: "#1E5128"}} key={i.id}>
                        <ListItemButton>
                            <ListItemIcon>
                                {i.icon}
                            </ListItemIcon>
                            <ListItemText primary={i.title} sx={{color: 'white'}}/>
                        </ListItemButton>
                    </ListItem>
                    </NavLink>
                ))}
            </List>
        </nav>

    </Box>
  )
}

export {ServiceList}