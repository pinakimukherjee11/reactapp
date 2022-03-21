import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'


const App = () => {
  return (
    <div className="ui container comments">
      
      <ApprovalCard> 
         <CommentDetail author="Sam" timeAgo="Today 4AM" commentDetails="Nice One" image={faker.image.image()} />
      </ApprovalCard>

      <ApprovalCard> 
      <CommentDetail author="Tiya" timeAgo="Ysterday 4AM" commentDetails="Bad One" image={faker.image.image()}/>
      </ApprovalCard>
      <ApprovalCard> 
      <CommentDetail author="Paridhi"timeAgo="Today 6AM" commentDetails="Nisdfdsfdsfce One" image={faker.image.image()}/>
      </ApprovalCard>
      <ApprovalCard> 
      <CommentDetail author="Mishti" timeAgo="Today 8AM" commentDetails="Nisdfsdfdsf ce One" image={faker.image.image()}/>
      </ApprovalCard>
      <ApprovalCard> 
      <CommentDetail author="SaTest" />
      </ApprovalCard>
    </div>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
