# React with Redux

## Summary
In this section we are going to learn about **Redux**. First, we started by understanding redux on its own. Then, we learned how it works with React all together.

### What is Redux?
Redux is a state management library that makes creating complex apps a little bit easier. Redux can be used with any other JavaScript framework or library, like Angular.

### Redux Cycle
- Action Creator
- Action
- Dispatch
- Reducers
- State


## Project Ahead (Songs & Redux) - Part 1 out of 1 FINAL
We are going to create a simple app to learn how to incorporate Redux with React. One the left side of the screen we are going to create/display a component that will hold an array of objects. This array will be a list of "hard-coded" songs. On the right side of the screen we are going to create/ display a component that will hold the details of the song the user has selected.

### Tasks:
- Create a **Reducer** that is going to produce a list of songs.
- Create a **Reducer** that records what the current selected song is.
- Create an **Action Creator** that will change our **state**

### Tools
- Redux
- React-Redux 
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.


### Usage
- Redux: `npm i redux`
- React-Redux: `npm i react-redux`
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`

## Conclusion
We started by creating and 3 separate folders inside the 'src' folder. One called **actions**, the other one called **reducers**, and the **components**. Inside of the **actions & reducers** folders we created an **index.js**. The **action** folder contain 1 **Action Creator** which is the one that is going to select the song. In the **Reducers** folder we have 2 reducers. One contains a hard-coded array of songs(objects) an the second one will return the selected song. Then, we combine those reducers using the function **combineReducers** from the **redux** library. Example:
```
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
```

After setting up our **actions** and **reducers**, we began with the flow of generating an **index.js** file inside the 'src' folder. That **index.js** will import the **App** component and render it to the screen, however this time we did something different. This time we imported, in the **index.js** file inside the 'src' folder, aside from React and ReactDOM, the **Provider Component** from react-redux library, then the **createStore function** from redux library, then our **App Component**, and finally our **reducers**. 

This time the `<App />` component is going to be nested inside the new `<Provider />` component we imported from the react-redux library. At the same time that **Provider** component is going to pass the **createStore function** with the **reducers** as a parameter. Example:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App'
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)} >
    <App/>
  </Provider>,
  document.querySelector('#root')
);
```
In the components folder we have 3 components, **App**, **SongDetail**, and **SongList**. This time the **SongDetail** and the **SongList** components are going to be exported differently. They will import the **connect** function from react-redux library and use it to connect these components to the **Provider**. First we create a function that by convention we call it `mapStateToProps`. This function has a parameter of `state` and will return and object. We will use this `mapStateToProps` function in our imported connect function. Example from **SongDetail** component:
```
const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
```

In the case of the **SongList** component where the select song button is located at, we need to import the **Action Creator** so we can select the song and pass it to our store/state. We began by importing the **connect** function from the react-redux library(again), and then our **selectSong** action. If we use the **connect** function we need to create our `mapStateToProps` function.
Example from **SongList** component: 
```
const mapSateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapSateToProps, {
  selectSong: selectSong,
})(SongList);
```

## How to start?
  - Run or download files: git clone `URL, Clone with HTTPS` or ***click*** download zip.
  - Open file in any code editor.
  - In the terminal: *cd into that folder*
  - Install all dependencies: `npm install`
  - Run command to start: `npm start`
