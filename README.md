# Context System with React

## Summary
Key Elements
- `export default React.createContext()`.
- `<ColorContext.Provider value="yellow">` ColorContext is the name we gave to this context.
- `<ColorContext.Consumer>`

## Project Ahead (Translate App) - Part 1 out of 2
We are going to create a simple change language app to demonstrate how to use context within React.

### Tasks
- We create a Context Object with a default value of english.
- App component gents rendered, creates a `<Provider> </Provider>` that wraps the `<UserCreate>` component.
- Provider updates the value of the context object to `this.state.language`
- Button and Field components reach into the context object, see the value from `this.state.language`.
- Button and Field render appropriate text to the screen.  

### Tools
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.

### Usage
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html` we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`