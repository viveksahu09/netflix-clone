import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactRoute from "./Routes/ReactRoute.jsx";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import MovieDetail from "./components/MovieDetail";
import MoveSlider from "./components/MoveSlider";
import ContactUs from "./components/ContactUs";
import FeedbackList from "./components/FeedbackList";

import "./App.css";
import "./CSS/Home.css";
import "./CSS/Login.css";
import "./CSS/MoveSlider.css";
import "./CSS/MovieDetail.css";
import "./CSS/ContactUs.css";

function App() {
  return (
    <BrowserRouter>
      <ReactRoute />
    </BrowserRouter>
  );
}

export default App;
