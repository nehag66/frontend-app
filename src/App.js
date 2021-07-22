import "./App.css";

import Main from "./containers/Main/Main";
import Users from "./containers/Users/Users";
import UserDetail from "./containers/Users/UserDetail";

import { Route, Switch } from "react-router-dom";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/user/:name/:id">
        <UserDetail />
      </Route>
    </Switch>
  );
  return <div className="App">{routes}</div>;
}

export default App;
