import React from 'react';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default class Charts extends React.Component {
	render () {
  	return (
    	<div>

        <AreaChart width={600} height={200} data={this.props.notes}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="time"/>
          <YAxis dataKey="note"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='note' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </div>
    );
  }
}
