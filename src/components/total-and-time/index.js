import Datepicker from '../time';
import React, { Component } from 'react';
import sumCosts from '../../utilities/sum/sum';

class TotalAndTime extends Component {
    render() {
        return (
          <div>
          <span>
          <Datepicker label="Dínom-dánom kezdete"/>
          <Datepicker label="Dorbézolás megelégelése"/>
          </span>
          <div>
          Totál tékozlás: {sumCosts([1,2,3])} HUF
          </div>
          </div>
        )
    }
} 

export default TotalAndTime
