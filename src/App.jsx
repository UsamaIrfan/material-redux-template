import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Screens
import Home from "./pages/index"
import SignUp from "./pages/signup";

function App() {
  return (
<Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
