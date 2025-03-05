import { useEffect, useState } from "react";

const ChangeTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    console.log("Tema:", isDarkMode ? "Escuro" : "Claro");
    const body = document.querySelector('body');
    body.className = "";
    body.classList.add(isDarkMode ? "theme--dark" : "theme--light");
  }, [isDarkMode]);

  return (
    <div className={`theme ${isDarkMode ? "theme--dark" : "theme--light"}`}>
      <p>Você está usando o tema: {isDarkMode ? "Escuro" : "Claro"}</p>
      <button onClick={handleClick}>Mudar Tema</button>
    </div>
  );
};

export default ChangeTheme;
