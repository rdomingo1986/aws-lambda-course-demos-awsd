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

aws lambda publish-layer-version --layer-name aws-sdk --compatible-runtimes nodejs12.x nodejs14.x nodejs16.x --zip-file fileb://aws-sdk-layer.zip

aws lambda create-function --function-name S3TriggerDemo --runtime nodejs16.x --zip-file fileb://function.zip --role arn:aws:iam::864613434505:role/S3TriggerDemoRole --handler function.handler --environment Variables={table_name=awsd-officialcourse-demo-aws-lambda} --layers arn:aws:lambda:us-east-1:864613434505:layer:aws-sdk:4


