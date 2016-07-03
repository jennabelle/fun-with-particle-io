import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import { Link } from 'react-router';
import _ from 'underscore';
import NetworkHelperClass from '../helpers/networkHelper'

export default class ShowVarInfo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			device_id: this.props.params.deviceId,
			varName: this.props.params.varName,
			varInfo: null,
			varCoreInfo: null
		}
	}
	componentWillMount() {

		axios.get(`${NetworkHelperClass.getUrl()}/${this.state.device_id}/${this.state.varName}?access_token=${NetworkHelperClass.getAccessToken()}`)
			.then( (response) => {
				this.setState({
					varInfo: response.data,
					varCoreInfo: response.data.coreInfo
				})
			})
			.catch( (response) => {
				console.log('ShowVarInfo error: ', response)
			})
	}
	render() {

		return (
			<div>
				<NavBar />
				<div className="row view_device_variable">
					{ this.state.varInfo ? <p><b>CMD: </b>{ this.state.varInfo['cmd'] }</p> : null }
					{ this.state.varInfo ? <p><b>Name: </b>{ this.state.varInfo['name'] }</p> : null }
					{ this.state.varInfo ? <p><b>Result: </b>{ this.state.varInfo['result'] }</p> : null }
					{ this.state.varCoreInfo ? <p><b>Core Info </b></p> : null }
					<ul>
						{ this.state.varCoreInfo ? <li><b>Device Id: </b>{ this.state.varCoreInfo.deviceID }</li> : null }
						{ this.state.varCoreInfo ? <li><b>Product Id: </b>{ this.state.varCoreInfo.product_id }</li> : null }
						{ this.state.varCoreInfo ? <li><b>Last App: </b>{ this.state.varCoreInfo.last_app }</li> : null }
						{ this.state.varCoreInfo ? <li><b>Last Heard: </b>{ this.state.varCoreInfo.last_heard }</li> : null }
						{ this.state.varCoreInfo ? <li><b>Connected: </b>{ this.state.varCoreInfo.connected.toString() }</li> : null }
						{ this.state.varCoreInfo ? <li><b>Last Handshake At: </b>{ this.state.varCoreInfo.last_handshake_at }</li> : null }
					</ul>
				</div>
			</div>
			);
	}
}