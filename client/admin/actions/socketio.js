// socket-listeners/todos.js
import io from 'socket.io-client';
import _ from 'lodash';
import {LngLat} from '../data/const'
const socket = io.connect('/');


/*
sample rethink 데이터
데이터를 가공하여 지도에 뿌릴수 있는 형식으로 reducer에 저장
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
};*/

export default function(store) {
    //데이터 입력
    socket.on('todo:insert', (data) => {
        store.dispatch({
            type: 'SET_REFINERY_DATA_INSERT',
            data: refineData(data)
        });
    });

    /*socket.on('todo:update', function (data) {
        store.dispatch({
            type: 'SET_REFINERY_DATA_UPDATE',
            data: refineData(data)
        });
    });

    socket.on('todo:delete', function (data) {
        store.dispatch({
            type: 'SET_REFINERY_DATA_DELETE',
            data: refineData(data)
        });
    });*/
}


/**
 * 지도 render에 필요한 형식으로 저장
 * @param rethinkdata
 * @returns {Array}
 */
function refineData(rethinkdata){

    return {
        originalData: rethinkdata,
        mapData: {
            ADDRESS:"서울시",
            LOCATION_NAME:"고속터미널",
            RACKS:2,
            SPACES:400,
            PLACEMENT:"SE",
            MO_INSTALLED:8,
            YR_INSTALLED:1997,
            COORDINATES: addressTextToLatLng("서울 서초구")
        },
    };
}

/**
 * 주소 -> 좌표
 * @param addressText
 * @returns {Array}
 */
function addressTextToLatLng(addressText){

    return _.find(LngLat, (loc) => loc.text == addressText).lnglat;
}