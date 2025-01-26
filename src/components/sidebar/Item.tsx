import React from 'react';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { Link } from 'react-router-dom'


const SideBarNavItem = ({
    path,
    text,
    icon
}: {
    path: string,
    text: string,
    icon: React.ReactNode
}) => {


    return (
        <ListItem 
            key={text} 
            disablePadding
            sx={{
                p: 0,
                m: 0
            }}
            >
            <ListItemButton 
            component={Link} 
            to={path}
            sx={{
                p: 0
            }}
            >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}

export default SideBarNavItem;