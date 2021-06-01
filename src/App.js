import "./App.css";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Profile from "./components/pages/Profile";
// import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
