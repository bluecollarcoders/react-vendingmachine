import React from "react";
import { BrowerRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Chips";
import Chips from "./Chips";
import Soda from "./Soda";



function App() {
  return (
    <BrowerRouter>
    <Switch>
      <Route path="/" exact>
        <VendingMachine />
      </Route>
      <Route path="/soda" exact>
        <Soda />
        </Route>
      <Route path="/chips" exact>
        <Chips />
        </Route>
      <Route path="/sardines" exact>
        <Sardines />
        </Route>
    </Switch>
    </BrowerRouter>
  );
}

export default App;
