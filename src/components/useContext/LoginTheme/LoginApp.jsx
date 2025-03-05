import React, { useContext } from 'react'
import { AuthContext, AuthProvider, ThemeContext, ThemeProvider } from './AppContext';

const Login = () => {
  const { isLogged, toggleAuth } = useContext(AuthContext);
  return (
    <button onClick={toggleAuth}>{isLogged ? "Fazer loggout" : "Fazer login"}</button> 
  )
}

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>Mudar Tema</button>
  )
}

const Welcome = () => {
  const { isLogged } = useContext(AuthContext);
  return (
    <>
      {isLogged ? "Bem vindo(a)!!" : "Por favor, faça login"}
    </>
  )
}

const LoginApp = () => {
  const { isDarkTheme} = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? 'theme--dark' : 'theme--light'}>
      <ThemeToggle />
      <Welcome />
      <Login />
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LoginApp />
      </AuthProvider>
    </ThemeProvider>
  );
};


export default App;