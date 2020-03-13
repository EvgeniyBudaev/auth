import { AUTH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  token: null,
  isAuth: false,
  cookie: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuth: true,
        cookie: action.cookie
      };

    default:
      return state;
  }
}
