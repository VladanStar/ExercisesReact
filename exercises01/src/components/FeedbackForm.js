import React from "react";
import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
    const [text, setText] = useState("")
    const handleTextchange = (e)=>{
        console.log(e.target.value);
    }
  return (
   <Card>
    <form>
        <h2>
            How would you rate your service with us?</h2>
            <div className="input-group">
                <input onChange={handleTextchange} type="text" placeholder="Write a review" />
                <button type="submit">Send</button>
            </div>
    </form>
   </Card>
  )
}

export default FeedbackForm;
