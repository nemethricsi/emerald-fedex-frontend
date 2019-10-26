import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   gomb: {
//     marginTop: '100px',
//   },
// }));

export default function Modal(props) {
  // const classes = useStyles();

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        {props.children}
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            {props.cancel}
          </Button>
          <Button variant="contained" onClick={props.handleConfirm} color="primary">
            {props.confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
