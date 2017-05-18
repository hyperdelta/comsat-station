import io from 'socket.io-client';
const socket = io.connect('/');


/**
 * Refinery 커넥션 생성
 */
exports.connectRefinery = () => (dispatch, getState) => {

    //유저id 세팅하여 커넥션 생성
    const state = getState();
};

/**
 * Refinery 저장
 */
exports.addRefinery = () => (dispatch, getState) => {

    //1. 세팅 refinery 정보 가지고 옴
    const state = getState();

    //2. 세팅한 refinery 정보로 refinery api 호출

    //3. api 호출 성공하면 socketio 이벤트 발생시키기
    socket.emit('register_refinery',{user_id:'test'});

    // dispatch({
    //       type: 'SET_NUSER',
    //       nuser
    //   });
};


/**
 * Refinery 시작
 */
exports.startRefinery = () => (dispatch, getState) => {

    //저장한 refinery 정보 가지고 옴
    const state = getState();

    //socketIO event 발생시키기
    socket.emit('start_refinery',{user_id:'test'});

    // dispatch({
    //     type: 'SET_NUSER',
    //     nuser
    // });
};

/**
 * Refinery 종료
 */
exports.terminateRefinery = () => (dispatch, getState) => {

    //저장한 refinery 정보 가지고 옴
    const state = getState();

    //socketIO event 발생시키기
    socket.emit('terminate_refinery',{user_id:'test'});

    // dispatch({
    //     type: 'SET_NUSER',
    //     nuser
    // });
};