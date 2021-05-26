import React, { createContext, useContext } from "react";

// Creating context with defaults
export const AuthContext = React.createContext({
  isAdmin: false,
  token: null,
  setLoggedIn: () => {},
  setIsAdmin: () => {},
});

// This utility function makes it easier to read the value of context
export const useAuth = () => {
  return React.useContext(AuthContext);
};
