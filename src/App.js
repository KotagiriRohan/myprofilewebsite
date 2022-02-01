import Navbar from "./Navbar";
import ProjectCards from "./ProjectCards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="appcontents">
          <Switch>
            <Route exact path="/">
              <Navbar scroll={true} />
              <Home />
            </Route>
            <Route exact path="/projects">
              <Navbar scroll={false} />
              <div className="headpadding" />
              <ProjectCards num={0} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
