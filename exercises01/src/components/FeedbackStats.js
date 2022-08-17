import React from 'react'

function FeedbackStats({feedback}) {
    //calculate ratings avg
    let average = feedback.reduce((acc, current)=>{
return acc + current.rating
    },0)/feedback.length;
    console.log(average)
    average = average.toFixed(1);
  return (
    <div className='feedback-stats'>
       <h4>{feedback.length} Reviews</h4>
       <h4>Average Rating: {isNaN(average) ?0:average} </h4></div>
  )
}

export default FeedbackStats