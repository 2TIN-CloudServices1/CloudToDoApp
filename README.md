# PXL 3 tier web application sample app
## frontend
Angular 12

## Backend url
The backend API url is defined in the file `/frontend/environments/environment.prod.ts`. This value gets set by the `APIURL` argument in the `docker-compose.yml` file.
## Backend
NodeJS + express + mongoose

there is a `/health` endpoint for a healthcheck

image carrousel urls are located in `/backend/data/carrousel.json`

## Database
MongoDb

## Setup
* make sure the `apiUrl` property in `./frontend/src/environments/environment.prod.ts` is correctly set
* run `docker-compose build && docker-compose up` to boot
