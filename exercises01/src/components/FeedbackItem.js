import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7);
  const { deleteFeedback } = useContext(FeedbackContext);
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
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

export default FeedbackItem;
