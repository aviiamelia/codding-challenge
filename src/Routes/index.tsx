import { Route, Switch } from "react-router-dom";
import ProductsList from "../components/Products";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProductsList />
      </Route>
    </Switch>
  );
};

export default Routes;
