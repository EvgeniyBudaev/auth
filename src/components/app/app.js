import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { URL } from "../routes/urls";
import Login from "../login";
import YesPage from "../pages/yes-page";
import auth from "../../actions/auth";

class App extends Component {
  render() {
    console.log(`app->this.props.isAuthenticated :` + this.props.isAuth);

    let routes = (
      <Switch>
        <Route path={URL.HOME} exact>
          <Login />
        </Route>

        <Redirect to={URL.HOME} />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path={URL.YES} exact>
            <YesPage />
          </Route>
          <Route path={URL.HOME} exact>
            <Login {...this.props} loginUser={this.props.auth} />
          </Route>

          <Redirect to={URL.YES} />
        </Switch>
      );
    }

    return <Fragment>{routes}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    auth: () => dispatch(auth())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
