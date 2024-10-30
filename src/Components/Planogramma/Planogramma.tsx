import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { SearchInput } from "../SearchInput/SearchInput";
import { Warning } from "../../UI/Warning";
import { ButtonSearch } from "../../UI/ButtonSearch";
import { ButtonDefault } from "../../UI/ButtonDefault";

import s from "./Planogramma.module.css";
import { ThemeContext } from "../../context/NightTheme";

export const Planogramma = () => {
  const selector = useAppSelector((state) => state);
  const [isChecked, setIsChecked] = useState(false);
  const [beerOnPlanogramm, setBeerOnPlanogramm] = useState("");
  const themeContext = useContext(ThemeContext);

  const originalData = selector.beersStore.beers;
  const modifiedData = selector.beersStore.modifiedBeers;
  const currentData = originalData ? originalData : modifiedData;
  const correctData = originalData.length ? originalData : modifiedData;

  const isMatch = selector.beersStore.isMatch;
  const isData = originalData.length || modifiedData.length ? true : false;
  const isNight = themeContext?.theme ? `${s.wrp} + '' + ${s.nght}` : s.wrp;

  const chooseBeerHandler = () => {
    if (correctData.length) {
      setIsChecked((p) => !p);
    }
  };

  const addBeerToPlanogrammHandler = (title: string) => {
    setBeerOnPlanogramm(title);
    setIsChecked(false);
  };

  useEffect(() => {
    if (!currentData.some((beer) => beer.title === beerOnPlanogramm)) {
      setBeerOnPlanogramm("");
    }
  }, [originalData, modifiedData]);

  return (
    <div className={isNight}>
      <div style={{ display: "flex" }}>
        <div>
          {isChecked || isData ? (
            <ButtonSearch onClick={chooseBeerHandler} />
          ) : (
            <ButtonDefault onClick={chooseBeerHandler}>
              Нет данных
            </ButtonDefault>
          )}
        </div>
        <div>{currentData.length ? beerOnPlanogramm : null}</div>
      </div>

      {isChecked ? (
        <div>
          <SearchInput />
          {isMatch ? (
            currentData.map((b) => (
              <li key={b.id} style={{ display: "flex", alignItems: "center" }}>
                <p style={{ margin: "0" }}>{b.title}</p>
                <ButtonDefault
                  onClick={() => addBeerToPlanogrammHandler(b.title)}
                >
                  +
                </ButtonDefault>
              </li>
            ))
          ) : (
            <Warning>Введите название</Warning>
          )}
        </div>
      ) : null}
    </div>
  );
};
