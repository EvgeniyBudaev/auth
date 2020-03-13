import { AUTH_SUCCESS } from "../actions/actionTypes";

export function auth() {
  return dispatch => {
    const token =
      "8c02d93ade241ed33ef2ad476752de1a917a3f7141448662c54ec606dec23bc4a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B56674%2C%22r1JhFhdjwIlvSvHr3P9OxzXsCV2T9gOO%22%2C2592000%5D%22%3B%7D";
    //  const token = null;

    if (token) dispatch(authSuccess(token));
  };
}

export function authSuccess(token) {
  console.log(token);
  return {
    type: AUTH_SUCCESS,
    token
  };
}
