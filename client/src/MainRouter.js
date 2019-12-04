import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../src/core/Home";
import Menu from "../src/core/Menu";

import Events from "../src/Events";
import Articles from "../src/Articles";
// import Calculators from "../src/Calculators";

const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/events" component={Events} />
      {/* <Route exact path="/calculators" component={Calculators} />
      <Route exact path="/about" component={About} /> */}
    </Switch>
  </div>
);

export default MainRouter;
