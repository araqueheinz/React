# YouTube Mock-Up App 

## Summary
In this section we are going to build a YouTube mock-up application to reenforce our previous acquired knowledge all together. 


## Project Ahead (YouTube Browser App) - Part 1 out of 1 FINAL
We are going to have a **Search Bar** on the top of the page. The user is going to enter some search term, then hit enter key which is going to trigger a search request over to the **YouTube public free API**. Then, we are going to display the returning list of matching videos on browser. The user can click on one of these videos and the app will feature the video in the center of the screen. We will also show them a title and a description of the video as well. 

### Tasks:
- Create Components (App, SearchBar, VideoList, VideoItem, VideoDetail)
- Get the user query
- Render a list of videos
- Show the video player

### Tools
- Semantic UI: https://semantic-ui.com/ is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience.
- Google APIs: https://console.developers.google.com 
- YouTube API: https://developers.google.com/youtube/v3/docs/ 
- Axios: https://www.npmjs.com/package/axios .

### Usage
- Semantic UI: We are going to use a link to a publicly hosted version of the Semantic UI CSS file https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css instead of downloading it. In the /public/index.html we are going to add a "Link" tag. Example: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`
- Google APIs(YouTube): Create a new project, https://console.developers.google.com/projectcreate?previousPage=%2Fapis%2Fdashboard%3Fproject%3Dclean-doodad-216715%26angularJsUrl%3D%26organizationId%3D0&folder=&organizationId=0. *Click* Enable APIS and Services, search YouTube, *select* YouTube Data API v3, *click* Enable, *click* Credentials, *click* Create credentials, *select* API Key, and *copy* API Key.
- YouTube API: https://developers.google.com/youtube/v3/docs/ 
- Axios: npm install axios@0.18.1 Example using YouTube API:

## Conclusion
We created a simple YouTube like application like our previous [Search & Show App](https://github.com/araqueheinz/Learning_React/tree/8_List_Records) using YouTube free API. This time we took the liberty to add better style to it learn hot to embed YouTube video using the **iframe** element tag. The app has a default video selection as soon as it starts of 'upcoming ps4 games'.
