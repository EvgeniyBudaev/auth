import { AUTH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  token: null,
  isAuth: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuth: true
      };

    default:
      return state;
  }
}
