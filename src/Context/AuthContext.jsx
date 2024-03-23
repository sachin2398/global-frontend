import React, { createContext, useState } from 'react'
export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useState(false);
    const login = () => {
        setAuthState(true)
      
    }
    const logout = () => {
        setAuthState(false);
    }
    return <AuthContext.Provider value={{authState,login,logout}}>{ children}</AuthContext.Provider>
}



