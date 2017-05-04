const initFormRefState = {
  name: '',
  aggr: ''
};

////////////////////////////////////////////////////////////////////////////////////
// REDUCER - FORM REFINERY
//
// `type`
//   - INIT_REF
//   - RUN_REF
//   - STOP_REF
//   - REMOVE_REF
//
export default function formRef(state = InitFormRefState, action) {
  switch (action.type) {
    case 'SET_REF_NAME':
      return {
        ...state,
        name: action.ref_name
      };
    case 'SET_REF_AGGR':
      return {
        ...state,
        aggr: action.ref_aggr
      };
    case 'SET_REF_':
      return {
        ...state
      };
    default:
      return state;
  }
}