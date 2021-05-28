import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    donation: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

// Creating context with defaults
export const AuthContext = React.createContext({
  isAdmin: false,
  token: null,
  setToken: () => {},
  setIsAdmin: () => {},
});

// This utility function makes it easier to read the value of context
export const useAuth = () => {
  return React.useContext(AuthContext);
};
