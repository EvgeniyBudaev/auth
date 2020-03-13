import { AUTH_SUCCESS } from "../actions/actionTypes";
import cookie from "react-cookies";

export function auth() {
  return dispatch => {
    const token =
      "b1063fa405e89a118a33cc3f8544c92dce0bb4f6a3d57835b5b165141acb9506a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B56674%2C%227SeJn00FyrFNictZcnC9ygfC4uAs4gi5%22%2C2592000%5D%22%3B%7D";
    //  const token = null;

    if (token) {
      dispatch(authSuccess(token));
      localStorage.setItem("_identity", token);
      cookie.save("_identity", token, { path: "/" });
    }
  };
}

export function authSuccess(token) {
  console.log("Токен: " + token);
  console.log("Куки: " + cookie);
  return {
    type: AUTH_SUCCESS,
    token,
    cookie
  };
}
