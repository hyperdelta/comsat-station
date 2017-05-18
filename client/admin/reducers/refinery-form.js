/**
 * Refinery를 등록하기 위한 form 저장
 */
////////////////////////////////////////////////////////////////////////////////////
// REDUCER - FORM REFINERY
//
// `type`
//   - INIT_REF
//   - RUN_REF
//   - STOP_REF
//   - REMOVE_REF
//
const initialState = {
    name: '',
    aggr: ''
};

export default function refineryForm(state = initialState, action) {
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