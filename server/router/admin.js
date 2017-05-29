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
router.get('/addRefinery', function (req, res) {
    //refinery에 등록 요청 api
    request
        .post(rConfig.refineryApi + '/path')
        .send(req)
        .end(function (err, res) {
            //TODO
            if (err) {
                res.json(err);
            } else {
                res.json(res);
            }
        });
});

/*
 {
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
 }
 */


module.exports = router;
