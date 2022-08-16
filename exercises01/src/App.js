import {useState} from "react"
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {

  const[feedback, setFeedback] = useState(
    {
    id:1,
    rating:10,
    text:"Alert is only used on the route moving to that route we can prevent "
  },
  {
    id:2,
    rating:6,
    text:"Alert is only used on the route moving to that route we can prevent "
  },
  {
    id:3,
    rating:0,
    text:"Alert is only used on the route moving to that route we can prevent "
  },
  {
    id:4,
    rating:7,
    text:"Alert is only used on the route moving to that route we can prevent "
  },
  {
    id:5,
    rating:8,
    text:"Alert is only used on the route moving to that route we can prevent "
  },
  )
  return (
   <>
   <Header />

    <FeedbackItem />
    </>
  );
}

export default App;
