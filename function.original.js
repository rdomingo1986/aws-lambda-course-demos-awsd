var AWS = require('aws-sdk');

var s3 = new AWS.S3();
var dynamodb = new AWS.DynamoDB.DocumentClient();
 
exports.handler = function(event, context, callback) {
    s3.getObject({
        Bucket: event.Records[0].s3.bucket.name,
        Key: event.Records[0].s3.object.key
    },
    function (err, response) {
        if (err) {
            console.log('Error bucket: ', err);
            return callback(null, err);
        }
        dynamodb.put({
            TableName: process.env.table_name,
            Item: {
                'awsRequestId': context.awsRequestId,
                'imageName': event.Records[0].s3.object.key,
                'bandMembers': response.Metadata
            }
        }, function (err, response) {
            if (err) {
                console.log('Error table:', err);
                return callback(null, err);
            }
            callback(null, response);
        });
    });
};