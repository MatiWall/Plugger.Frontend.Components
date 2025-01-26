import React from 'react';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { Link } from 'react-router-dom'


const SideBarTool= ({
    content
}: {
    content: React.FC,
}) => {

    const Content = content;

    return (
        <ListItem 
            disablePadding
            sx={{
                p: 0,
                m: 0
            }}
            >
            <Content/>
        </ListItem>
    )
}

export default SideBarTool;