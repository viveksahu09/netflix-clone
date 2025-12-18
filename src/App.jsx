import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactRoute from "./Routes/ReactRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <ReactRoute />
    </BrowserRouter>
  );
}

export default App;
