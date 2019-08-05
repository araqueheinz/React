# Class Based Componnets vs Functional Components

## Summary
A component is either a **Function** or a **Class**. So far we've seen what **Functional Components** is and we've only seen how to produce some HTML to show to the user, but not handle any feedback or updates. In this section we are going to talk about **Class Based Components**, how to use them to manage feedback from the user and update the content. 

### When to use **Functional Components**?
We use functional components when we are trying to show simple content to the user without a lot of logic behind it.

### When to use **Class Based Components**?
Used when complex logic is involved, like responding to the user's inputs, make network requests, etc.
### Benefits:
- Easier code organization.
- Can use 'State' system.
- Understands life-cycle events.
## Project Ahead (Summer & Winter App) - Part 1 out of 3
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

