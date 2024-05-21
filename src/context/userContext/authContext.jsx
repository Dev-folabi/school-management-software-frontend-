import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  // const value = {authenticated, setAuthenticated};

  const value = "Auth value";

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};


