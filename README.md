# Intro to Lifecycle Methods

## Summary
In this section we are going to start talking about **Lifecycle Methods** and the reason behind it is that we are going to refactor our code, more specifically our state object. A **Component Lifecycle Method** is function that we can optionally define inside our **Class Based Components**. If decide to implements these methods, they will be called automatically by react during the component's lifecycle.

## Project Ahead (Summer & Winter App) - Part 3 out of 3 FINAL
We are going to build a project to help us better understand the main differences between **Functional Components** and **Class Based Components**. We are also going to learn about **State** and **Life-cycle events** along the way. It is going to be a simple application that is going to detect what season is currently experiencing at the moment.

### Tasks:
- Locate the user's physical location.
- Determine the current month.
- Change text and styling based on location & month.

### Tools
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.

- Geolocation APi: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API` allows the user to provide their location to web applications if they so desire. It is built into most modern browsers.


### Usage
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html` we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`

- Geolocation APi: 2 callbacks, Success & Error!
  ```javascript
   window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), 
    (err) => console.log(err) 
  );
  ```
## Conclusion
We've learned the basic differences between **Functional Components** and **Class Base Components**, Switching to Class based components gave me more benefits, like being able to use the state system, organizing my code, making it easier to read, and the ability to access life-cycle methods. Every Class component in React should be an extension of the React.Component, for example: 
```
class App extends React.Component {}
```
Another requirement of the class component is that we most define a render method that is going to return some JSX. 

We learn how to initialize the state and that we **CAN ONLY** modify or update the state by using the function `setState()`

## How to start?
  - Run or download files: git clone `URL, Clone with HTTPS` or ***click*** download zip.
  - Open file in any code editor.
  - In the terminal: *cd into that folder*
  - Install all dependencies: `npm install`
  - Run command to start: `npm start`
