import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Add a new state variable for the user's information
  const [userInfo, setUserInfo] = useState(null);

  const value = {
    currentUser,
    setCurrentUser,
    userInfo, // Add the new userInfo state to the context
    setUserInfo, // Add the new setUserInfo state to the context
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};