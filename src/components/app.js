import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './navbar';

class App extends Component {

	constructor() {
		super()

		this.state = {}
	}
	getDeviceList() {
		axios.get('https://api.particle.io/v1/devices?access_token=d6576383889e1526c95853391923584b508071c4')
			.then(function(response) {
				console.log('It worked! Response: ', response);
			})
			.catch(function(response) {
				console.log('Hello!');
			})
	}
	render() {
		return (

			<div>
				<NavBar />
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
			</div>);
	}
}

export default App;