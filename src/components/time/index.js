import 'date-fns';
import React from 'react';
// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';

export default function Datepicker(props) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  const [selectedDate, setSelectedDate] = React.useState(new Date(today));
  // console.log(selectedDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const fetch = () => {
    let dateObj = {
      date: selectedDate,
    }
    axios.post('http://localhost:3000', dateObj)
      .then(res => console.log(res.data));
    console.log(dateObj);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> */}
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          label={props.label}
          value={selectedDate}
          onChange={handleDateChange}
          onClose={fetch}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      {/* </Grid> */}
    </MuiPickersUtilsProvider>
  );
}
