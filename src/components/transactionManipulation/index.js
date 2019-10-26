import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import Dropdown from '../Dropdown';
import Grid from '@material-ui/core/Grid';
import Datepicker from '../datepicker';

function Transactions(props) {
  const handleAccept = () => {
    console.log('Új dorbézolás hozzáadva az eddigi gyengeségeidhez');
    props.handleClose(false);
  }

  const closeModal = () => {
    props.handleClose(false);
  };

  return (
    <Modal
      open={props.newTransactionModalIsOpen}
      handleClose={closeModal}
      handleConfirm={handleAccept}
      confirm='Gyenge voltam, pazaroltam :('
      cancel='Erős vagyok!'
    >
      <DialogTitle id='form-dialog-title' style={{textAlign:'center'}}>Kótyavetyélés nyilvántartásba vétele</DialogTitle>
      <DialogContent>
        <Datepicker />
        <Grid container justify="space-around">
        <Dropdown />
        </Grid>
        <TextField
          variant='outlined'
          margin='dense'
          id='comment'
          label='Hozzáfűzni való'
          type='text'
          fullWidth
        />
        <TextField
          variant='outlined'
          margin='dense'
          id='amount'
          label='Összeg'
          type='number'
          fullWidth
        />
      </DialogContent>
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    newTransactionModalIsOpen: state.newTransactionModalIsOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: (payload) => dispatch({ type: 'HANDLENEWTRANSACTIONMODAL', payload}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
