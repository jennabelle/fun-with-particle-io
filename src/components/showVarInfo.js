import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import { Link } from 'react-router';
import _ from 'underscore';

export default class ShowVarInfo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			device_id: this.props.params.deviceId,
			varName: this.props.params.varName,
			varInfo: null
		}
	}
	componentWillMount() {

		axios.get(`https://api.particle.io/v1/devices/${this.state.device_id}/${this.state.varName}?access_token=d6576383889e1526c95853391923584b508071c4`)
			.then( (response) => {
				console.log('var response data: ', response.data)
				this.setState({
					varInfo: response.data
				})
			})
			.catch( (response) => {
					console.log('show var error! response: ', response)
			})
	}
	render() {

		console.log('inside ShowVarInfo: ', this.state.varInfo)

		return (
			<div>
				<NavBar />
				{ this.state.varInfo ? <p><b>Variable Info: </b>Hello</p> : null }
			</div>
			);
	}
}