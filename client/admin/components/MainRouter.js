import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

import AddFunc from './main/Refinery';
import Dashboard from './dashboard/Dashboard';

import NotFound from './error/NotFound';

const components = {
  'addfunc':   AddFunc,
  'dashboard': Dashboard

};

function MainRouter(props) {
  const { route } = props;
  const segment = route ? route.name.split('.')[0] : undefined;

  return createElement(components[segment] || NotFound);
}

export default connect((state) => routeNodeSelector(''))(MainRouter);
