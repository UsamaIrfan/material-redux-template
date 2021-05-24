import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { firebase } from "../../config/Firebase";

// React router Import
import { Link } from "react-router-dom"

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Person from '@material-ui/icons/Person';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// Sign in Actions
import * as Auth from "../../store/actions/Auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  modalTitle: {
    color: theme.palette.primary,
    textAlign: "center"
  },
  modalButton: {
    marginTop: 10,
    textTransform: 'none',
    fontSize: 16,
  },
  googleButton: {
    marginTop: 10,
    backgroundColor: "#EA4335",
    fontSize: 16,
    color: "#fff",
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#ee6a5d',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ee6a5d',
    },
  },
  userName: {
    marginRight: 10,
  },
}));


export default function ButtonAppBar(props) {
  const classes = useStyles();

  const dispatch = useDispatch()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()

  useEffect(() => {

    const unsubsribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is Logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })
    return () => {
      // any clean up ligc goes in here
      unsubsribe();
    }
  }, [])

  // User Data
  const userLoggedIn = useSelector(state => state.Auth.user)

  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  // Form FUnctions
  const submitHandler = (e) => {
    e.preventDefault()
  }

  // Login FUnctions
  const googleLoginHandler = () => {
    dispatch(Auth.googleLogin(setOpen, setDisable));
  }

  const loginHandler = () => {
    dispatch(Auth.login(Email, Password, setOpen, setDisable))
  }

  // Logout FUnctions
  const logoutHandler = () => {
    handleMenuClose()
    dispatch(Auth.signOut());
  }

  // Menu Functions
  const handleProfileMenuOpen = () => {
    setAnchorEl(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      variant="menu"
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={anchorEl}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={logoutHandler}>Sign Out</MenuItem>
    </Menu>
  );

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {userLoggedIn && <ListItem button onClick={() => logoutHandler()}>
          <ListItemIcon ><Person /></ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>}
      </List> 
    </div>
  );

  const body = (
      <div className={classes.paper}>
        <Typography color="primary" className={classes.modalTitle} variant="h4" gutterBottom id="transition-modal-title">
          Login
      </Typography>
        <form className={classes.root} onSubmit={submitHandler} autoComplete="off">
          <TextField value={Email} onChange={(e) => setEmail(e.target.value)} label="Email" fullWidth type="email" helperText="example@site.com" />
          <TextField value={Password} onChange={(e) => setPassword(e.target.value)} label="Password" fullWidth type="password" />
          <Button onClick={() => loginHandler()} className={classes.modalButton} variant="contained" fullWidth color="primary">Login</Button>
          <Button onClick={() => googleLoginHandler()} className={classes.modalButton, classes.googleButton} variant="contained" fullWidth>Login With Google</Button>
        </form>
      </div>
  );

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Computerize
          </Typography>
            {!props.signupScreen && <div>
              {!userLoggedIn
                ?
                <>
                  <Button disabled={disable} onClick={() => setOpen(true)} color="inherit">Login</Button>
                  <Button disabled={disable} color="inherit"><Link style={{ color: "#fff", textDecoration: "none" }} to="/signup">Sign Up</Link></Button>
                </>
                :
                <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
                  <Typography variant="body1" className={classes.userName}>
                    {userLoggedIn.displayName}
                  </Typography>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <Avatar alt="Remy Sharp" src={userLoggedIn?.photoURL} className={classes.large} />
                  </IconButton>
                  <div>
                    {renderMenu}
                  </div>
                </div>
              }
            </div>}
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {body}
          </Fade>
        </Modal>
      </div>
  );
}
