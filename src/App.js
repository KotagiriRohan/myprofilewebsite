import Navbar from "./Navbar";
import ProjectCards from "./ProjectCards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="appcontents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <ProjectCards num={0} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
