import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { URL } from "../routes/urls";
import Login from "../login";
import YesPage from "../pages/yes-page";

class App extends Component {
  render() {
    console.log(`app->this.props.isAuthenticated :` + this.props.isAuth);

    let routes = (
      <Switch>
        <Route path={URL.LOGIN} exact>
          <Login />
        </Route>

        <Redirect to={URL.LOGIN} />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/" exact />
          <Redirect to={URL.HOME} exact />
        </Switch>
      );
    }

    return <Fragment>{routes}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    // isAuth: state.auth.isAuth
    isAuth: !!state.auth.token
  };
};

export default withRouter(connect(mapStateToProps)(App));
