import React, { createContext, useState, useContext } from 'react';
import { USER as DEFAULT_USER } from '../data/mock';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_USER);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
