import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect';
import { actions } from 'redux-router5'
import { setTitle } from '../../actions/breadcrumb';

import PanelA from './PanelA';
import PanelB from './PanelB';

const reducerSelector = createSelector(
  state => state.breadcrumb,
  state => state.router,
  (breadcrumb, router) => ({
    title: breadcrumb.title,
    error: hasCannotDeactivateError(router.transitionError)
  })
);

function hasCannotDeactivateError(error) {
  return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTitle, navigateTo: actions.navigateTo }, dispatch);
}

class Dashboard extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
    const { setTitle } = this.props;
    setTitle('Dashboard');
  }

  render() {
    const { navigateTo } = this.props;

    return (
      <div className="row">
        <div className="col-md-6">
          <PanelA></PanelA>
        </div>
        <div className="col-md-6">
          <PanelB></PanelB>
        </div>
      </div>
    )
  }
}

export default connect(reducerSelector, mapDispatchToProps)(Dashboard);
