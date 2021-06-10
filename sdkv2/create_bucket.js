var AWS = require('aws-sdk');

var s3 = new AWS.S3();

s3.createBucket({
  Bucket: 'awsd-course-demo07-dara-1986'
}, function(err, response) {
  if (err) return console.log(err);
  console.log(response);
});