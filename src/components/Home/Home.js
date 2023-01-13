import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import NavItems from './NavItems/NavItems';
import { Link, Outlet } from 'react-router-dom';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Collapse from '@mui/material/Collapse';

const drawerWidth = 240;

const Home = (props) => {
  const [open, setOpen] = useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        Team 360
      </Toolbar>
      {/* SideBar */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnippetFolderIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnippetFolderIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/Attendance">
              <ListItemText primary="Attendance" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnippetFolderIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Employees" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnippetFolderIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Leaves" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnippetFolderIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Expense" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnippetFolderIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Notice" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnippetFolderIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Departments" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => setOpen(!open)}>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Settings" />
            </Link>
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ul style={{ paddingLeft: '90px' }}>
            <li>Approval</li>
            <li>Leave</li>
            <li>Office Setting</li>
            <li>My Subscriptions</li>
          </ul>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Logout" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Top Bar */}
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: ' #000000',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: ' #000000' }} />
          </IconButton>
          <NavItems />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              backgroundColor: '#1E2772',
              color: 'white',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#1E2772',
              color: 'white',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#F4F4F4',
          backgroundSize: 'cover',
          height: '100%'
        }}
      >
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
  );
};

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
