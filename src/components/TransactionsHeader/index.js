import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Dropdown from '../Dropdown';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from '../Navbar';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  bar: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: '100px',
  },
  selectRoot: {
    color: "white",
  },
}));

export default function TransactionsHeader() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    category: ''
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={classes.grow}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Rongyrázások
        </Typography>
          <Dropdown />
          <Button variant="contained" >Új Pénzszórás</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}