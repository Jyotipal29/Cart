import { createContext, useContext, useReducer, useState } from "react";
import { actionTypes } from "../constants/actionType";
const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

//get user from local storege
const user = JSON.parse(localStorage.getItem("user"));
//user loggrdin
export const isLoggedInLocally = () =>
  localStorage.getItem("user") &&
  JSON.parse(localStorage.getItem("user"))["isLoggedIn"];

export const UserProvider = ({ children }) => {
  const initialUserState = {
    name: " ",
    email: " ",
    isLoggedIn: isLoggedInLocally(),
  };
  const [user, userDispatch] = useReducer(userReducer, initialUserState);

  return (
    <userContext.Provider value={{ user, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};
