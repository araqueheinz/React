# More Fun with Hooks

## Summary
We are taking one of our old projects and we are refactoring it using **React Hooks**

## Project Ahead (Summer & Winter App) - Part 3 out of 3 FINAL
We are going to build a simple application that is going to detect what season the user is currently experiencing at the moment. Using **React Hooks** we are going to simulate life-cycle methods and refactor class base components to functional components.

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


## How to start?
  - Run or download files: git clone `URL, Clone with HTTPS` or ***click*** download zip.
  - Open file in any code editor.
  - In the terminal: *cd into that folder*
  - Install all dependencies: `npm install`
  - Run command to start: `npm start`
