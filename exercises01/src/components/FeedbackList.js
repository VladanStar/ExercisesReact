import React from 'react'

function FeedbackList({feedback}) {
  console.log(feedback)
    if(!feedback || feedback.lenth ===0)
  return (
    <div></div>
  )
}

export default FeedbackList;