import React from 'react';
import { useAuth } from '../utils/GlobalState';
import Auth from '../utils/auth';

export default function Logout() {
  React.useEffect(() => {
    Auth.logout();
  }, []);
  return null;
};
