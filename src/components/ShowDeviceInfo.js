import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
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

		return (
			<div>
				<p><b>Name:</b> { this.state.device_object.name }</p>
				{ this.state.device_object.connected ? <p><b>Connected:</b> { this.state.device_object.connected.toString() }</p> : null }
				<p><b>Last IP Address:</b> { this.state.device_object.last_ip_address }</p>
				<p><b>Last Heard:</b> { this.state.device_object.last_heard }</p>
				<p><b>Product Id:</b> { this.state.device_object.product_id }</p>
				<p><b>Platform Id:</b> { this.state.device_object.platform_id }</p>
				<p><b>Status:</b> { this.state.device_object.status }</p>
				{ this.state.device_object.cellular ? <p><b>Celluluar:</b> { this.state.device_object.cellular.toString() }</p> : null }
				
				<p><b>Functions:</b></p>
				{ this.state.device_object.functions ? this.state.device_object.functions.map( (name, index) => {
							return <ul key={index}><li><Link to={ `ShowDeviceInfo/${this.state.device_id}/${name}` }>{ name }</Link></li></ul>
					}) : null
				}
				
			</div>
			);
	}
}