import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar.js"
import Search from "./pages/Search.js"
import Saved from "./pages/Saved.js"
import "./app.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path={["/", "/search"]} component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={Search} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
