# Simple Node Docker and ECS Example

> npm install

> sudo docker build -t node-proj -f Dockerfile . 

> sudo docker push {AWS_ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com/node-proj

> aws ecr get-login

> sudo docker login -u AWS -p {TOKEN} -e none https://{AWS_ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com
