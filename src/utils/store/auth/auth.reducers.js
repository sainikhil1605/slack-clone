import {
  CLEAR_AUTH_DATA,
  SET_AUTH_DATA,
  SET_LOGIN_DETAILS,
  SET_UID,
} from "./auth.actions";

const setUid = (uId) => {
  return {
    type: SET_UID,
    payload: uId,
  };
};
const setAuthData = (email, userName) => {
  return {
    type: SET_AUTH_DATA,
    payload: {
      email,
      userName,
    },
  };
};
const setLoginDetails = ({ accessToken, email, uid }) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("userId", uid);
  return {
    type: SET_LOGIN_DETAILS,
    payload: {
      email: email,
      uid: uid,
    },
  };
};
const clearAuthData = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");
  return {
    type: CLEAR_AUTH_DATA,
    payload: {},
  };
};
const initialState = {
  uid: "",
  userName: "",
  email: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_UID:
      return {
        ...state,
        uid: payload,
      };
    case SET_LOGIN_DETAILS:
    case SET_AUTH_DATA:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_AUTH_DATA:
      return {
        uid: "",
        userName: "",
        email: "",
      };
    default:
      return state;
  }
};
export { setUid, authReducer, setAuthData, setLoginDetails, clearAuthData };
