import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  stylePaper: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    background: 'white',
    '&:hover': {
       background: '#DCDCDC',
  },
  },
 
  deletebutton: {
    margin: theme.spacing(1),
    color: 'red'
  },
  editbutton: {
    color: 'black'
  }
}));

const data = [{
  id: 1,
  date: '2019-10-25',
  category: 'kaja',
  description: 'hambi',
  amount: 700
}, {
  id: 2,
  date: '2019-10-22',
  category: 'pia',
  description: 'sör',
  amount: 700
}];

export default function Kolteslistazo() {
  const classes = useStyles();

  return (
    <div className={classes.wholePaper}>
      {data.map(item => (
        <Paper className={classes.stylePaper} key={item.id} >
          <Typography>
            {item.date}
          </Typography>
          <Typography>
            {item.category}
          </Typography>
          <Typography>
            {item.description}
          </Typography>
          <Typography>
            {item.amount}
          </Typography>
          <Typography>
            <IconButton className={classes.editbutton} aria-label="delete" onClick={() => { console.log('edited') }} >
              <EditIcon />
            </IconButton>
          </Typography>
          <Typography >
            <IconButton className={classes.deletebutton} aria-label="delete" onClick={() => { console.log('deleted') }}>
              <DeleteIcon />
            </IconButton>
          </Typography>
        </Paper>
      ))}
    </div>
  )
}
