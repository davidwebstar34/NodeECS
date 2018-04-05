# Simple Node Docker and ECS Example

> npm install

> sudo docker build -t dev-repo -f Dockerfile . 

> docker tag dev-repo:latest {AWS_ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com/dev-repo:latest

> sudo docker push {AWS_ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com/dev-repo

> aws ecr get-login

> sudo docker login -u AWS -p {TOKEN} -e none https://{AWS_ACCOUNT_ID}.dkr.ecr.{REGION}.amazonaws.com
