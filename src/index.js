import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

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
// https://api.particle.io/v1/devices/2a002c000a47343232363230/rand?access_token=d6576383889e1526c95853391923584b508071c4


const ACCESS_TOKEN = 'd6576383889e1526c95853391923584b508071c4'; // pass as props

ReactDOM.render(
		<Router history={browserHistory} routes={routes} />, document.getElementById('container')
	);