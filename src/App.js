import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logoutn } from "./components/Logoutn";
import { ShareThings } from "./components/ShareThings";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={Logoutn} />
          <Route path="/oddaj-rzeczy" component={ShareThings} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
