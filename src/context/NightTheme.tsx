import { ReactElement, ReactNode, createContext, useState } from "react";

interface ITheme {
  theme: boolean | null;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ITheme | null>(null);

type IProprs = {
  children: ReactNode | ReactElement;
};

export const ThemeContextProvider = ({ children }: IProprs) => {
  let initialState = localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme") || "")
    : false;
  const [theme, setTheme] = useState(initialState);

  localStorage.setItem("theme", JSON.stringify(theme));

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
