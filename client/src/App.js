import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Switch>
          <Route exact path={["/", "/books"]} />
           <Route path="/saved" />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
