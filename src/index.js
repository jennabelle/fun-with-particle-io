import React from 'react';
import ReactDOM from 'react-dom';


// ENDPOINTS
// #1 list-devices
// https://api.particle.io/v1/devices?access_token=d6576383889e1526c95853391923584b508071c4

// device 1: 2a002c000a47343232363230
// variable: 'rssi', functions: rand, len, ripcord

// device 2: 39003b000a47343232363230
// variable: 'n', functions: plus, times, reset, ripcord

// #2 get-device-information
// https://api.particle.io/v1/devices/2a002c000a47343232363230?access_token=d6576383889e1526c95853391923584b508071c4

// #3 get-a-variable-value
// https://api.particle.io/v1/devices/2a002c000a47343232363230/rssi?access_token=d6576383889e1526c95853391923584b508071c4

// #4 call-a-function


const ACCESS_TOKEN = 'd6576383889e1526c95853391923584b508071c4';

const App = () => {
	return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));