import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Button, Input, Label, Form, FormGroup } from 'reactstrap';

function benford(data) {
	var dig = Array(10).fill(0);
	for (let i in data) {
		let d;
		if (data[i] < 0){
			d = +(''+data[i])[1];
		} else {
			d = +(''+data[i])[0];
		}

		dig[d] += 1;
	}
	return dig
}

class UploadPlot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			benford: []
		}
	}

	handleCSV() {
		let file = document.getElementById("csv-data").files[0];
		let reader = new FileReader();

		reader.addEventListener('load', (e) => {
			let data = e.target.result.split(',').map((x) => +(x));
			this.setState({
				data: data,
				benford: benford(data)
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
			<PlotData data={this.state.data} />,
			<PlotBenford data={this.state.benford} />
		])
	}
}

class PlotData extends React.Component {
	constructor(props) {
		super(props);

		this.data = {
			labels: [],
			datasets: [
				{
					label: "data",
					fill: true,
					lineTension: 0.5,
					backgroundColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "rgba(0, 255, 100, 0.6)",
					hoverBorderColor: "rgba(255, 255, 0, 1)",
					pointRadius: 5,
					borderColor: "rgba(0,0,0,1)",
					borderWidth: 2,
					data: []
				}
			]
		}
		
		this.options = {
			title: {
				display: true,
				text: "Data",
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

class PlotBenford extends React.Component {
	constructor(props) {
		super(props);

		this.data = {
			labels: [0,1,2,3,4,5,6,7,8,9],
			datasets: [
				{
					label: "leading digits",
					fill: true,
					lineTension: 0.5,
					backgroundColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "rgba(0, 255, 100, 0.6)",
					hoverBorderColor: "rgba(255, 255, 0, 1)",
					borderColor: "rgba(0,0,0,1)",
					borderWidth: 2,
					data: []
				}
			]
		}
		
		this.options = {
			title: {
				display: true,
				text: "Benford's Law",
				fontSize: 20
			},
			legend: {
				display: true,
				position: 'right'
			},
			scales: {
				yAxes: [{
					offset: true
				}]
			}
		}
	}


	render() {
		this.data.datasets[0].data = this.props.data;
		
		return (
			<Bar
				data={this.data}
				options={this.options}
			/>
		);
	}
}

export default UploadPlot;