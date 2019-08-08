# React Router

## Summary
In this section we are going to learn how to handle navigation in React(**React Router**). We are using a library called `react-router-dom` that it is specifically used to navigate through the application in the browser. We also learned different routers, how they work and why use them.

### Different React Routers
- BrowserRouter
- HashRouter
- MemoryRouter

## Project Ahead (Twitch TV Clone) - Part 1 out of 
We are going to build a clone of a very popular Application called **Twitch TV**. It is an application that is used by people all over the world to record video on their desktop and stream it live to viewers, so other people can view some streamer inside their browser and see some continuos stream of video. We are going to have multiple pages that the user can visit. They will show different content depending on which screen the user decides to go. 

### App Goals
- Master CRUD operations in React/Redux

### Tasks:
- We have to be able to navigate around to separate pages in our application.
- Allow user to login/logout
- Handle forms in **Redux**
- Generate good error handling

### Tools
- React Router Dom: https://reacttraining.com/react-router/web/guides/quick-start It contains the DOM bindings for React Router. In other words, the router components for websites. With `react-router-dom` we get an actual implementation of `react-router` that works specifically on the browser.
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.

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
