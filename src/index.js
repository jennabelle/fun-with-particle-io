import React from 'react';
import ReactDOM from 'react-dom';

// https://api.particle.io/v1/devices?access_token=d6576383889e1526c95853391923584b508071c4
const access_token = 'd6576383889e1526c95853391923584b508071c4';

const App = () => {
	return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));