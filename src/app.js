import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Router, RouterContex, RouterContext, browserHistory } from 'react-router';

import store from './store';
import routes from './config/routes';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} render={props => {
	      return <RouterContext {...props} />;
	    }}/>
	</Provider>,
  document.getElementById('app')
)
