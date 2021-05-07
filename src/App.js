import "./App.css";
import Signup from "./components/Login/Signup";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Signup /> */}
        <Home />
      </Router>
    </div>
  );
}

export default App;
