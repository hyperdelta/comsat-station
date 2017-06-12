import request from 'superagent';
import io from 'socket.io-client';
const socket = io.connect('/');

/**
 * refinery interval 저장
 * @param interval
 */
exports.setInterval = (interval) => (dispatch, getState) => {
    dispatch({
        type: 'SET_INTERVAL',
        interval
    });
};

/**
 * refinery select condition 저장
 * @param select
 */
exports.setSelectCondition = (select) => (dispatch, getState) => {
    dispatch({
        type: 'SET_SELECT_CONDITION',
        select
    });
};

/**
 * refinery where condition 저장
 * @param where
 */
exports.setWhereCondition = (where) => (dispatch, getState) => {
    dispatch({
        type: 'SET_WHERE_CONDITION',
        where
    });
};

/**
 * refinery groupby condition 저장
 * @param groupBy
 */
exports.setGroupByCondition = (groupBy) => (dispatch, getState) => {
    dispatch({
        type: 'SET_GROUP_BY_CONDITION',
        groupBy
    });
};

/**
 * refinery query condition 저장
 * @param query
 */
exports.setQueryCondition = (query) => (dispatch, getState) => {
    dispatch({
        type: 'SET_QUERY_CONDITION',
        query
    });
};


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

    console.log('addRefinery');
    //1. 세팅 refinery 정보 가지고 옴
    const state = getState();

    //2. 세팅한 refinery 정보로 refinery api 호출
    /*var req = {
        _userId: state.refineryForm.userId,
        interval: state.refineryForm.interval,
        select: state.refineryForm.select,
        where: state.refineryForm.where,
        groupby: state.refineryForm.groupBy
    };*/
    var req = state.refineryForm.query;

    request
        .post('/admin/addRefinery')
        .send(req)
        .end(function(err, res) {
            // cb(err, res);
            //3. api 호출 성공하면 socketio 등록 이벤트 발생시키기
            socket.emit('register_refinery',{refineryId:'tester'});

            //등록한 refineryId 저장
            dispatch({
                type: 'SET_REFINERY_INFO',
                refineryId: res.id // 나중에 종료 호출하기위해 필요함
            });
        });
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
exports.closeRefinery = () => (dispatch, getState) => {

    //저장한 refinery 정보 가지고 옴
    const state = getState();

    //socketIO event 발생시키기
    // socket.emit('terminate_refinery',{user_id:'test'});

    request
        .post('/admin/closeRefinery')
        .send({
            id: state.refinery.refineryId
        })
        .end(function(err, res) {
        });
};