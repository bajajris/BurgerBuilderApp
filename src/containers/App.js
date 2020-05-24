import React, { Component } from "react";
import classes from "./app.module.css";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Layout from "../hoc/Layout/Layout";
import Checkout from '../containers/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Orders from '../containers/Orders/Orders';
import Auth from './Auth/Auth';
import Logout from './Auth/Logout/Logout';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
class App extends Component {
  // state = {
  //   show: true
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {

    let routes = (
      <Switch>
        <Route path='/auth' exact component={Auth} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          {/* No /auth route 
            does not go to checkout page ise user not signed in clicked sign up to order
            No /auth route no redirection to checkout as that code never gets executed 
          */}
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' exact component={Orders} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/' exact component={BurgerBuilder} />
          <Redirect to='/' />
        </Switch>);
    }
    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
