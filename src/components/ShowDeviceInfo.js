import React, { Component } from 'react';
import axios from 'axios';

class ShowDeviceInfo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			device_id: this.props.params.deviceId
		}

		console.log('this.state.device_id: ', this.state.device_id);

		axios.get(`https://api.particle.io/v1/devices/${this.state.device_id}?access_token=d6576383889e1526c95853391923584b508071c4`)
			.then( (response) => {
					console.log('show device info works! response: ', response.data)
			})
			.catch( (response) => {
					console.log('show device info error! response: ', response.data)
			})
	}
	render() {

		return (
			<div>
				Hi!
			</div>
			);
	}
}

export default ShowDeviceInfo;