import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PageCalculadora from "./calculadora";
import PageOla from "./ola";

export default function PagesRoot() {
  return (
    <Router>
      <Switch>
        <Route path="/calculadora">
          <PageCalculadora />
        </Route>
        <Route path="/ola">
          <PageOla />
        </Route> 
       <Redirect from="/" to="/ola" />
      </Switch>
    </Router>
  );
}
