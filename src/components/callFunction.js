import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import _ from 'underscore';

export default class callFunction extends Component {

	constructor(props) {
		super(props)

		this.state = {
			device_id: this.props.params.deviceId,
			functionName: this.props.params.functionName
		}
	}
	componentWillMount() {

		axios.post(`https://api.particle.io/v1/devices/${this.state.device_id}/${this.state.functionName}?access_token=d6576383889e1526c95853391923584b508071c4`,
				{ arg: 'testing callFunction!' })
			.then( (response) => {
					console.log('call function response: ', response.data)
			})
			.catch( (response) => {
					console.log('call function error! response: ', response)
			})
	}
	render() {
		
		console.log('inside call function component!')

		return <div>callFunction!</div>
	}
}

// https://api.particle.io/v1/devices/2a002c000a47343232363230/rand?access_token=d6576383889e1526c95853391923584b508071c4
