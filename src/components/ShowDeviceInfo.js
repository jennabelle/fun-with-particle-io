import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './navbar'
import { Link } from 'react-router'
import _ from 'underscore'
import NetworkHelperClass from '../helpers/networkHelper'

export default class ShowDeviceInfo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			device_id: this.props.params.deviceId, // passed in parameter from routes.js
			device_object: {},
			variable_object: {},
			variable_object_keys: [], // save all object keys for variable_object
			selected_variable: '' // user selected variable
		}
	}
	componentWillMount() {

		axios.get(`${NetworkHelperClass.getUrl()}/${this.state.device_id}?access_token=${NetworkHelperClass.getAccessToken()}`)
			.then( (response) => {
					this.setState({
						device_object: response.data,
						variable_object: response.data.variables
					});
			})
			.catch( (response) => {
					console.log('show device error! response: ', response)
			})
	}
	render() {

		// save object keys of 'variables' field to easily iterate over and render
		this.state.variable_object ? _.each(this.state.variable_object, (val, key) => {

				if (this.state.variable_object.hasOwnProperty( key )) {
					this.state.variable_object_keys.push(key)
				} 
			}) : null

		return (
			<div>
				<NavBar />
				<div className="row view_device_info">
					<p><b>Name:</b> { this.state.device_object.name }</p>
					{ this.state.device_object.connected ? <p><b>Connected:</b> { this.state.device_object.connected.toString() }</p> : null }
					<p><b>Last IP Address:</b> { this.state.device_object.last_ip_address }</p>
					<p><b>Last Heard:</b> { this.state.device_object.last_heard }</p>
					<p><b>Product Id:</b> { this.state.device_object.product_id }</p>
					<p><b>Platform Id:</b> { this.state.device_object.platform_id }</p>
					<p><b>Status:</b> { this.state.device_object.status }</p>
					{ this.state.device_object.cellular ? <p><b>Celluluar:</b> { this.state.device_object.cellular.toString() }</p> : null }
					
					<p><b>Functions:</b></p>
					{ 
						this.state.device_object.functions ? this.state.device_object.functions.map( (val, index) => {
								return <ul key={ index }><li><Link to={ `ShowDeviceInfo/${this.state.device_id}/${val}` }>{ val }</Link></li></ul>
						}) : null
					}
					<p><b>Variables:</b></p>
					{
						this.state.variable_object_keys.map( (val, index) => {
							return <ul key={ index }><li><Link to={ `ShowVarInfo/${this.state.device_id}/${val}` }>{ val }</Link></li></ul>
						})
					}
				</div>
			</div>
			);
	}
}