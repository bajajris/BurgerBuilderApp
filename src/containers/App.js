import React, { Component } from "react";
import classes from "./app.module.css";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Layout from "../hoc/Layout/Layout";
import Checkout from '../containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../containers/Orders/Orders';
import Auth from './Auth/Auth';
class App extends Component {
  // state = {
  //   show: true
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' exact component={Orders} />
            <Route path='/auth' exact component={Auth} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
