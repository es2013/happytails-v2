import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {

//       const [state, dispatch] = useProductReducer({
//         products: [],
//         cart: [],
//         cartOpen: false,
//         categories: [],
//         currentCategory: ''

//     });
//     // use this to confirm it works!
//     console.log(state);
//     return <Provider value={[state, dispatch]} {...props} />;
//   };

//   const useStoreContext = () => {
//     return useContext(StoreContext);
//   };

//   export { StoreProvider, useStoreContext };

// import React from 'react';

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
