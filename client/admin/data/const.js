
exports.DashboardType = {
    Map: 1,
    Scatter: 2,
    Line: 3
};


/*
* 지도 좌표 변환
* ex [126.98955, 37.5651]
* */
exports.LngLat = [
    //서울
    {
        text: '서울 서초구',
        lnglat: [127.004904, 37.505144]//고속터미널
    },
    {
        text: '서울 강남구',
        lnglat: [127.036957, 37.501040]//역삼역
    },
    {
        text: '서울 종로구',
        lnglat: [126.976436, 37.571874] //광화문역
    },
    {
        text: '서울 송파구',
        lnglat: [127.100134, 37.513457] //잠실역
    },
    {
        text: '서울 동작구',
        lnglat: [126.947710, 37.503336] //상도역
    },
    {
        text: '서울 중구',
        lnglat: [126.993529, 37.561169] //충무로역 37.530196, 126.964807
    },
    {
        text: '서울 용산구',
        lnglat: [126.964807, 37.530196] //용산역
    },
    {
        text: '서울 관악구',
        lnglat: [126.951916, 37.460086] //서울대학교
    },
    {
        text: '서울 양천구',
        lnglat: [126.864290, 37.526293] //목동역
    },
    {
        text: '서울 마포구',
        lnglat: [126.952134, 37.542908] //공덕역
    },
    {
        text: '서울 동대문구',
        lnglat: [127.057872, 37.590066] //회기역
    },
    {
        text: '서울 성동구',
        lnglat: [127.043687, 37.555840] //한양대역
    },
    {
        text: '서울 강동구',
        lnglat: [127.123762, 37.5301251]
    },
    {
        text: '서울 강북구',
        lnglat: [127.0256575, 37.6396099] 
    },
    {
        text: '서울 강서구',
        lnglat: [126.8495382, 37.5509786]
    },
    {
        text: '서울 광진구',
        lnglat: [127.0822938, 37.5384843]
    },
    {
        text: '서울 구로구',
        lnglat: [126.887369, 37.4954031]
    },
    {
        text: '서울 금천구',
        lnglat: [126.9020358, 37.4518527]
    },
    {
        text: '서울 노원구',
        lnglat: [127.056793, 37.6541917]
    },
    {
        text: '서울 도봉구',
        lnglat: [127.0470706, 37.6687738]
    },
    {
        text: '서울 서대문구',
        lnglat: [126.9367789, 37.5791158]
    },
    {
        text: '서울 서초구',
        lnglat: [127.0324112, 37.4837121]
    },
    {
        text: '서울 성북구',
        lnglat: [127.0182146, 37.589116]
    },
    {
        text: '서울 송파구',
        lnglat: [127.1065971, 37.5145437]
    },
    {
        text: '서울 영등포구',
        lnglat: [126.8962283, 37.5263715]
    },
    {
        text: '서울 용산구',
        lnglat: [126.9654442, 37.5384272]
    },
    {
        text: '서울 은평구',
        lnglat: [126.9291119, 37.6026957]
    },
    {
        text: '서울 종로구',
        lnglat: [126.9793579, 37.5729503]
    },
    {
        text: '서울 중구',
        lnglat: [127.1065971, 37.5640907]
    },
    {
        text: '서울 중랑구',
        lnglat: [127.0926519, 37.6065602]
    },
    {
        text: '서울시 서초구',
        lnglat: [127.004904, 37.505144]//고속터미널
    },
    {
        text: '서울시 강남구',
        lnglat: [127.036957, 37.501040]//역삼역
    },
    {
        text: '서울시 종로구',
        lnglat: [126.976436, 37.571874] //광화문역
    },
    {
        text: '서울시 송파구',
        lnglat: [127.100134, 37.513457] //잠실역
    },
    {
        text: '서울시 동작구',
        lnglat: [126.947710, 37.503336] //상도역
    },
    {
        text: '서울시 중구',
        lnglat: [126.993529, 37.561169] //충무로역 37.530196, 126.964807
    },
    {
        text: '서울시 용산구',
        lnglat: [126.964807, 37.530196] //용산역
    },
    {
        text: '서울시 관악구',
        lnglat: [126.951916, 37.460086] //서울대학교
    },
    {
        text: '서울시 양천구',
        lnglat: [126.864290, 37.526293] //목동역
    },
    {
        text: '서울시 마포구',
        lnglat: [126.952134, 37.542908] //공덕역
    },
    {
        text: '서울시 동대문구',
        lnglat: [127.057872, 37.590066] //회기역
    },
    {
        text: '서울시 성동구',
        lnglat: [127.043687, 37.555840] //한양대역
    },
    {
        text: '서울시 강동구',
        lnglat: [127.123762, 37.5301251]
    },
    {
        text: '서울시 강북구',
        lnglat: [127.0256575, 37.6396099] 
    },
    {
        text: '서울시 강서구',
        lnglat: [126.8495382, 37.5509786]
    },
    {
        text: '서울시 광진구',
        lnglat: [127.0822938, 37.5384843]
    },
    {
        text: '서울시 구로구',
        lnglat: [126.887369, 37.4954031]
    },
    {
        text: '서울시 금천구',
        lnglat: [126.9020358, 37.4518527]
    },
    {
        text: '서울시 노원구',
        lnglat: [127.056793, 37.6541917]
    },
    {
        text: '서울시 도봉구',
        lnglat: [127.0470706, 37.6687738]
    },
    {
        text: '서울시 서대문구',
        lnglat: [126.9367789, 37.5791158]
    },
    {
        text: '서울시 서초구',
        lnglat: [127.0324112, 37.4837121]
    },
    {
        text: '서울시 성북구',
        lnglat: [127.0182146, 37.589116]
    },
    {
        text: '서울시 송파구',
        lnglat: [127.1065971, 37.5145437]
    },
    {
        text: '서울시 영등포구',
        lnglat: [126.8962283, 37.5263715]
    },
    {
        text: '서울시 용산구',
        lnglat: [126.9654442, 37.5384272]
    },
    {
        text: '서울시 은평구',
        lnglat: [126.9291119, 37.6026957]
    },
    {
        text: '서울시 종로구',
        lnglat: [126.9793579, 37.5729503]
    },
    {
        text: '서울시 중구',
        lnglat: [127.1065971, 37.5640907]
    },
    {
        text: '서울시 중랑구',
        lnglat: [127.0926519, 37.6065602]
    },
    
    //경기
    {
        text: '경기 성남시',
        lnglat: [127.108090, 37.366242]
    },

    //부산
    {
        text: '부산 금정구',
        lnglat: [126.98955, 37.5651]
    },
    {
        text: '부산 금정구',
        lnglat: [126.98955, 37.5651]
    }
    //
];

