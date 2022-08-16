import React from 'react';
import {useState} from 'react';

function FeedbackItem() {

    const [rating, setRating] = useState(7)
  return (
    <div className='card'>
        <div className="num-display">10</div>
        <div className="text-display">This is an example of a feedback</div>
        FeedbackItem</div>
  )
}

export default FeedbackItem