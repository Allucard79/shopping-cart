import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={ProductList}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/details"}
            component={Details}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/cart"}
            component={Cart}
          ></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
        <Modal></Modal>
      </React.Fragment>
    );
  }
}

export default App;
