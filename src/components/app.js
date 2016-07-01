import React, { Component } from 'react';

class App extends Component {

	render() {
		return (
			<div className='app_background'>
				<div className='app_header'></div>

				<div className="col-md-6 col-md-offset-3">
					<button type="button" className="btn btn-primary get_device_list">Get Device List</button>
				</div>
			</div>
		);
	}
}

export default App;