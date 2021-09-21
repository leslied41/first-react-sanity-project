import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/post/:slug">
          <SinglePost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
