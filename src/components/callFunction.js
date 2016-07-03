import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import { Link } from 'react-router';
import NetworkHelperClass from '../helpers/networkHelper'

export default class callFunction extends Component {

	constructor(props) {
		super(props)

		this.state = {
			device_id: this.props.params.deviceId,
			functionName: this.props.params.functionName,
			callFunctionResponse: null
		}
	}
	componentWillMount() {

		axios.post(`https://api.particle.io/v1/devices/${this.state.device_id}/${this.state.functionName}?access_token=d6576383889e1526c95853391923584b508071c4`,
				{ arg: 'testing callFunction!' })
			.then( (response) => {
					this.setState({
						callFunctionResponse: response.data
					})
			})
			.catch( (response) => {
					console.log('call function error! response: ', response)
			})
	}
	render() {
		
		return (
			<div>
				<NavBar />
				<div className="row view_device_function">
					{ this.state.callFunctionResponse ? <p><b>Id: </b>{ this.state.callFunctionResponse.id }</p> : null }
					{ this.state.callFunctionResponse ? <p><b>Last App: </b>{ this.state.callFunctionResponse.last_app }</p> : null }
					{ this.state.callFunctionResponse ? <p><b>Connected: </b>{ this.state.callFunctionResponse.connected.toString() }</p> : null }
					{ this.state.callFunctionResponse ? <p><b>Return Value: </b>{ this.state.callFunctionResponse.return_value }</p> : null }
				</div>
			</div>
			);
	}
}