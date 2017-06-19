import io from 'socket.io-client';
import _ from 'lodash';
import {LngLat} from '../data/const'
const socket = io.connect('/');

const socketMiddleware = (store) => (next) => (action) => {

    //데이터 입력
    socket.on('refinery_insert', (data) => {
        console.log('refinery:insert', data);
        store.dispatch({
            type: 'SET_REFINERY_DATA_INSERT',
            data: refineData(data)
        });
    });

    socket.on('refinery:update', function (data) {
        console.log('refinery:update', data);
        store.dispatch({
            type: 'SET_REFINERY_DATA_UPDATE',
            data: refineData(data)
        });
    });

    /*socket.on('refinery:delete', function (data) {
     store.dispatch({
     type: 'SET_REFINERY_DATA_DELETE',
     data: refineData(data)
     });
     });*/

    return next(action);
};

export default socketMiddleware;


/**
 * 지도 render에 필요한 형식으로 저장
 * @param rethinkdata
 * @returns {Array}
 */
function refineData(rethinkdata){

    //정제된 data 결과 저장용 array
    let resultMapData = [];

    //우선 첫번째 데이터만을 사용
    let data = rethinkdata.Data;

    _.forEach(data, (value) => {
        resultMapData.push({
            ADDRESS: value.Group[0],
            LOCATION_NAME: value.Group[0],
            RACKS:2,
            SPACES:value.Stat[0].Value,
            PLACEMENT:"SE",
            MO_INSTALLED:8,
            YR_INSTALLED:1997,
            COORDINATES: addressTextToLatLng(value.Group[0]),
            VALUE_ARRAY: value.Stat
        });
    });

    return {
        originalData: rethinkdata.Data,
        mapData: resultMapData,
    };
}

//sample rethink 데이터
//데이터를 가공하여 지도에 뿌릴수 있는 형식으로 reducer에 저장
var sampleRethinkData = {
    "Data": [
        {
            "Group": [
                "부산 금정구 "
            ],
            "Stat": [
                {
                    "Column": "auth_pay_price_avg",
                    "Operation": "avg",
                    "Value": 10500
                }
            ]
        }
    ],
    "EndTime": "2017-06-09 17:18:05",
    "GroupBy": [
        "ShippingAddress"
    ],
    "Interval": 10,
    "StartTime": "2017-06-09 17:13:55",
    "UserId": "tester",
    "id": "7e41a7bb-4623-4843-9004-b51819cfb0e2"
};

/**
 * 주소 -> 좌표
 * @param addressText
 * @returns {Array}
 */
function addressTextToLatLng(addressText){

    return _.find(LngLat, (loc) => loc.text == _.trim(addressText)).lnglat;
}