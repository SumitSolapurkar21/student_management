import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
     const [showLoginForm, setShowLoginForm] = useState(true);
     const [showRegisterForm, setShowRegisterForm] = useState(false);


     const contextValue = {
          showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm
     }
     return (
          <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
     );
}



export default UserContext;