import React from 'react';
import Auth from '../utils/auth';

export default function Logout() {
  React.useEffect(() => {
    Auth.logout();
  }, []);
  return null;
};
