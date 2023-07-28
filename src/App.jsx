import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowseRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Component={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
