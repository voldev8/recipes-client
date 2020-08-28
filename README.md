## Flavorites App front-end

This is the front end part of a simple Recipe MERN App.

[Back end part](https://github.com/voldev8/recipes-api)

The Flavorites App gives users the option to browse a recipe catalog consisting of recipes created and shared by other fellow users. Recipes can be searched by name or tags. Each recipe card has two sides. On the front we have a picture, name, ingredients, and tags of the recipe. Single click will flip the card and show step-by-step instructions. Users also have the option to share a source link for additional information and instructions; if provided this will be a link button at the bottom of the card. When signed in, users can create their own f(l)avorites list. They can add new recipes to the database; these recipes can be edited or removed only by the user who created them. At this time, photos can only be added through links to external webpages. Resetting password is quite easy, users can click the forgot password link on login page. And they will receive an email with a reset-password link.

TL;DR

Create, share, find recipes. Make a flavorites list of your own.

## Screenshots

![screenshot](/src/media/flavorites_screenshot.png)

## Tech/framework used

<b>Built with</b>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

"axios": http-client,  
"react-router-dom": routing,  
"react-transition-group": animations

## Installation

### Clone

you can download the repo to your computer with the command below

```shell
git clone https://github.com/voldev8/recipes-client
```

### Requirements

The api setup is required to run the app properly.

#### API Reference

[Flavorites API](https://github.com/voldev8/recipes-api)

After that

### Setup

> now install npm

```shell
$ npm install
```

> starting the app

```shell
$ npm run start
```

Instead of starting the front end and back end separately, concurrently npm can be used [More info](https://www.npmjs.com/package/concurrently)

## License

MIT ©2020 Volkan Uyarer
