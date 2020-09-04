import React, { useEffect, useState } from "react";
import base from "./firebase.js";

import { Ring } from "react-spinners-css"
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
     base.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <div style= {{ textAlign: 'center', marginTop: '25%'}}>
              <Ring color="#1B83C6" />
            </div>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};