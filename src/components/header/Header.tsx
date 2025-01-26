import React from 'react'
import {
    Box, 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material'


const Header = ({icon, content}: {icon?: React.FC, content?: React.FC}) => {

    const Icon = icon;
    const Content = content;

  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { Icon ? <Icon></Icon> : 'Icon'}
          </Typography>
          <Box>
            {Content ? <Content/> : 'Add content using headerContentRef attached to app, layout, header'}
          </Box>
          <Box>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export {
    Header
}