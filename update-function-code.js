const { lambda } = require('./modules/lambda-client.js');

const util = require('util');

const fs = require('fs');

const run = async function () {
  try {
    var response = await lambda.updateFunctionCode({
      FunctionName: 'awsd-officialcourse-demo-aws-lambda',
      ZipFile: fs.readFileSync('index.zip')
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();