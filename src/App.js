import "./App.css";
import Homepage from "./pages/Homepage";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/add" component={Add} />

        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
