import React, {createElement} from 'react';
import {connect} from 'react-redux';
import {routeNodeSelector} from 'redux-router5';

import AddRefinery from './management/AddRefinery';
import Dashboard from './dashboard/Dashboard';
import Refinery from './refinery/Refinery';

import NotFound from './error/NotFound';

const components = {
    'addRefinery': AddRefinery,
    'dashboard': Dashboard,
    'refinery': Refinery

};

function MainRouter(props) {
    const {route} = props;
    const segment = route ? route.name.split('.')[0] : undefined;

    return createElement(components[segment] || NotFound);
}

export default connect((state) => routeNodeSelector(''))(MainRouter);
