aws cloudformation create-stack --stack-name awsd-officialcourse-demo-aws-lambda --capabilities CAPABILITY_NAMED_IAM --template-body file://./demo-cf-template.yml --tags  Key=Course,Value=AWSD

aws cloudformation update-stack --stack-name awsd-officialcourse-demo-aws-lambda --capabilities CAPABILITY_NAMED_IAM --template-body file://./demo-cf-template.yml

aws lambda update-function-code --function-name awsd-officialcourse-demo-aws-lambda --zip-file fileb://index.zip

docker run -p 9000:9000 minio/minio server /data

aws s3 ls --endpoint-url=http://localhost:4566

aws s3 ls s3://awsd-officialcourse-demo-aws-lambda/ --endpoint-url=http://localhost:4566

aws dynamodb list-tables --endpoint-url=http://localhost:4566

aws dynamodb scan --table-name Courses --endpoint-url=http://localhost:4566 

aws dynamodb delete-table --table-name Courses --endpoint-url=http://localhost:4566

sam local invoke "handlerFunction" -e events/s3-putobject-event.json -n env.json


docker run --rm -v $PWD:/var/task:ro,delegated lambci/lambda:nodejs12.x function.handler '{"Records": [{"s3": {"bucket": {"name": "awsd-officialcourse-demo-aws-lambda"},"object": {"key": "metallica.jpg"}}}]}'



