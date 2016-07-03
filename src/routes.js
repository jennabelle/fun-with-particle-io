import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import ShowDeviceInfo from './components/ShowDeviceInfo';
import CallFunction from './components/callFunction';
import ShowVarInfo from './components/showVarInfo';

export default (
  <Router history={ browserHistory }>

    <Route path="/" component={ App } />
    <Route path="ShowDeviceInfo" component={ ShowDeviceInfo } />

    <Route component={ ShowDeviceInfo }>
    	<Route path="ShowDeviceInfo/:deviceId" component={ ShowDeviceInfo } />
    </Route>

    <Route path="ShowDeviceInfo/:deviceId/:functionName" component={ CallFunction } />
    <Route path="ShowVarInfo/:deviceId/:varName" component= { ShowVarInfo } />

  </Router>
);

/* valid routes

path      			component
/         			App
/showDeviceInfo   	showDeviceInfo

*/


// https://api.particle.io/v1/devices/2a002c000a47343232363230/rssi?access_token=d6576383889e1526c95853391923584b508071c4
