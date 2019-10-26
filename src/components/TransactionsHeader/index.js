import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dropdown from '../Dropdown';
import Toolbar from '@material-ui/core/Toolbar';
import Transactions from '../transactionManipulation';
import { connect } from 'react-redux';


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

function TransactionsHeader(props) {
  const classes = useStyles();

  const openModal = () => {
    props.handleModal(true);
  }

  return (
    <div className={classes.grow}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Rongyrázások
        </Typography>
          <Dropdown />
          <Button variant="contained" onClick={openModal}>Új Pénzszórás</Button>
          <Transactions />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleModal: (payload) => dispatch({ type: 'HANDLENEWTRANSACTIONMODAL', payload }),
  }
}

export default connect(null, mapDispatchToProps)(TransactionsHeader);
