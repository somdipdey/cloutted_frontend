import "./App.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Screenshots from "./pages/Screenshots/Screenshots";
import TypeForm from "./pages/TypeForm/TypeForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/get-early">
            <TypeForm />
          </Route>
          <Route exact path="/community">
            <Screenshots imgSrc={"/ClouttedCommunities.JPG"} />
          </Route>
          <Route exact path="/hastags">
            <Screenshots imgSrc={"/hashtags.JPG"} />
          </Route>
          <Route exact path="/mylists">
            <Screenshots imgSrc={"/MyLists.JPG"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
