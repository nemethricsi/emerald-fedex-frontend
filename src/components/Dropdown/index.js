import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectRoot: {
    color: "white"
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    dolog: '',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
      // TODO: fetch categories
    }));
  };

  const dolgok = [];
  fetch(`https://5d88cdb9feddff0014e15fd6.mockapi.io/categories?name=${values.dolog}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  })
    .then(res => res.json())
    .then(json => {
      json.forEach(dolog => {
        dolgok.push(dolog.name);
      })
    });

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel classes={{ root: classes.selectRoot }} htmlFor="categories">Dolog</InputLabel>
        <Select
          value={values.dolog}
          onChange={handleChange}
          inputProps={{
            name: 'dolog',
            id: 'categories',
          }}
          classes={{ root: classes.selectRoot }}
        >
          <MenuItem value="">
            <em>Összes</em>
          </MenuItem>
          {dolgok.map(dolog => <MenuItem value={dolog}>{dolog}</MenuItem>)}
        </Select>
        <FormHelperText classes={{ root: classes.selectRoot }}>Szűrj rá dolgokra</FormHelperText>
      </FormControl>
    </form>
  );
}