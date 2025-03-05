import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext"; // Importando o Contexto e o Provider

const ThemeToggle = () => {
  // Consumindo o contexto usando useContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>O tema atual é: {theme}</h1>
      <button onClick={toggleTheme}>Mudar Tema</button>
    </>
  );
};

const AppTheme = () => {
  return (
    // 4. Usando o ThemeProvider para envolver os componentes
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default AppTheme;
