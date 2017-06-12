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
    //refinery에 등록 요청 api
    request
        .post(rConfig.refineryApi.url + '/_register')
        .send(req.body)
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
        .post(rConfig.refineryApi.url + '/_close')
        .send({
            id: req.body.id
        })
        .end(function (apierr, apires) {
            if (apierr) {
                res.json(apierr);
            } else {
                res.json(apires);
            }
        });
});

var sampleQuery = {
    "interval": 10,
    "select": [
        {
            "column": "member_id",
            "operation": "count",
            "as": "member_id_count"
        }
    ],
    "where": {
        "and": [
            {
                "column": "payload.body.paymentData.NewSmilePay.TotalMoney",
                "operation": "gte",
                "value": "10000"
            },
            {
                "column": "payload.body.paymentData.NewSmilePay.TotalMoney",
                "operation": "lte",
                "value": "100000"
            }
        ],
        "or": null
    },
    "groupBy": [
        {
            "column": "payload.body.shippingAddressList.[0].DeliveryAddr1",
            "depth": 2
        }
    ]
};

module.exports = router;
