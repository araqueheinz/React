// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import faker library
import faker from 'faker';

//Import CommentDetail
import CommentDetail from './CommentDetail'
//Import ApprovalCard
import ApprovalCard from './ApprovalCard'

// Create react component (Function or Class)
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this? 
        </div>
      </ApprovalCard>
      <ApprovalCard> 
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Yesterday at 3:20pm"
          comment="Nice bro!"
        />
      </ApprovalCard>
      <ApprovalCard> 
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Juan"
          timeAgo="Yesterday at 1:15pm"
          comment="I don't share your opinion!"
        />
      </ApprovalCard> 
      <ApprovalCard> 
        <CommentDetail 
          avatar={faker.image.avatar()}
          author="Fonda"
          timeAgo="Today at 9:00am"
          comment="It made me laugh :D"
        />
      </ApprovalCard> 
    </div>
  );
};

// Take React Component and show it to the screen
ReactDOM.render(<App/>, document.querySelector('#root'));
