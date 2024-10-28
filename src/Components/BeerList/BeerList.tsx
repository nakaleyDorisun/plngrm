import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isInStockChange, refreshInStock, start } from "../../store/beersSlice";
import { AddBeer } from "./AddBeer/AddBeer";

import s from "./BeerList.module.css";
import { Link } from "react-router-dom";
import { Warning } from "../../UI/Warning";
import { ButtonDefault } from "../../UI/ButtonDefault";

export const BeerList = () => {
  const [showAll, setShowAll] = useState(false);
  const [buttonValue, setButtonValue] = useState(false);

  const selector = useAppSelector((state) => state);
  const beers = selector.beersStore.beers;

  const isMatch = selector.beersStore.isMatch;
  const isBeerListShowed = beers && showAll && isMatch;

  const dispatch = useAppDispatch();

  const showAllHandler = () => {
    dispatch(start());
    setShowAll((p) => !p);
    setButtonValue((p) => !p);
  };

  const refreshStockHandler = () => {
    dispatch(refreshInStock());
  };

  const isInStockChangeHandler = (id: string) => dispatch(isInStockChange(id));
  const isShowed = !buttonValue ? "Показать" : "Скрыть";

  return (
    <>
      <div className={s.wrp}>
        <div>
          <ButtonDefault onClick={showAllHandler}>{isShowed}</ButtonDefault>
          <ButtonDefault onClick={refreshStockHandler}>
            Обновить ассортимент
          </ButtonDefault>

          {isBeerListShowed ? (
            beers.map((beer) => (
              <div key={beer.id}>
                {beer.title}
                <input
                  type="checkbox"
                  checked={beer.isInStock}
                  onChange={() => {
                    isInStockChangeHandler(beer.id);
                  }}
                ></input>
              </div>
            ))
          ) : !isMatch ? (
            <Warning>Не найдено</Warning>
          ) : null}
        </div>
        <AddBeer />
      </div>
      <Link to={"/onestoreref"}>Один холодильник</Link>
      <Link to={"/twostoreref"}>Два холодильника</Link>
    </>
  );
};
