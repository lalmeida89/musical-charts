import React from 'react';

import {AreaChart,
				Area,
				XAxis,
				YAxis,
				CartesianGrid,
				Tooltip,
				RadialBarChart,
				RadialBar,
				Legend,
				LineChart,
				Line} from 'recharts';


export default class Charts extends React.Component {
	render () {

		var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
		//noteElem.innerHTML = noteStrings[note%12];
		//const tickFormatter = (tick) => moment(tick).format('HH:mm Do');
		/*<AreaChart width={600} height={300} data={null}
					margin={{top: 10, right: 30, left: 0, bottom: 0}}>
			<XAxis dataKey="time"/>
			<YAxis tickFormatter = {noteFormatter} dataKey='note'/>
			<CartesianGrid strokeDasharray="3 3"/>
			<Tooltip/>
			<Area type='monotone' dataKey='note' stroke='#8884d8' fill='#8884d8' />
		</AreaChart>*/
		const noteFormatter = (note) => noteStrings[note%12];
  	return (
    	<div>

				<LineChart width={600} height={300} data={this.props.notes}>
       		<XAxis name={this.props.notes.time/100} dataKey="time" padding={{left: 30, right: 30}}/>
       		<YAxis tickFormatter = {noteFormatter}/>
       		<CartesianGrid strokeDasharray="3 3"/>
       		<Tooltip />
       		<Legend />
       		<Line type="monotone" name="pitch" dataKey="note" stroke="#8884d8" activeDot={{r: 8}}/>
      	</LineChart>

      </div>
    );
  }
}
