import React from "react";

//router
import { Switch, Route } from "react-router";
//layoutpages
import Default from "../layouts/dashboard/default";
import Horizontal from "../layouts/dashboard/horizontal";
import Boxed from "../layouts/dashboard/boxed";
import DualHorizontal from "../layouts/dashboard/dual-horizontal";
import DualCompact from "../layouts/dashboard/dual-compact";
import BoxedFancy from "../layouts/dashboard/boxed-fancy";
import Simple from "../layouts/dashboard/simple";

const IndexRouters = () => {
  return (
    <>
      <Switch>
        <Route exact path="/admin" component={Default}></Route>
        <Route path="/admin/dashboard" component={Default}></Route>
        <Route path="/admin/boxed" component={Boxed}></Route>
        <Route path="/admin/horizontal" component={Horizontal}></Route>
        <Route path="/admin/dual-horizontal" component={DualHorizontal}></Route>
        <Route path="/admin/dual-compact" component={DualCompact}></Route>
        <Route path="/admin/boxedFancy" component={BoxedFancy}></Route>
        <Route path="/admin/auth" component={Simple}></Route>
      </Switch>
    </>
  );
};

export default IndexRouters;
