# Authentication With React (Twitch TV Mock-Up App)

## Summary
In this we are going to learn how to handle authentication in general for any kind of web application and then we are going to focus on how to apply it to our application. There are many [Scopes](https://developers.google.com/identity/protocols/googlescopes) you can ask from Google, but we only care for the email.

### OAuth Flow
- User authenticate with outside service provider (Google, LinkIn, Facebook).
- User authorizes our app to access their information.
- Outside provider tells us about the user
- We are trusting the outside provider to correctly handle identification of a user
- OAuth can be used for (1) user identification in our app and (2) our pp making actions on behalf of the user.

### OAuth for JS Browser Apps
- Results in a 'token' that a browser app can use to make requests on behalf of the user
- Usually used when we have an app that only needs to access user data while they are logged in.
- Very easy to set up thanks to Google's JS lib to automate flow.

### Steps for setting up OAuth
- Create a new project at console.developer.google.com/
- Set up an OAuth confirmation screen
- Generate an OAuth Client Id
- Install Google's API library, initialize it with the OAuth Client ID
- Make sure the lib gets called any time the user clicks on the 'Login with google' button.

## Project Ahead (Twitch TV Clone) - Part 2 out of 
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
