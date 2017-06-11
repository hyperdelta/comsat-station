import React, {Component} from 'react';
import beautify from 'json-beautify';
import {connect} from 'react-redux'
import {createSelector} from 'reselect';
import {setTitle} from '../../actions/breadcrumb';
import {
    setInterval,
    addRefinery,
    setSelectCondition,
    setWhereCondition,
    setGroupByCondition,
    setQueryCondition
} from '../../actions/refinery';


const reducerSelector = createSelector(
    state => state.breadcrumb,
    state => state.refinery,
    state => state.router,
    state => state.refineryForm,
    (breadcrumb, refinery, router,refineryForm) => ({
        title: breadcrumb.title,
        refinery: refinery,
        refineryForm: refineryForm,
        error: hasCannotDeactivateError(router.transitionError)
    })
);

function hasCannotDeactivateError(error) {
    return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
}


class AddRefinery extends Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
        const {setTitle} = this.props;
        setTitle('Refinery > Add Refinery');
    }

    render() {
        const {setInterval, addRefinery, setSelectCondition, setWhereCondition,
            setGroupByCondition, setQueryCondition} = this.props;

        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <strong>Add</strong> Refinery
                        </div>
                        <div className="card-block">
                            <form action="" method="post" enctype="multipart/form-data" className="form-horizontal ">
                                {/*<div className="form-group row">
                                    <label className="col-md-3 form-control-label" for="text-input">Interval</label>
                                    <div className="col-md-9">
                                        <input type="text" id="nuser" name="nuser" className="form-control"
                                               onChange={(e) => setInterval(e.target.value)}>
                                        </input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 form-control-label" for="select">Select</label>
                                    <div className="col-md-9">
                                        <select id="select" name="select" className="form-control" size="1"
                                                onChange={(e) => setSelectCondition(e.target.value)}>
                                            <option value="node">select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 form-control-label" for="select">Where</label>
                                    <div className="col-md-9">
                                        <select id="select" name="select" className="form-control" size="1"
                                                onChange={(e) => setWhereCondition(e.target.value)}>
                                            <option value="0">Please select</option>
                                            <option value="6.9">6.9 LTS</option>
                                            <option value="7.2">7.2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 form-control-label" for="textarea-input">GroupBy</label>
                                    <div className="col-md-9">
                                        <textarea id="textarea-input" name="textarea-input" rows="9"
                                                  className="form-control"
                                                  onChange={(e) => setGroupByCondition(e.target.value)}>

                                        </textarea>
                                    </div>
                                </div>*/}
                                <div className="form-group row">
                                    <label className="col-md-3 form-control-label" for="textarea-input">QUERY</label>
                                    <div className="col-md-9">
                                        <textarea id="textarea-input" name="textarea-input" rows="20"
                                                  className="form-control"
                                                  onChange={(e) => setQueryCondition(e.target.value)}>
                                            {beautify(JSON.parse(this.props.refineryForm.query), null, 2, 80)}

                                        </textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-sm btn-primary"
                                    onClick={() => addRefinery()}>
                                <i className="fa fa-dot-circle-o">
                                </i> Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setInterval: (interval) => dispatch(setInterval(interval)),
        setSelectCondition: (select) => dispatch(setSelectCondition(select)),
        setWhereCondition: (where) => dispatch(setWhereCondition(where)),
        setGroupByCondition: (groupBy) => dispatch(setGroupByCondition(groupBy)),
        setQueryCondition: (query) => dispatch(setQueryCondition(query)),
        setTitle: (title) => dispatch(setTitle(title)),
        addRefinery: () => dispatch(addRefinery()),
    }
};

export default connect(reducerSelector, mapDispatchToProps)(AddRefinery);
