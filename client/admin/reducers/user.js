/**
 * 사용자 정보 reducer
 */

const initialState = {
  user_id: 'test'
};

export default function user(state = initialState, action) {
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
