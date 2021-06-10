var AWS = require('aws-sdk');
var fs = require('fs');

var s3 = new AWS.S3();

s3.putObject({
  Bucket: 'awsd-course-demo07-dara-1986',
  Key: 'metallica.png',
  Body: fs.readFileSync('5a83f654aa48d.jpg'),
  Metadata: {
    Band: 'Metallica',
    Gender: 'Trash Metal',
    Members: 'James Hetfield, Kirk Hammett, Lars Ulrich, Robert Trujillo'
  }
}, function(err, response) {
  if (err) return console.log(err);
  console.log(response);
});
