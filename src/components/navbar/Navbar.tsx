import React, { ReactElement } from "react";

import { 
    Box, 
    CssBaseline, 
    Toolbar,
    Divider, 
    Typography,
    useTheme,
    List
} from "@mui/material";


interface NavbarProps {
    title?: React.FC;
    links?: React.FC[];
    tools?: React.FC[];
  }

const Navbar: React.FC<NavbarProps> = ({
    title,
    links,
    tools
}) => {

    const Title = title;
    
    const theme = useTheme();
    return (
    <Box sx={{
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
        }}>
    <CssBaseline/>
    <Box sx={{p: 1, flexGrow: 1}}>
        <Toolbar>
            { Title ? <Title/> : 'Add a title' }
        </Toolbar>
        <Divider/>
        <Toolbar sx={{p: 1, flexGrow: 1}}>
            <List sx={{display: 'flex', flexDirection: 'column', marginTop: 1}}>
                {links ? links.map((Item, idx) => <Item key={idx} />) : 'Navbar'}
            </List>
        </Toolbar>
    </Box>
    <Divider/>
    <Toolbar sx={{p: 1}}>
        {tools && tools.map((Tool, key) => <Tool key={key}></Tool>)}
    </Toolbar>
  </Box>
)}

Navbar.defaultProps = {

}

export default Navbar;