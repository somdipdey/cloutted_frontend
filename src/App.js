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
            <Screenshots imgSrc={"/ClouttedCommunities.JPG"} imgCaption="A place to find your friends and make new ones in the Cloutted ecosystem." />
            <Screenshots imgSrc={"/ClouttedCommunities.JPG"} imgCaption="See members within your communities, connect with like-minded people, find and follow your friends." />
          </Route>
          <Route exact path="/hastags">
            <Screenshots imgSrc={"/hashtags.JPG"} imgCaption="See the latest trends on Bitclout and Cloutted. Find related hashtags. See what others are talking about across various topics." />
          </Route>
          <Route exact path="/mylists">
            <Screenshots imgSrc={"/MyLists.JPG"} imgCaption="Curate your own feed, customize who you see, and share your lists!" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
