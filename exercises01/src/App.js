// import {v4 as uuidv4} from "uuid'";
import {useState} from "react"
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./data/AboutPage";
function App() {

  const[feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback =(id) => {
    console.log("App",id);
    if(window.confirm("Are you sure you want to delete")){
    setFeedback(feedback.filter((item) =>item.id !== id))
  
  }};
  const addFeedback = (newFeedback) => {
    // newFeedback.id = uuidv4()
    console.log(newFeedback);
    setFeedback([newFeedback,...feedback])
  }
  return (
   <>
   <Header />
    <div className="container">
      <FeedbackForm  handleAdd= {addFeedback}/>
      <FeedbackStats feedback ={feedback} />
    <FeedbackList feedback= {feedback}  handleDelete={deleteFeedback}/>
    {/* <Card>
      Hello World
    </Card> */}
    <AboutPage />
    </div>
    </>
  );
}

export default App;
