import { Route, Switch } from "react-router-dom";
import ProductsList from "../components/Products";
import MobileCart from "../components/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProductsList />
      </Route>
      <Route path="/cart">
        <MobileCart />
      </Route>
    </Switch>
  );
};

export default Routes;
