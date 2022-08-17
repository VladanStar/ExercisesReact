import React from 'react';
import {useState} from 'react';

function FeedbackItem({item}) {

    const [rating, setRating] = useState(7);
    
    // const [text, setText] = useState("This is an example of a feedback ")
    // // const handleClick =()=>{
    // //     setRating((prev)=>{
    // //         return prev +1
    // //     })
    // // }
  
    return (
    <div className='card'>
        <div className="num-display" >{item.rating}</div>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
    </div>
  )
}

export default FeedbackItem