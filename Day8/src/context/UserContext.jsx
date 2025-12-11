import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    mobileNumber: '',
    rechargeAmount: '',
    selectedPlan: null
  });

  const updateUser = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};