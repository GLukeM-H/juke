import React from 'react';
import { Line } from 'react-chartjs-2';

class Plot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				labels : ["Monday","Tuesday","Hayday","Cakeday"],
				datasets : [
					{
						label: "a line",
						fill: true,
						lineTension: 0.5,
						backgroundColor: "rgba(75,192,192,1)",
						pointBackgroundColor: "rgba(0, 255, 100, 0.6)",
						hoverBorderColor: "rgba(255, 255, 0, 1)",
						pointRadius: 15,
						borderColor: "rgba(0,0,0,1)",
						borderWidth: 2,
						data : [5,2,20,-4]
					},
					{
						label: "another line",
						fill: true,
						lineTension: 0.5,
						backgroundColor: "rgba(220,102,102,1)",
						pointBackgroundColor: "rgba(0, 255, 100, 0.6)",
						hoverBorderColor: "rgba(255, 255, 0, 1)",
						pointRadius: 15,
						borderColor: "rgba(0,0,0,1)",
						borderWidth: 2,
						data : [11,22,33,33]
					}
				]
			},
			options: {
				title: {
					display: true,
					text: 'Testing react-chartjs-2',
					fontSize: 20
				},
				legend: {
					display: true,
					position: 'right'
				}
			}

		}
	}

	render() {
		return (
			<Line
				data={this.state.data}
				options={this.state.options}
			/>
		);
	}
}

export default Plot;