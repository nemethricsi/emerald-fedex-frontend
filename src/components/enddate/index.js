import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { connect } from 'react-redux';

function DatepickerEnd(props) {
    const handleDateChange = date => {
        let finalDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        if (finalDate < props.selectedBeginDate) {
            props.setError(true);
            props.setText('Nem vagy te McFly!');
        } else {
            props.setError(false);
            props.setSelectedEndDate(finalDate);
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
                error={props.endErrorHandling}
                label={props.endText}
                value={props.selectedEndDate}
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
        endErrorHandling: state.endErrorHandling,
        endText: state.endText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedEndDate: (payload) => dispatch({ type: 'SETEND', payload }),
        setError: (payload) => dispatch({ type: 'SETENDERROR', payload }),
        setText: (payload) => dispatch({ type: 'SETENDTEXT', payload }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatepickerEnd);
