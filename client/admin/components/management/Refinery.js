import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect';
import { actions } from 'redux-router5'
import { setTitle } from '../../actions/breadcrumb';
import { setNuser, setNfunc, setFuncEnv, setFuncEnvVer, setFunc } from '../../actions/func';

import request from 'superagent';

const reducerSelector = createSelector(
  state => state.breadcrumb,
  state => state.func,
  state => state.router,
  (breadcrumb, func, router) => ({
    title: breadcrumb.title,
    func: func,
    error: hasCannotDeactivateError(router.transitionError)
  })
);

function hasCannotDeactivateError(error) {
  return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTitle, setNuser, setNfunc, setFuncEnv, setFuncEnvVer, setFunc, navigateTo: actions.navigateTo }, dispatch);
}

class AddFunc extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
    const { setTitle } = this.props;
    setTitle('Refinery > Add Refinery');
  }

  handleFormValue(event, setter) {
    setter(event.target.value);
  }

  handleSubmit(event, func, navigateTo) {
    //alert(JSON.stringify(func));
    request
      .post('/api/functions/create')
      .send(func)
      .end(function(err, res){
        if(!err) {
          alert('등록 요청 되었습니다. 상태를 봅시다');
          navigateTo('dashboard');
        }
      });
  }

  render() {
    const { setNuser, setNfunc, setFuncEnv, setFuncEnvVer, setFunc, func, navigateTo } = this.props;

    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <strong>Add</strong> Function
            </div>
            <div className="card-block">
              <form action="" method="post" enctype="multipart/form-data" className="form-horizontal ">
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="text-input">User Name</label>
                  <div className="col-md-9">
                    <input type="text" id="nuser" name="nuser" className="form-control" placeholder="로그인 생기면 없어집니당" onChange={(e) => this.handleFormValue(e, setNuser)}></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="select">Platform</label>
                  <div className="col-md-9">
                    <select id="select" name="select" className="form-control" size="1" onChange={(e) => this.handleFormValue(e, setFuncEnv)}>
                      <option value="node">nodejs</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="select">Version</label>
                  <div className="col-md-9">
                    <select id="select" name="select" className="form-control" size="1" onChange={(e) => this.handleFormValue(e, setFuncEnvVer)}>
                      <option value="0">Please select</option>
                      <option value="6.9">6.9 LTS</option>
                      <option value="7.2">7.2</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="text-input">Function Name</label>
                  <div className="col-md-9">
                    <input type="text" id="nfunc" name="nfunc" className="form-control" placeholder="함수 이름" onChange={(e) => this.handleFormValue(e, setNfunc)}></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 form-control-label" for="textarea-input">Function</label>
                  <div className="col-md-9">
                    <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Function..." onChange={(e) => this.handleFormValue(e, setFunc)}></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-sm btn-primary" onClick={(e) => this.handleSubmit(e, func, navigateTo)}><i className="fa fa-dot-circle-o"></i> Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(reducerSelector, mapDispatchToProps)(AddFunc);
