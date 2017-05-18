import request from 'superagent';

let endpoint = '';
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
export function startRefinery(userId, timeInterval, query, cb) {
  var req = {
    _userId: userId,
    interval: timeInterval,
    select: query.select,
    where: query.where,
    groupby: query.groupby
  };

  request
    .post('/_register')
    .send(req)
    .end(function(err, res) {
      cb(err, res);
    });
}

export function stopRefinery(id, cb) {
  request
    .post('/_close' + id)
    .end(function(err, res) {
      cb(err, res);
    });
}