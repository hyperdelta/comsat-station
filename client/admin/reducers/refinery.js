import {
    DashboardType
} from '../data/const';

/**
 * Refinery 등록한 refinery feed용 reducer
 */

const initialState = {
    user_id: 'test',
    /* 아래와 같은 방식으로 feeding 받아옴
     * {
     * type: 1
     * rethinkId: 1
     * data: []
     * }
     * */
    refineries: [
        {
            type: DashboardType.Map,
            refineryId: 1,
            data: []
        },
        {
            type: DashboardType.Line,
            refineryId: 2,
            data: []
        },
        {
            type: DashboardType.Scatter,
            refineryId: 3,
            data: []
        }
    ]
};

export default function refinery(state = initialState, action) {
    switch (action.type) {
        /*case 'SET_USERID':
            return {
                ...state,
                title: action.title
            };*/

        default:
            return state;
    }
}
