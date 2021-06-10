var AWS = require('aws-sdk');

var lambda = new AWS.Lambda({
  region: 'us-east-1'
});

lambda.invoke({
  FunctionName: 'awsd-course-demo07-dara-1986',
  InvocationType: 'Event'
}, function (err, response) {
  if (err) return console.log(err);
  console.log(response);
});