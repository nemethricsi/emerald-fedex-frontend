import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { connect } from 'react-redux';

function DatepickerBegin(props) {
  const handleDateChange = (date) => {
    let finalDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    if (finalDate > props.selectedEndDate) {
      props.setError(true);
      props.setText('Irgum-burgum, i-dő-pont!');
    } else {
      props.setError(false);
      props.setSelectedBeginDate(finalDate);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy-MM-dd"
        margin="normal"
        id="date-picker-inline"
        error={props.beginErrorHandling}
        label={props.beginText}
        value={props.selectedBeginDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedBeginDate: state.selectedBeginDate,
    selectedEndDate: state.selectedEndDate,
    beginErrorHandling: state.beginErrorHandling,
    beginText: state.beginText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedBeginDate: (payload) => dispatch({ type: 'SETBEGIN', payload }),
    setError: (payload) => dispatch({ type: 'SETBEGINERROR', payload }),
    setText: (payload) => dispatch({ type: 'SETBEGINTEXT', payload}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatepickerBegin);
