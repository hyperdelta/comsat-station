const initCtrlRefState = {
  // TODO: refinery API 확인 후 작업 예정
};

////////////////////////////////////////////////////////////////////////////////////
// REDUCER - CONTROL REFINERY
//
// refinery의 동작을 제어하는 리듀서.
// `type`
//   - INIT_REF
//   - RUN_REF
//   - STOP_REF
//   - REMOVE_REF
//
export default function ctrlRef(state = initCtrlRefState, action) {
  switch (action.type) {
    case 'INIT_REF':
      return {
        ...state
      };
    case 'RUN_REF':
      return {
        ...state
      };
    case 'STOP_REF':
      return {
        ...state
      };
    case 'REMOVE_REF':
      return {
        ...state
      };
    default:
      return state;
  }
}