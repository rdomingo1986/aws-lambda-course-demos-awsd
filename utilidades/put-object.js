const { s3 } = require('../modules/s3-client.js');

const util = require('util');

const fs = require('fs');

const run = async function () {
  try {
    var response = await s3.putObject({
      Bucket: 'awsd-officialcourse-demo-aws-lambda',
      Key: 'metallica.jpg',
      Body: fs.readFileSync('5a83f654aa48d.jpg'),
      Metadata: {
        Band: 'Metallica',
        Gender: 'Trash Metal',
        Members: 'James Hetfield, Kirk Hammett, Lars Ulrich, Robert Trujillo'
      }
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();