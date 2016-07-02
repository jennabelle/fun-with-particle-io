import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import { Link } from 'react-router';
import _ from 'underscore';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = { device_list: [] }

		this.getDeviceList = this.getDeviceList.bind(this)
	}
	getDeviceList() {

		// let that = this;

		axios.get('https://api.particle.io/v1/devices?access_token=d6576383889e1526c95853391923584b508071c4')
			.then( (response) => {

				this.setState({
      		device_list: response.data
    		});
				
				// this.updateDeviceList( response.data );
			})
			.catch(function(response) {
				console.log('Error in getDeviceList! Error: ', response);
			})
	}
	updateDeviceList( newValue ) {
		console.log('inside updateDeviceList()!');
	}
	render() {

		return (

			<div>
				<NavBar />
				<div className='app_background'>

					<div className='app_header'></div>

					<div className="row">
						<div className="col-md-6 col-md-offset-5">
							<button type="button" className="btn btn-primary btn_get_device_list" onClick={ this.getDeviceList }>
								Show My Devices
							</button>
						</div>
					</div>

					<div className="row view_device_list">

							{ this.state.device_list.map(function(name, index) {

									return (
										<div key={ index } className="col-md-6">
											<Link to="ShowDeviceInfo">
												<h2>{ name.name }</h2>
												<img src='https://docs.particle.io/assets/images/photon_vector2_600.png' height="200" />
											</Link>
										</div>);
							}) }

					</div>
				</div>
			</div>);
	}
}

export default App;