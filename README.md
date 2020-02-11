**NOTE: This was a group assignment. View all commits carefully to get an insight into my abilities. The end result is suboptimal due to complications during this project. Please contact me for more information.**

<p align="center"><img src="./backend_icon.svg" width="200px"/></p>

<h1 align="center">Kolveniershof API</h1>

The 'Kolveniershof' Android and webapplications are applications made to guide mentally disabled people through their weekly planning at the day care institution ([Ave Regina](https://www.averegina.be/vz---dagondersteuning.html)).

This is a RESTful API for the applications.

This project is part of the [Project III: Mobile apps](https://bamaflexweb.hogent.be/BMFUIDetailxOLOD.aspx?a=110488&b=1&c=1) course for the Bachelor of Applied Informatics at the Ghent University College [HoGent](https://www.hogent.be/en/) (Academic year 2019-2020).

---

## Getting Started

The server is currently hosted by [Heroku](https://www.heroku.com/) [![Website](https://img.shields.io/website?label=backend&logo=heroku&url=https%3A%2F%2Fkolv02-backend.herokuapp.com%2Fdocs)](https://kolv02-backend.herokuapp.com/docs).

> ### [`https://kolv02-backend.herokuapp.com/API`](https://kolv02-backend.herokuapp.com/docs)

[**Visit the documentation website**](https://kolv02-backend.herokuapp.com/docs)

### Installation

1. Clone this repo

   ```bash
   git clone https://github.com/JakobLierman/Kolveniershof-backend
   ```

2. Open the project root directory

   ```bash
   cd Kolveniershof-backend
   ```

3. Install dependencies from npm

   ```bash
   npm install
   ```

4. Run the project

   ```bash
   npm start
   ```

   Use [nodemon](https://nodemon.io/) to reload the server automatically on changes:

   ```bash
   npm start-local
   ```

   The server is now running at `localhost:3000`

> Copy paste this in your terminal if you're lazy. 😴
>
> ```bash
> git clone https://github.com/JakobLierman/Kolveniershof-backend && cd Kolveniershof-backend && npm i && npm start
> ```

#### Dummy login

Use the login credentials stated below to test the project's functionality.

Client:

- Email: *`client@mail.com`*
- Password: *`test00##`*

Supervisor:

- Email: *`mentor@mail.com`*
- Password: *`test00##`*

### Running tests

1. Open terminal in the root folder
2. Install dependencies from npm with `npm install` when needed
3. Run `npm test`

### Trying routes with Insomnia

We've included our [Insomnia](https://insomnia.rest/) configuration file for testing API calls. No automated end-to-end tests (yet).

You can find a guide on how to import this [here](https://support.insomnia.rest/article/52-importing-and-exporting-data). The data is located in the `Insomnia_export.json` file.

### MongoDB Database

This API relies on a [MongoDB](https://www.mongodb.com/) database. Our database is currently hosted by [mLab](https://mlab.com/).

1. Create a new file `.env` in the root folder of the project
2. Open the file and add following lines to it:

    ```bash
    KOLV02_BACKEND_SECRET="Kolveniershof02"
    KOLV02_DATABASE="mongodb://owner:Kolveniershof02@ds042677.mlab.com:42677/kolv02db"
    ```

3. It is now possible to test the API with our database. **Don't abuse this.** Change the values to your own values when deploying.

## Built With

- [Express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Passport](http://www.passportjs.org/)
- [zxcvbn](https://github.com/dropbox/zxcvbn)
- [Swagger](https://swagger.io/)

## Team

| <a href="https://github.com/JakobLierman" target="_blank">**Jakob Lierman**</a> | <a href="https://github.com/RubenDeFreyne" target="_blank">**Ruben De Freyne**</a>  | <a href="https://github.com/VictorOwnt" target="_blank">**Victor Van Hulle**</a> | <a href="https://github.com/reeveng" target="_blank">**Reeven Govaert**</a> | <a href="https://github.com/SWeB06" target="_blank">**Sebastien Wojtyla**</a> |<a href="https://github.com/WoutMaes" target="_blank">**Wout Maes**</a> |
| --- | --- | --- | --- | --- | --- |
| [![Jakob](https://avatars2.githubusercontent.com/u/25779630?s=200)](https://github.com/JakobLierman) | [![Ruben](https://avatars2.githubusercontent.com/u/25815999?s=200)](https://github.com/RubenDeFreyne) | [![Victor](https://avatars2.githubusercontent.com/u/17174095?s=200)](https://github.com/VictorOwnt) | [![Reeven](https://avatars3.githubusercontent.com/u/36441093?s=200)](https://github.com/reeveng)| [![Sebastien](https://avatars2.githubusercontent.com/u/36441058?s=200)](https://github.com/SWeB06) | [![Wout](https://avatars0.githubusercontent.com/u/36442271?s=200)](https://github.com/WoutMaes)
