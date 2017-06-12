const request = require('superagent');

const url1 = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const url2 = '&key=AIzaSyDYZGiOmje64XKQxmmDY2usE-IUZtNNDsY';

const addressArray = [
    '경기 수원시',
    '경기 고양시',
    '경기 성남시',
    '경기 부천시',
    '경기 안양시',
    '경기 광명시',
    '경기 평택시',
    '경기 안산시',
    '경기 과천시',
    '경기 오산시',
    '경기 시흥시',
    '경기 군포시',
    '경기 의왕시',
    '경기 하남시',
    '경기 용인시',
    '경기 이천시',
    '경기 안성시',
    '경기 김포시',
    '경기 화성시',
    '경기 광주시',
    '경기 의정부시',
    '경기 동두천시',
    '경기 구리시',
    '경기 남양주시',
    '경기 파주시',
    '경기 양주시',
    '경기 포천시',
    '경기 여주시',
    '경기 연천군',
    '경기 가평군',
    '경기 양평군'
];

addressArray.forEach(function(address){

    request
        .get(url1 + encodeURIComponent(address) + url2)
        .end(function (error, res){
            if(error) {
                console.log(error);
            } else {
                var location = res.body.results[0].geometry.location;
                //console.log(res.body.results[0].geometry.location);
                var result = '{\n    text: \''+address+'\',\n    lnglat: ['+location.lng+', '+location.lat+']\n},';
                console.log(result);
            }
        }.bind(this));

});
