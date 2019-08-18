# REST-Based React Apps (Twitch TV Mock-Up App)

## Summary
In this section we focused on the Create And Edit part of our application. We went in depth on how to incorporate redux-form properly into our application. We also discussed the difference between PATCH and PUT request methods and Programmatic navigation vs browser navigation. 


### REST conventions
REpresentational State Transfer, Restful conventions are a predefined system for defining different routes on an API that works with a given type of records.

## Project Ahead (Twitch TV Clone) - Part 5 out of 7
We are going to build a clone of a very popular Application called **Twitch TV**. It is an application that is used by people all over the world to record video on their desktop and stream it live to viewers, so other people can view some streamer inside their browser and see some continuos stream of video. We are going to have multiple pages that the user can visit. They will show different content depending on which screen the user decides to go. 

### App Goals
- Master CRUD operations in React/Redux
- Learn how to do authentication with Google

### Auth Component Goal
- Get a reference to the 'auth' object after it is initialized
- Figure out if the user is currently signed in
- Print their authentication status on the screen

### Tasks:
- We have to be able to navigate around to separate pages in our application.
- Allow user to login/logout
- Handle forms in **Redux**
- Generate good error handling

### Tools
- React Router Dom: https://reacttraining.com/react-router/web/guides/quick-start It contains the DOM bindings for React Router. In other words, the router components for websites. With `react-router-dom` we get an actual implementation of `react-router` that works specifically on the browser.
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.
- Google OAuth: OAuth is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, and DigitalOcean. In this case we are using Google.
- [Google's API Library](https://developers.google.com/identity/sign-in/web/reference#authentication): An API (application programming interface) is a term meaning the functions/methods in a library that you can call to ask it to do things for you - the interface to the library from Google.
- Redux
- React-Redux
- [Redux-Devtools-Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- debug-session with redux dev tools
- [Redux-Forms](https://redux-form.com/8.2.2/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- Axios
- Redux Thunk
- Lodash

### Usage
- React Router: `npm i react-router-dom` Example:
```
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/create' exact component={StreamCreate} />
          <Route path='/streams/read' exact component={StreamRead} />
          <Route path='/streams/update' exact component={StreamUpdate} />
          <Route path='/streams/delete' exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};
```
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`
- [Google OAuth](https://console.developers.google.com/apis/credentials/consent?project=twitchtv-mock-up-app&folder&duration=P1D): Create a new App, and then create the OAuth client ID.
- Google's API Library: Google **DO NOT** offer this library over **NPM**. Instead we are going to add a manual `<script>` tag into our public index.html. Inside the `<head>` tag we are going to add: `<script src="https://apis.google.com/js/api.js"></script>`
- Redux: `npm i redux`
- React-Redux: `npm i react-redux`
- Redux-Devtools-Extension: Install on your browser: [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/). To add it to my app, example:
```
// For redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Create store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware()),
);
```
- debug-session with redux dev tools: `http://localhost:3000?debug_session=asdf`
- Redux-Forms: As of March 22 2019, the maintainer of Redux Form seems to have accidentally rolled back to an extremely out of date version: https://github.com/erikras/redux-form/releases. To work around this, we need to install a specific version which is the latest known good release: `npm i redux-form@8.1.0`
- JSON Server: `npm i json-server`
- Axios: `npm i axios`
- Redux Thunk: `npm i redux-thunk`
- Lodash: `npm i lodash` we are using a function called `mapKeys()` that takes 2 arguments. An array and Id and it returns an object with the id.
