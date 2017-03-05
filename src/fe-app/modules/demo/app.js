import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import './style.css';
import PageContainer from '../../common/components/PageContainer'
import Demo from './components/Demo';
ReactDOM.render(
  (<Router history={hashHistory}>
      <Route path='/' component={Demo}>
        <IndexRoute component={Demo} />
        <Route path='demo' component={Demo} />
      </Route>
    </Router>
  ), document.getElementById('application')
);
