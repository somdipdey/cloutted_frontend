import "./App.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
