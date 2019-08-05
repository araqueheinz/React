# Building List of Records

## Summary
In this section we are going to use an **Map Array Helper Method** to print out the list of images we found by doing a search. Also, we are going to talk about what is **Key** and why are we supposed to define one whenever we are building a **list of components**.

## Project Ahead (Search & Show) - Part 3 out of 3 (Version 1)
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
We created 3 different components and an Axios API file that we customized for our needs. The application takes the user query in the **Search Bar Component**, It then passes that information back up to the parent **App.js**. The App component is in charged of making the API call to Unsplash.com using a customized version we created. The image data we received from Unsplash we pass it down to the child component **Image list**, where we use the **Map Array Helper Method** to crate render a list of images back to the screen. We use destructuring to stop reaping ourselves 
- // Destructuring images.description, image.id, image.urls
```
 const images = props.images.map(({ description, id, urls }) => {
    return <img alt={ description } key={ id } src={ urls.regular }/>
  });
```
Lastly, we gave each of our new image element tags a key, so React can identify them faster therefore giving it a little boost on performance. 
