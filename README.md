# Redux Store Design 

## Summary
In this section we are going to learn more in depth about reducers and how to make some API requests.


### Rules of Reducers
- Must return any value besides 'undefined'
- Produces 'state', or data to be used inside of your app using only previous state and the action (reducers are pure).
- Must not return reach 'out of itself' to decide what value to return
- Must not mutate its input 'state' argument using the **BAD WAY**

The **BAD WAY** mutates the elements of an Array or the properties of an Object, on the other hand, the **GOOD WAY** generates or creates a new Array or Object, therefore creating a new state object, not mutating the previous one.

### **GOOD WAY** of mutating state inside the reducer:
#### Arrays
- Remove Element: `state.filter(element => element !== 'hi')`
- Add Element: `[...state, 'h1']`
- Replace element: `state.map(element => element ==='hi' ? 'bye' : element)`
#### Objects
- Update Property: `{ ...state, name: 'Sam' }`
- Adding Property: `{ ...state, age: 30 }`
- Remove Property: `{ ...state, age: undefined }`
- Delete Property: `_.omit(state, 'age')`

### **BAD WAY** of mutating state inside the reducer:
#### Arrays
- Remove Element: `state.pop()`
- Add Element: `state.push('hi')`
- Replace Element: `state[0] = 'h1'`
#### Objects
- Update Property: `state.name = 'Sam'`
- Adding Property: `state.age = 30`
- Remove Property: `delete state.name`


## Project Ahead (List of Blog Posts) - Part 1 out of 2 FINAL
Our project ahead is to create a blog posts list with their respective authors.

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
- **NEW!** lodash: https://lodash.com/ is a modern JavaScript utility library delivering modularity, performance & extras.


### Usage
- JSONPlaceholder: `/posts`: https://jsonplaceholder.typicode.com/posts & `/users`: https://jsonplaceholder.typicode.com/users
- Redux: `npm i redux`
- React-Redux: `npm i react-redux`
- Axios: `npm i axios`
- Redux-Thunk: `npm i redux-thunk`
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`
- lodash: `npm i lodash` we are going to use https://lodash.com/docs/4.17.15#memoize function.
