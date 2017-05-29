import fingerprintjs2 from 'fingerprintjs2'
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
//TODO async라 hash를 reducer에 저장할 방법 생각해봐야함
let fingerprint = '';
new fingerprintjs2().get(function(result, components){
    fingerprint = result;
    console.log(result); //a hash, representing your device fingerprint
    //console.log(components); // an array of FP components
});



const initialState = {
    userId: '',
    interval: 10,
    select: [],
    where: {
        and: [],
        or: []
    },
    groupBy: []
};

export default function refineryForm(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER_ID':
            return {
                ...state,
                userId: action.userId
            };
        case 'SET_INTERVAL':
            return {
                ...state,
                interval: action.interval
            };
        case 'SET_SELECT_CONDITION':
            return {
                ...state,
                select: action.select
            };
        case 'SET_WHERE_CONDITION':
            return {
                ...state,
                where: action.where
            };
        case 'SET_GROUP_BY_CONDITION':
            return {
                ...state,
                groupBy: action.groupBy
            };
        default:
            return state;
    }
}