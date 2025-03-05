import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const AuthContext = createContext();

export const ThemeProvider = ({children}) => {
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
  
}

export const AuthProvider = ({children}) => {
  const [ isLogged, setIsLogged ] = useState(false);

  const toggleAuth = () => {
    setIsLogged(prevAuth => !prevAuth);
  }

  return (
    <AuthContext.Provider value={{isLogged, toggleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}