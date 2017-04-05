const initialState = {
  nuser: '',
  nfunc: '',
  func_env: 'node',
  func_env_ver: '',
  func: ''
};

export default function func(state = initialState, action) {
  switch (action.type) {
    case 'SET_NUSER':
      return {
        ...state,
        nuser: action.nuser
      };
    case 'SET_NFUNC':
      return {
        ...state,
        nfunc: action.nfunc
      };
    case 'SET_FUNC_ENV':
      return {
        ...state,
        func_env: action.func_env
      };
    case 'SET_FUNC_ENV_VER':
      return {
        ...state,
        func_env_ver: action.func_env_ver
      };
    case 'SET_FUNC':
      return {
        ...state,
        func: action.func
      };
    default:
      return state;
  }
}