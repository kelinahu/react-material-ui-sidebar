import React, { useState } from 'react'
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom'
import { 
AppBar, 
Toolbar, 
ListItem, 
IconButton, 
ListItemText, 
ListItemIcon,
Avatar, 
Divider, 
List, 
Typography, 
Box
} from '@material-ui/core'
import {
    Home,
    Info,
    ContactMail,
    AccountCircle
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../avatar.png'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    MenuIcon : {
        color: "inherit",
        marginRight: theme.spacing(2),
    },
    menuSliderContainer : {
        width: 250,
        height: "100%"
    },
    avatar : {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
        color: "inherit",
        textDecoration: "none"
      },
      proflie : {
          color: "inherit"
      }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <Info/>,
        listText: "About",
        listPath: "/about"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contact"
    }
]


const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    const classes = useStyles();

    const sideList = slider => (
        <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider("right", false)}>
            <Avatar src={avatar} alt="Bunny" className={classes.avatar} />
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=>(
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    
    )
    return (
        <div className={classes.root}>
        
        <Box component="nav">
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.MenuIcon} onClick={toggleSlider("right", true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Link to="/" className={classes.title}>
                    <Typography variant="h5" className={classes.title}>
                        Material-UI Sidebar and Navbar
                    </Typography>
                    </Link>
                    <MobilRightMenuSlider
                    anchor="left"
                    open={state.right}
                    onClose={toggleSlider("right", false)}
                    >{sideList("right")}
                    </MobilRightMenuSlider>
                    <IconButton className={classes.proflie}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/profile">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/progress">
                    <MenuItem onClick={handleClose}>Progress</MenuItem>
                </Link>
                <Link to="/settings">
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                </Link>
            </Menu>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
}

export default Navbar
