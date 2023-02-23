//router
import IndexRouters from "./admin/router/index";

//scss
import { Route, Switch } from "react-router-dom";
import "./admin/assets/scss/custom.scss";
import "./admin/assets/scss/customizer.scss";
import "./admin/assets/scss/dark.scss";
import "./admin/assets/scss/hope-ui.scss";
import "./admin/assets/scss/rtl.scss";
import Index from "./user/routes/index";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={IndexRouters} />
        <Route path="/user" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
