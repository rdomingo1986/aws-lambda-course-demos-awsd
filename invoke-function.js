const { lambda } = require('./modules/lambda-client.js');

const util = require('util');

const asciiDecoder = new TextDecoder('ascii');

const run = async function () {
  try {
    var response = await lambda.invoke({
      FunctionName: 'awsd-officialcourse-demo-aws-lambda',
      InvocationType: 'RequestResponse', //Event
      Payload: JSON.stringify({
        message: 'Hello World!!!'
      })
    });
    console.log(asciiDecoder.decode(response.Payload));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();