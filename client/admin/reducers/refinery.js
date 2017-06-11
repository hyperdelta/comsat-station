import {
    DashboardType
} from '../data/const';

/**
 * Refinery 등록한 refinery feed용 reducer
 */

const initialState = {
    //user_id는 임시로 tester라고 하자
    user_id: 'tester',
    refineryId: '',
    /* 아래와 같은 방식으로 feeding 받아옴
     * {
     * type: 1
     * rethinkId: 1
     * data: []
     * }
     * */
    /*refineries: [
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
    ],*/
    //시연용으로 data는 그냥 아래 array에 때려박음
    refineries: [
        {ADDRESS:"서울시",LOCATION_NAME:"고속터미널",RACKS:2,SPACES:400,PLACEMENT:"SE",MO_INSTALLED:8,YR_INSTALLED:1997,COORDINATES:[127.004904, 37.505144]},
        {"ADDRESS":"서울시","LOCATION_NAME":"서울시","RACKS":2,"SPACES":4,"PLACEMENT":"SE","MO_INSTALLED":8,"YR_INSTALLED":1997,"COORDINATES":[126.98955, 37.5651]},
        {"ADDRESS":"역삼역","LOCATION_NAME":"역삼역","RACKS":3,"SPACES":10,"PLACEMENT":"SW","MO_INSTALLED":9,"YR_INSTALLED":1998,"COORDINATES":[127.036957, 37.501040]},
        {"ADDRESS":"정자역","LOCATION_NAME":"정자역","RACKS":5,"SPACES":10,"PLACEMENT":"SW","MO_INSTALLED":10,"YR_INSTALLED":2000,"COORDINATES":[127.108090, 37.366242]},
        {"ADDRESS":"광화문역","LOCATION_NAME":"광화문역","RACKS":10,"SPACES":8,"PLACEMENT":"SW","MO_INSTALLED":8,"YR_INSTALLED":1997,"COORDINATES":[126.976436, 37.571874]}
    ]
};

export default function refinery(state = initialState, action) {
    switch (action.type) {
        case 'SET_REFINERY_ID':
            return {
                ...state,
                refineryId: action.refineryId
            };
        case 'SET_REFINERY_DATA_INSERT':
            return {
                ...state,
                refineries: state.refineries.push(action.data.mapData)
            };
        // case 'SET_REFINERY_DATA_UPDATE':
        //     return {
        //         ...state,
        //         refineries: action.data
        //     };
        // case 'SET_REFINERY_DATA_DELETE':
        //     return {
        //         ...state,
        //         refineries: action.data
        //     };

        default:
            return state;
    }
}
