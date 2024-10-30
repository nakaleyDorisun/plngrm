import { useContext } from "react";
import { Planogramma } from "../../Components/Planogramma/Planogramma";
import { arra } from "../../data/refs/refs";
import { ThemeContext } from "../../context/NightTheme";
import s from "./OneRef.module.css";

export const OneRef = () => {
  const themeContext = useContext(ThemeContext);
  const isNight = themeContext?.theme ? `${s.wrp} + '' + ${s.nght}` : s.wrp;

  return (
    <div className={isNight}>
      <h1>One Ref</h1>
      {arra.map(() => (
        <Planogramma key={Math.random()} />
      ))}
    </div>
  );
};
