import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import ShowDeviceInfo from './components/ShowDeviceInfo';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
    	<Route path="ShowDeviceInfo" component={ ShowDeviceInfo } />
    </Route>
  </Router>
);

/* valid routes

path      			component
/         			App
/showDeviceInfo   	showDeviceInfo

*/
