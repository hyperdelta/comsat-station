var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('superagent');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/admin/admin.html'));
});


/**
 * API (refinery 등록)
 */
var rConfig = require('../config/refinery');
router.post('/addRefinery', function (req, res) {
    var sampleQuery = {
        "interval": 10,
        "_userId": "tester",
        "select": [
            {
                "column": "AuthPayPrice",
                "operation": "avg",
                "as": "auth_pay_price_avg"
            }
        ],
        "groupBy": [
            {
                "column": "ShippingAddress",
                "depth": 2
            }
        ],
        "where": {
            "column": "AuthPayPrice",
            "operation": "gte",
            "value": "0"
        }
    };

    console.log(JSON.parse(req.body.query));

    //refinery에 등록 요청 api
    request
        .post(rConfig.refineryApi.url + '/_register')
        .send(JSON.parse(req.body.query))
        .end(function (apierr, apires) {
            if (apierr) {
                res.json(apierr);
            } else {
                res.json(apires);
            }
        });
});


/**
 * API (refinery 종료)
 */
router.post('/closeRefinery', function (req, res) {
    request
        .post(rConfig.refineryApi.url + '/_close/' + req.body.id)
        .send()
        .end(function (apierr, apires) {
            if (apierr) {
                res.json(apierr);
            } else {
                res.json(apires);
            }
        });
});



module.exports = router;
