# Braniac

Your favorite trivia-quiz competition place

[Live site](https://brainiac-quiz.netlify.app/)

![rbraniac usage](./readme-src/brainiac.gif)

## Installation & Usage
### Installation

- Clone repository
- cd into repository folder
- Run `npm install` and wait for installation
- if you would like to run the server side you need to run `docker-compose up` 
    - you will find the server on the [localhost:3000](http://localhost:3080/) 

### Usage

- Run `npm run dev` and navigate to [local server](http://localhost:8080/)
- The client will be sending post request with the scores to netlify, in the next version, everything will run in a docker container


## Technologies

<details>
  <summary><b>Client Side</b></summary>
  
  - [React](https://www.npmjs.com/package/react)
  - [React-router](https://www.npmjs.com/package/react-router)
  - [Redux](https://www.npmjs.com/package/redux)
  - [Webpack](https://www.npmjs.com/package/webpack)

</details>

<details>
  <summary><b>Server Side</b></summary>

- [Netlify functions](https://www.netlify.com/products/functions/)
- [MongoDB](https://www.npmjs.com/package/mongodb)

</details>
<details>
  <summary><b>Database</b></summary>

- [MongoDB Atlas Cloud](https://www.mongodb.com/cloud/atlas)

</details>

## Endpoints 
### Client
| URL        |  Description  |
| ---------- | ---------- |
| /          |  Home page with the initial formulary |
| /users     |  Show the add user modal              |
| /:level/:category |  Quiz game page that in case of not users start an anonynous game with 10 round |
| /scores/local | After game results |
| /scores/ | Global scored that do a request to db |

## Server
| Route Name | URL        | HTTP Verb | Description             |
| ---------- | ---------- | --------- | ----------------------- |
| Show       | /          | GET       | Get scores              |
| Create     | /          | POST      | Create a post           |

## Changelog

Find the full changelog [here](changelog.md)

## Future Features

- add the client to docker compose
- add Socket.io package
- add user profile img generator
- add auth an auth
- maybe theme background image by category

## Licence

[MIT Licence](https://opensource.org/licenses/mit-license.php)
