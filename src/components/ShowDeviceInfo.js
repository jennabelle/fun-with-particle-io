import React, { Component } from 'react';
import axios from 'axios';

class ShowDeviceInfo extends Component {

	constructor(props) {
		super(props)
	}
	render() {

		console.log('this.props: ', this.props.params);

		return (
			<div>
				Hi!
			</div>
			);
	}
}

export default ShowDeviceInfo;