# Intro to Props

## Summary
In this section, I'm introduced to props. I'm going to learn 3 significant concepts, **Component Nesting**, **Component Reusability**, and **Component Configuration**. These are the foundations of the React eco-system.

## What are props?
**Props or Properties** is a system for passing data from a **Parent** component to a **Child** component. Most components can be customized when they are created, with different parameters or **Props**(Properties). A **Child** can not pass data back up to the parent through the **Prop** system directly.

## Project Ahead (List of Comments) - Part 1 out of 1 FINAL
We are going to generate a list of comments. Similar to a news article, comments on social media, or a blog post using **Component Nesting**, **Component Reusability**, and **Component Configuration**.

### Tools
- Semantic UI: `https://semantic-ui.com/` is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.

- Faker.js: `https://github.com/marak/Faker.js/` is a JavaScript library for generating fake data.


### Usage
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css` instead of downloading it. In the /public/index.html we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`

- Faker.js: `npm i --save faker`. Import the library where you need.

## Conclusion
We created 3 files **index.js**, **CommentDetail.js**, and **ApprovalCard.js** inside the src folder. The goal behind this project was to start getting use to the idea of creating reusable components, nesting them inside one another and passing data through using props. In the index.js we used the **CommentDetail.js** component 3 times and passed different data to each one of them via props. At the same time we nested that component inside the **ApprovalCard.js** component and used it via props.children. At the end of the project we created 2 different, reusable, and fully customizable components.


## How to start?
  - Run or download files: git clone `URL, Clone with HTTPS` or ***click*** download zip.
  - Open file in any code editor.
  - In the terminal: *cd into that folder*
  - Install all dependencies: `npm install`
  - Run command to start: `npm start`
