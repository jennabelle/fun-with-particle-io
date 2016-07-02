import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';

export default class ShowDeviceInfo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			device_id: this.props.params.deviceId,
			device_object: {}
		}
	}
	componentWillMount() {
		axios.get(`https://api.particle.io/v1/devices/${this.state.device_id}?access_token=d6576383889e1526c95853391923584b508071c4`)
			.then( (response) => {
					this.setState({
						device_object: response.data
					});
			})
			.catch( (response) => {
					console.log('show device info error! response: ', response)
			})

	}
	render() {

		console.log('inside render! this.state.device_object: ', this.state.device_object)

		let currentDevice = this.state.device_object

		return (
			<div>
				<p>{ this.state.device_object.name }</p>
				{ this.state.device_object.connected ? <p>{ this.state.device_object.connected.toString() }</p> : null }
				<p>{ this.state.device_object.cellular }</p>
			</div>
			);
	}
}