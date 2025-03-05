import React, { createContext, useState } from "react";

// 1. Criando o Contexto
export const ThemeContext = createContext();

// 2. Criando o Provider
export const ThemeProvider = ({ children }) => {
  // Estado que guarda o valor do tema
  const [theme, setTheme] = useState("Claro");

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Claro" ? "Escuro" : "Claro"));
  };

  return (
    // 3. Usando o Provider para disponibilizar os dados para os filhos
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
