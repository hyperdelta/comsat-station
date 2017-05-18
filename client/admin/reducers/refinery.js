/**
 * Refinery 등록한 refinery data 저장용 reducer
 */

const initialState = {
  user_id: 'test'
};

export default function refinery(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERID':
      return {
        ...state,
        title: action.title
      };

    default:
      return state;
  }
}
