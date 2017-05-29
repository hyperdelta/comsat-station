

exports.setTitle = (title) => (dispatch, getState) => {
    dispatch({
        type: 'SET_TITLE',
        title
    });
};