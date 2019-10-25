import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Modal from '../Modal';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '10px',
  },
  button: {
    marginLeft: '10px',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleRegister = () => {
    console.log('u r registered!');
  }

  const handleLogin = () => {
    console.log('u r logged in!')
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleLoginOpen}>
        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
        <p>Kerülj beljebb!</p>
      </MenuItem>
      <MenuItem onClick={handleRegisterOpen}>
        <IconButton color="inherit">
          <LockOpenIcon />
        </IconButton>
        <p>nyilvántartásba vétel</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <AccountBalanceWalletIcon className={classes.logo} />Erszény
          </Typography>
          <div className={classes.root} />
          <div className={classes.sectionDesktop}>
            <Button onClick={handleLoginOpen} className={classes.button} endIcon={<ExitToAppIcon />} color="inherit">Kerülj beljebb!</Button>
            <Button onClick={handleRegisterOpen} className={classes.button} endIcon={<LockOpenIcon />} variant="contained" >nyilvántartásba vétel</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Modal
        open={isLoginOpen}
        handleClose={handleLoginClose}
        handleConfirm={handleLogin}
        confirm="beljebb kerülés"
        cancel="á, nem"
      >
        <DialogTitle id="form-dialog-title">Beljebb kerülés</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="username"
            label="Felhasználóneved"
            type="text"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="password"
            label="Jelszavad"
            type="password"
            fullWidth
          />
        </DialogContent>
      </Modal>
      <Modal
        open={isRegisterOpen}
        handleClose={handleRegisterClose}
        handleConfirm={handleRegister}
        confirm="nyilvántartásba!"
        cancel="á, nem"
      >
        <DialogTitle id="form-dialog-title">Nyilvántartásba vétel</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="username"
            label="Felhasználóneved"
            type="text"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="password"
            label="Jelszavad"
            type="password"
            fullWidth
          />
        </DialogContent>
      </Modal>
    </div >
  );
}