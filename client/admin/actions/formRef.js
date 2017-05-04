
export function setRefName(nuser) {
  return {
    type: 'SET_REF_NAME',
    ref_name
  };
}

export function setRefAggregator(nfunc) {
  return {
    type: 'SET_REF_AGGR',
    ref_aggr
  };
}