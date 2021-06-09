const { S3 } = require('@aws-sdk/client-s3');

const s3 = new S3({
  region: 'us-east-1'
});

const { DynamoDB } = require('@aws-sdk/client-dynamodb');

const dynamodb = new DynamoDB({
  region: 'us-east-1'
});

const util = require('util');

exports.handler = async function (event, context) {
  try {
    var responseS3 = await s3.getObject({
      Bucket: event.Records[0].s3.bucket.name,
      Key: event.Records[0].s3.object.key
    });
    var responseDynamoDB = await  dynamodb.putItem({
      TableName: process.env.table_name,
      Item: {
        'awsRequestId': {
          S: context.awsRequestId
        },
        'imageName': {
          S: event.Records[0].s3.object.key
        },
        'bandMembers': {
          M: {
            'members': { S: responseS3.Metadata.members },
            'gender': { S: responseS3.Metadata.gender },
            'band': { S: responseS3.Metadata.band }
          }
        }
      }
    });
    console.log(util.inspect([responseS3, responseDynamoDB], false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
    return err;
  }
}