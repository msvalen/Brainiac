# Braniac

Your favorite trivia-quiz competition place

[Live site](not yet)

![rbraniac usage](braniac.gif)

## Installation & Usage
### Installation

- Clone repository
- cd into repository folder
- Run `npm install` and wait for installation

### Usage

- Run `npm run dev` and navigate to [local server](http://localhost:8080/)
- Input your GitHub username and press submit
- View your repositories and click on one to see further info/navigate to github repo


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
| /users     |  Show the add user module             |
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

- add Socket.io package
- add user profile img generator
- add auth an auth

## Licence

[MIT Licence](https://opensource.org/licenses/mit-license.php)
