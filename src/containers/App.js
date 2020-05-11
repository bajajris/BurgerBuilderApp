import React, { Component } from "react";
import classes from "./app.module.css";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Layout from "../hoc/Layout/Layout";
class App extends Component {
  state = {
    show: true
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          {this.state.show ? <BurgerBuilder /> : null}
        </Layout>
      </div>
    );
  }
}

export default App;
