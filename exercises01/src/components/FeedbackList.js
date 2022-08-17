import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback}) {
  console.log(feedback)
    if(!feedback || feedback.lenth ===0) {
      return <p>No Feedback Yet</p>
    }
  return (
    <div className='feedback-list'>
      {feedback.map((item) =>(
<FeedbackItem  key ={item.id}/>
      ))}

    </div>
  )
}

export default FeedbackList;