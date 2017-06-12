const request = require('superagent');

const url1 = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const url2 = '&key=AIzaSyDYZGiOmje64XKQxmmDY2usE-IUZtNNDsY';

const addressArray = [
    '부산 중구',
    '부산 서구',
    '부산 동구',
    '부산 영도구',
    '부산 부산진구',
    '부산 동래구',
    '부산 남구',
    '부산 북구',
    '부산 해운대구',
    '부산 사하구',
    '부산 금정구',
    '부산 강서구',
    '부산 연제구',
    '부산 수영구',
    '부산 사상구',
    '부산 기장군',
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
