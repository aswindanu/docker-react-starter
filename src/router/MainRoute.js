import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Custom from "../pages/Custom";
import PatNolPat from "../pages/404";
import Register from "../pages/Register";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/custom" component={Custom}></Route>
      <Route exact path="/Register" component={Register}></Route>      
      
      <Route component={PatNolPat} />
    </Switch>
  );
};

export default MainRoute;
