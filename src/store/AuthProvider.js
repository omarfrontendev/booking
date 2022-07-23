import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if(localAuth) {
      setAuth(JSON.parse(localAuth))
    };
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthContext;