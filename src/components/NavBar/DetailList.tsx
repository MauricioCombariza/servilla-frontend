import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import { homeItems } from './NavBarList'
import { NavLink } from 'react-router-dom';

const DetailList = () => {
  return (
    <Box maxWidth={250}>
        <nav>
            <List>
                {homeItems.map(i => (
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

export {DetailList}