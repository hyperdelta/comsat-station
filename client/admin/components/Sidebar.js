import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions} from 'redux-router5'
import {createSelector} from 'reselect';
import {setTitle} from '../actions/breadcrumb';
import NavItem from './sidebar/NavItem'

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


class Sidebar extends Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
    }

    render() {
        const {setTitle, navigateTo} = this.props;

        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-title">
                            Hyper Delta
                        </li>
                        <NavItem router={this.router} navigateTo={navigateTo} name="dashboard">
                            <i className="icon-speedometer"></i> Dashboard
                        </NavItem>
                        <li className="nav-item nav-dropdown">
                            <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i>
                                Refinery</a>
                            <ul className="nav-dropdown-items">
                                <NavItem router={this.router} navigateTo={navigateTo} name="refinery">
                                    <i className="icon-puzzle"></i> Refinery1
                                </NavItem>
                                <NavItem router={this.router} navigateTo={navigateTo} name="refinery">
                                    <i className="icon-puzzle"></i> Refinery2
                                </NavItem>
                            </ul>
                        </li>
                        <li className="nav-title">
                            Management
                        </li>
                        <li className="nav-item nav-dropdown">
                            <NavItem router={this.router} navigateTo={navigateTo} name="addRefinery">
                                <i className="icon-puzzle"></i> Add Refinery
                            </NavItem>
                        </li>
                    </ul>
                </nav>
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

export default connect(reducerSelector, mapDispatchToProps)(Sidebar);
