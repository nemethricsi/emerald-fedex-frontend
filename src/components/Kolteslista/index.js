import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  stylePaper: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10,
    background: 'white',
    '&:hover': {
      background: '#DCDCDC',
    },
  },
  date: {
    marginLeft: 10,
  },
  deletebutton: {
    margin: theme.spacing(1),
    color: 'red'
  },
  editbutton: {
    color: 'black'
  }
}));


function Kolteslistazo(props) {
  const classes = useStyles();
  const data = props.transactions;

  return (
    <div className={classes.wholePaper}>
      {data.map(item => (
        <Paper className={classes.stylePaper} key={item.id} >
          <Typography className={classes.date}>
            {item.date}
          </Typography>
          <Typography>
            {item.category}
          </Typography>
          <Typography>
            {item.description}
          </Typography>
          <Typography>
            {item.amount} Ft
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

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
};

export default connect(mapStateToProps, null)(Kolteslistazo);
