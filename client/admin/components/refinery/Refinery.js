import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect';
import { actions } from 'redux-router5'
import { setTitle } from '../../actions/breadcrumb';

import Map from '../chart/Map';
import Scatter from '../chart/Scatter';
import Line from '../chart/Line';

const reducerSelector = createSelector(
    state => state.breadcrumb,
    state => state.router,
    (breadcrumb, router) => ({
        title: breadcrumb.title,
        route: router.route,
        error: hasCannotDeactivateError(router.transitionError)
    })
);

function hasCannotDeactivateError(error) {
    return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
}


class Refinery extends Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
        const { setTitle } = this.props;
        setTitle('Refinery');


    }

    render() {
        const { navigateTo, route } = this.props;
        console.log(route.params.id);

        return (
            <div>
                <Map />
                {/*<Line />*/}
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTitle: (title) => dispatch(setTitle(title)),
        navigateTo: (name) => dispatch(actions.navigateTo(name)),
    }
};

export default connect(reducerSelector, mapDispatchToProps)(Refinery);
