import "./App.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Screenshots from "./pages/Screenshots/Screenshots";
import TypeForm from "./pages/TypeForm/TypeForm";
import HashTag from "./pages/HashTag/HashTag";
import Auth from "./auth_layer/components/Auth/Auth";
import { useStateValue } from "./data_layer/store";
import Analyse from "./pages/Analyse/Analyse";
import { useEffect, useState } from "react";
import WhatCloutted from "./pages/WhatCloutted";
import Trending from "./pages/Trending/Trending";
import Cloutted from "./pages/Cloutted/Cloutted";

const ClouttedApp = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/get-early">
        <TypeForm />
      </Route>
      <Route exact path="/community">
        <Screenshots
          imgSrc={"/ClouttedCommunities.JPG"}
          imgCaption="A place to find your friends and make new ones in the Cloutted ecosystem."
        />
        <Screenshots
          imgSrc={"/memberDirectory.jpg"}
          imgCaption="See members within your communities, connect with like-minded people, find and follow your friends."
        />
      </Route>
      <Route exact path="/hashtags" component={HashTag}></Route>
      <Route exact path="/cloutted" component={Cloutted}></Route>
      <Route
        exact
        path="/hashtags/:hashtag"
        render={(props) => <HashTag key={props.match.params} {...props} />}
      />
      <Route exact path="/analyse" render={(props) => <Analyse {...props} />} />
      <Route exact path="/trending" component={Trending}></Route>
      <Route exact path="/mylists">
        <Screenshots
          imgSrc={"/MyLists.JPG"}
          imgCaption="Curate your own feed, customize who you see, and share your lists!"
        />
      </Route>
      <Route exact path="/what-is-cloutted">
        <WhatCloutted />
      </Route>
    </Switch>
  </>
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (!user) {
      const userKey = localStorage.getItem("pubKey");
      const userInfo = localStorage.getItem("userInfo");

      if (userKey) {
        dispatch({
          type: "SET_USER",
          payload: {
            PublicKeyBase58Check: userKey,
            user: JSON.parse(userInfo),
          },
        });
      }
    }
  }, [user]);

  return (
    <Router>
      <div className="App">{user ? <ClouttedApp /> : <Auth />}</div>
    </Router>
  );
}

export default App;
