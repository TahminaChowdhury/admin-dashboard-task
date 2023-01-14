import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';

const ListItems = () => {
    const [open, setOpen] = useState(false);
    return (
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
    );
};

export default ListItems;