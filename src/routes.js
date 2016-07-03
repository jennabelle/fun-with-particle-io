import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import ShowDeviceInfo from './components/showDeviceInfo';
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

path      								component
/         								App
/ShowDeviceInfo   						ShowDeviceInfo
/ShowDeviceInfo/:deviceId				ShowDeviceInfo
/ShowDeviceInfo/:deviceId/:functionName	CallFunction
/ShowVarInfo/:deviceId/:varName			ShowVarInfo

*/
