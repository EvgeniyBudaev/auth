import React, { Component } from "react";
import classes from "./login.module.css";

class Login extends Component {
  render() {
    return (
      <div className={classes.Login}>
        <form>
          <h1>Авторизация</h1>
        </form>
      </div>
    );
  }
}

export default Login;
