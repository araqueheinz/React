# Forms, Inputs, and Events

## Summary
In this section we are going to learn how to get feedback from the user, handling that data using **Event Handlers**, how to fetch data from some outside API or server, how do we show a list of records, the difference between **Controlled Components** and **Uncontrolled Components**, and how to pass data from the children up to the parent.

### What is a Controlled Component?
Is one that takes its current value through props and notifies changes through callbacks like onChange . A parent component "controls" it by handling the callback and managing its own **state** and passing the new values as props to the controlled component.

### What is an Uncontrolled Component?
Is where the form data is handled by the DOM itself, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

## Project Ahead (Search & Show) - Part 1 out 3 (Version 1)
We are going to build an app that consists in having a text input (search bar) in the middle of the screen. The user will be able to type some text in the input, then press enter. We're going to do a search or a request to an outside API that is going to find images that matches whatever the user typed. 

### Tasks:
- Getting user feedback.
- Use the user term to make a request to an outside API.
- Render the images on the screen

### Tools
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.

### Usage
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html` we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`
