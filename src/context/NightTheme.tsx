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
  const [theme, setTheme] = useState(false);
  localStorage.setItem("nightTheme", JSON.stringify(theme));

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
