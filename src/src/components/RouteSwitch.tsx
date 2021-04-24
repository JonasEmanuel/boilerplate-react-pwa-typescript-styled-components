import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";

export const RouterSwitch = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <>Page 2</>
      </Route>
      <Route path="/dashboard">
        <>Page 3</>
      </Route>
    </Switch>
  </Router>
);
