const { dynamodb } = require('../modules/dynamodb-client.js');

const util = require('util');

const run = async function () {
  try {
    var response = await dynamodb.createTable({
      TableName: 'awsd-officialcourse-demo-aws-lambda',
      BillingMode: 'PAY_PER_REQUEST',
      AttributeDefinitions: [
        {
          AttributeName: 'awsRequestId',
          AttributeType: 'S'
        }
      ],
      KeySchema: [
        {
          AttributeName: 'awsRequestId',
          KeyType: 'HASH'
        }
      ]
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();