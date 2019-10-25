import DatepickerBegin from '../begindate';
import DatepickerEnd from '../enddate';
import React, { Component } from 'react';
import sumCosts from '../../utilities/sum/sum';
import { connect } from 'react-redux';

class TotalAndTime extends Component {
  render() {
    return (
      <div>
        <span>
          <DatepickerBegin />
          <DatepickerEnd />
        </span>
        <div>
          Totál tékozlás: {sumCosts([1, 2, 3])} HUF
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  endDate: state.selectedEndDate,
  startDate: state.selectedBeginDate
})

export default connect(mapStateToProps, null)(TotalAndTime)
