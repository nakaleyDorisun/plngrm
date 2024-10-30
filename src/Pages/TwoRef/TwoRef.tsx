import { Planogramma } from "../../Components/Planogramma/Planogramma";
import { arra } from "../../data/refs/refs";
import { useContext } from "react";
import { ThemeContext } from "../../context/NightTheme";

import s from "./TwoRef.module.css";

export const TwoRef = () => {
  const themeContext = useContext(ThemeContext);
  const isNight = themeContext?.theme ? `${s.wrp} + '' + ${s.nght}` : s.wrp;

  return (
    <div className={isNight}>
      <h1>Two Ref</h1>
      {arra.map(() => (
        <Planogramma key={Math.random()} />
      ))}
      {arra.map(() => (
        <Planogramma key={Math.random()} />
      ))}
    </div>
  );
};
