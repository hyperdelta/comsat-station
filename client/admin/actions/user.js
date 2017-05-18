/**
 * 유저 정보 저장 TODO sample
 * @param nuser
 */
exports.setUser = (nuser) => (dispatch, getState) => {
  dispatch({
          type: 'SET_NUSER',
          nuser
      });
};