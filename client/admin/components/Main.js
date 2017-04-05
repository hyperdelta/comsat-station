import MainRouter from './main/MainRouter'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

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
  return bindActionCreators({ }, dispatch);
}

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.router = context.router;
  }

  render() {
    const { title } = this.props;
    return (
      <main className="main">
        <ol className="breadcrumb">
          { title }
        </ol>
        <div className="container-fluid">
          <div className="animated fadeIn">
            <MainRouter />
          </div>
        </div>
      </main>
    )
  }
}

export default connect(reducerSelector, mapDispatchToProps)(Main);
