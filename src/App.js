import "./App.css";
import Homepage from "./pages/Homepage";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , 
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    // <Homepage />
    <Router>
    <div>
      <Switch>
      <Route path="/" > <Homepage /> </Route>
      <Route path="/edit"> <Edit /> </Route>
      <Route path="/add"> <Add /> </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App;
