# Refactoring, Refs, Adding Style & CSS

## Summary
In this section we are going t take the **Search & Show** project and we are going to add some styling, utilizing **CSS Grid**. Also, we are going to learn about **Accessing the DOM with Refs**.

### What are React Refs?
They are a system to give you direct access to a single dom element that is rendered by a component. In the typical React dataflow, props are the only way that parent components interact with their children. ... The child to be modified could be an instance of a React component, or it could be a DOM element. 

## Project Ahead (Search & Show) - Part 3 out of 3 FINAL (Version 2)
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
 ## Conclusion
After finishing the core functionality of our App, we want to improve the way the images are being displayed using **Grid** in our CSS file. Instead of having a long list of big images, we are going to allocate them in a somewhat tile system like Pinterest.com. To do that we created an **Image Card Component** that will be creating **Refs** for every *img tag element* we created, so we can access the heigh of each image before it reaches the DOM. Using the heigh data, we are able to calculate how many **Spans**(grid-Row-End) are needed for each individual image, so every image is displayed properly.

## How to start?
  - Run or download files: git clone `URL, Clone with HTTPS` or ***click*** download zip.
  - Open file in any code editor.
  - In the terminal: *cd into that folder*
  - Install all dependencies: `npm install`
  - Run command to start: `npm start`
