import React, { createContext, useState } from "react";

// 1. Criando o Contexto
export const ThemeContext = createContext();

// 2. Criando o Provider
export const ThemeProvider = ({ children }) => {
  // Estado que guarda o valor do tema
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme); 
  };

  return (
    // 3. Usando o Provider para disponibilizar os dados para os filhos
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
