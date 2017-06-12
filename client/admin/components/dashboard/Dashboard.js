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
    state => state.refinery,
  state => state.router,
  (breadcrumb, refinery, router) => ({
    title: breadcrumb.title,
      refinery: refinery,
    error: hasCannotDeactivateError(router.transitionError)
  })
);

function hasCannotDeactivateError(error) {
  return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
}


class Dashboard extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
    const { setTitle } = this.props;
    setTitle('Dashboard');
  }

  render() {
    const { navigateTo, refinery } = this.props;
      let wi = 400;
      let he = 400;

    return (
      <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    Header
                </div>
                <div className="card-block">
                    <Map width={wi} height={he} mapData={refinery.refineries}/>
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    Header
                </div>
                <div className="card-block">
                    <Scatter />
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    Header
                </div>
                <div className="card-block">
                    <Line />
                </div>
                <div className="card-footer">
                    Footer
                </div>
            </div>

        </div>
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

export default connect(reducerSelector, mapDispatchToProps)(Dashboard);
