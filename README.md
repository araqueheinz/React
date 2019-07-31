# Intro to State

## Summary
In the last section we refactor our project and started using **Class Based Components**. In this section we are going to start introducing the idea of **State** in our APP.
### What is State?
Is a JavaScript object that contains some amount of data that is relevant to a singular component. **State** is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state. If we want a simple component to update itself, we will update the state. The state object **CAN ONLY BE UPDATED** using the function `setState`.
## Project Ahead (Summer & Winter App) - Part 2 out 3
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

