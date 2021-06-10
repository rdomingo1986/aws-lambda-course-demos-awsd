// dependencies
var AWS = require('aws-sdk');

var s3 = new AWS.S3();
var dynamodb = new AWS.DynamoDB.DocumentClient({
    endpoint: process.env.endpoint
});
 
exports.handler = function(event, context, callback) {
    s3.getObject({
        Bucket: 'awsd-images1986',
        Key: 'metallica.jpg'
    },
    function (err, response) {
        if (err) return callback(null, err);
        dynamodb.put({
            TableName: 'imagemetadata',
            Item: {
                'requestID': context.awsRequestId,
                'imageName': 'metallica.jpg',
                'bandMembers': response.Metadata
            }
        }, function (err, response) {
            if (err) return callback(null, err);
            callback(null, response);
        });
    });
};
