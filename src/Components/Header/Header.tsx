import { useContext } from "react";
import { SwitchTheme } from "../../UI/SwitchTheme";
import { useAppSelector } from "../../store/hooks";
import { SearchInput } from "../SearchInput/SearchInput";

import s from "./Header.module.css";
import { ThemeContext } from "../../context/NightTheme";

export const Header = () => {
  const selector = useAppSelector((state) => state);
  const themeContext = useContext(ThemeContext);

  const isNight = themeContext?.theme ? `${s.wrp} + '' + ${s.nght}` : s.wrp;

  const beers = selector.beersStore.beers;

  return (
    <div className={isNight}>
      <h2>Планограмма ПД</h2>
      <div>Всего номенклатур в ассортименте: {beers.length}</div>
      <span>Это Ночная тема Коберник ----{">"} </span>
      <SwitchTheme
        onChange={() => {
          themeContext?.setTheme((p) => !p);
          console.log(themeContext?.theme);
        }}
      />
      <SearchInput />
    </div>
  );
};
