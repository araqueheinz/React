# Making API Requests

## Summary
In this section we are going to learn how to load some data into our app. We are going to learn the differences between the 3rd party package **Axio** vs **Fetch**.

### What is Axios?
Axios is a standalone third party package that is frequently used in React apps for managing network requests and fetching some amount of data. It is a promise-based HTTP client that works both in the browser and in a node.js environment. It basically provides a single API for dealing with XMLHttpRequest s and node's http interface.

### What is fetch?
Fetch is a singular function that it is built into almost all modern browsers. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.


## Project Ahead (Search & Show) - Part 2 out of 3 (Version 1)
We are going to build an app that consists in having a text input (search bar) in the middle of the screen. The user will be able to type some text in the input, then press enter. We're going to do a search or a request to an outside API that is going to find images that matches whatever the user typed. 

### Tasks:
- Getting user feedback.
- Use the user term to make a request to an outside API.
- Render the images on the screen

### Tools
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.
- Unsplash Developer: https://unsplash.com/developers is a photo engine with the largest open collection of high-quality photos. For free.
- Axios: https://www.npmjs.com/package/axios .

### Usage
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`
- Unsplash Developer: https://unsplash.com/documentation we need the **Location** where the API is available(`https://api.unsplash.com/`). We need **Authorization** which we are using the headers from axios to pass the information. We are doing a **Search**, and we are passing the query via the params using axios.
- Axios: `npm i axios`. Example using Unsplash API:
```
  axios.get('https://api.unsplash.com/search/photos', {
    params: { 
      query: term,
      per_page: 16, 
    },
    headers: {
      Authorization: 'Client-ID e1173c2e2609b2c76285fa636d353a6ac743954c592e008c6372cbb1952eb898',
    },
  });
```
