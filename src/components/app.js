import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

	constructor() {
		super()

		this.state = {}
	}
	getDeviceList() {
		axios.get(`https://api.particle.io/v1/devices?access_token=${this.props.access_token}`)
			.then(function(response) {
				console.log('It worked!');
			})
			.catch(function(response) {
				console.log('Hello!');
			})
	}
	render() {
		return (
			<div className='app_background'>

				<div className='app_header'></div>

				<div className="row">
					<div className="col-md-6 col-md-offset-5">
						<button type="button" className="btn btn-primary get_device_list" onClick={this.getDeviceList}>
							Show My Devices
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;