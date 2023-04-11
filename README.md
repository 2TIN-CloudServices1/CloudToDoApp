# PXL 3 tier web application sample app
This repo contains 4 branches. The `main` branch has the app running on a mongoDB database. The branch `dynamo-db` uses AWS dynamoDB as a database. The branch `sequelize` has the app running on a MySQL database. The branch `serverless` contains some lambda functions that can be combined with an AWS API gateway to setup a serverless backend architecture in combination with DynamoDB.

## frontend
Angular 12

## API url
The API url is defined in the file `/frontend/environments/environment.prod.ts`. This value gets set by the `APIURL` argument in the `docker-compose.yml` file. The multistage dockerfile uses this value before the build process.

## Backend
Lambda functions are found in the folder `backend`. Each subfolder is a new lambda function.

Make sure you provide the correct execution roles for the lambda functions. Setup an API gateway with the following endpoints:
- `GET https://apiurl/todo`
- `GET https://apiurl/todo/{__id}`
- `POST https://apiurl/todo`
- `PUT https://apiurl/todo/{__id}`
- `DELETE https://apiurl/todo/{__id}`


TODO: image carrousel urls are located in `/backend/data/carrousel.json`

### Database
DynamoDB

## Setup
* make sure the `APIURL` property in `docker-compose.yml` is correctly set to point to your API.
* make sure the `DBURL` variable in `docker-compose.yml` is correctly set to point to your mongoDB instance.
* run `docker-compose build && docker-compose up` to boot
