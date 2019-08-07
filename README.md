# Async Actions with Redux-thunk 

## Summary
In this section we are going to build an application similar to a blog post. The goal behind it, is to keep practicing with redux and react-redux on top of learning a new middleware called redux-thunk. Also, we are going to learn how to make API calls using redux. 

### Some rules of Action Creators(Redux)
- Action Creator must return action objects
- Actions must have a `type` property
- Actions can optionally have a `payload`.

### Redux Cycle
- Action Creator
- Action
- Dispatch
- Reducers
- State

### What is Redux-Thunk?
Is a middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

### What is a Redux-Thunk middleware?
Is a function that gets called with every action we dispatch. It has the ability to Stop, Modify, or otherwise mess with actions. One of the most popular use for this middleware is for dealing with **async** actions.

### Some rules of Redux-Thunk middleware
- Actions Creator can return action objects or functions
- If an action object gets returned, it must have a `type`
- If an action object gets returned, it can optionally have a `payload`.

### Redux Cycle with Redux-Thunk middleware
- Action Creator
- Action
- Dispatch
- `Redux-Thunk middleware`
- Reducers
- State

## Project Ahead (List of Blog Posts) - Part 1 out of 2


### App Goals
- Fully understand the purpose of **reducers**
- Fully understand making **API** requests with **redux**
- Fully understand the purpose of middleware **redux-thunk**

### Tasks:
- Component gest rendered onto the screen
- Component `componentDidMount` lifecycle method gets called
- We call action creator from `componentDidMount`
- Action Creator runs code to make API request
- API responds with data
- Action creator returns an 'action' with the fetched data on the `payload` property
- Some reducers sees the action, returns the data off the `payload`
- New state object, redux/react-redux cause our React app to be re-rendered

### Tools
- JSONPlaceholder: https://jsonplaceholder.typicode.com/ is a fake Online REST API for Testing and Prototyping
- Redux
- React-Redux 
- Axios
- Redux-Thunk: 
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.


### Usage
- JSONPlaceholder: `/posts`: https://jsonplaceholder.typicode.com/posts & `/users`: https://jsonplaceholder.typicode.com/users
- Redux: `npm i redux`
- React-Redux: `npm i react-redux`
- Axios: `npm i axios`
- Redux-Thunk: `npm i redux-thunk`
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`
