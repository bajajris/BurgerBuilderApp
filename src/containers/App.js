import React, { Component } from "react";
import classes from "./app.module.css";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Layout from "../components/Layout/Layout";
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
