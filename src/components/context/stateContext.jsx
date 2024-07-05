import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
     const [showLoginForm, setShowLoginForm] = useState(true);
     const [showRegisterForm, setShowRegisterForm] = useState(false);
     const [loginStudentData, setloginStudentData] = useState([]);


     const contextValue = {
          showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm, loginStudentData, setloginStudentData
     }
     return (
          <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
     );
}



export default UserContext;