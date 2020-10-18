import React from 'react';
import { Line } from 'react-chartjs-2';
import { Button, Input, Label, Form, FormGroup } from 'reactstrap';

class UploadPlot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	handleCSV() {
		let file = document.getElementById("csv-data").files[0];
		let reader = new FileReader();

		reader.addEventListener('load', (e) => {
			let data = e.target.result.split(',').map((x) => +(x));
			this.setState({
				data: data
			});
		})

		reader.readAsText(file);
	}
	
	render() {

		var form = (
			<Form>
				<FormGroup>
					<Label for="csv-data">Upload CSV data</Label>
					<Input id="csv-data" type="file" name="csv-data" accept=".csv"/>
					<br />
					<Button type="button" onClick={() => this.handleCSV()}>
						Plot!
					</Button>
				</FormGroup>
			</Form>
		);

		return ([
			form,
			<Plot data={this.state.data} />
		])
	}
}

class Plot extends React.Component {
	constructor(props) {
		super(props);
		
		this.data = {
			labels: [],
			datasets: [
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
					data: []
				}
			]
		}
		
		this.options = {
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


	render() {
		this.data.datasets[0].data = this.props.data;
		this.data.labels = [...Array(this.props.data.length).keys()];
		
		return (
			<Line
				data={this.data}
				options={this.options}
			/>
		);
	}
}

export default UploadPlot;