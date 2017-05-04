'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRefName = setRefName;
exports.setRefAggregator = setRefAggregator;
function setRefName(nuser) {
  return {
    type: 'SET_REF_NAME',
    ref_name: ref_name
  };
}

function setRefAggregator(nfunc) {
  return {
    type: 'SET_REF_AGGR',
    ref_aggr: ref_aggr
  };
}

//# sourceMappingURL=formRef-compiled.js.map