import React from 'react';
import {useState} from 'react';
import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa';

function FeedbackItem({item, handleDelete}) {

    const [rating, setRating] = useState(7);
    // const handleClick = (id)=> {
    //   console.log(id);
    // }
    // const handleDelete = (id) =>{

    // }
    
    // const [text, setText] = useState("This is an example of a feedback ")
    // // const handleClick =()=>{
    // //     setRating((prev)=>{
    // //         return prev +1
    // //     })
    // // }
  
    return (
    <Card >
        <div className="num-display" >{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className='close'>
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem