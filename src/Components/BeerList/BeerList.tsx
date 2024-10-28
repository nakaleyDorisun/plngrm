import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isInStockChange, refreshInStock, start } from "../../store/beersSlice";
import { AddBeer } from "./AddBeer/AddBeer";

import s from "./BeerList.module.css";
import { Link } from "react-router-dom";
import { NotFound } from "../../UI/NotFound";

export const BeerList = () => {
  const [showAll, setShowAll] = useState(false);
  const [buttonValue, setButtonValue] = useState(false);

  const selector = useAppSelector((state) => state);
  const beers = selector.beersStore.beers;
  const isMatch = selector.beersStore.isMatch;

  const dispatch = useAppDispatch();

  const showAllHandler = () => {
    dispatch(start());
    setShowAll((p) => !p);
  };

  const isInStockChangeHandler = (id: string) => dispatch(isInStockChange(id));
  const isShowed = !buttonValue ? "Показать весь ассортимент" : "Скрыть";

  console.log("beerlist render");

  return (
    <>
      <div className={s.wrp}>
        <div>
          <button
            onClick={() => {
              showAllHandler();
              setButtonValue((p) => !p);
            }}
          >
            {isShowed}
          </button>
          <button onClick={() => dispatch(refreshInStock())}>
            Обновить ассортимент
          </button>
          {beers && showAll && isMatch ? (
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
            <NotFound />
          ) : null}
        </div>
        <AddBeer />
      </div>
      <Link to={"/onestoreref"}>Один холодильник</Link>
      <Link to={"/twostoreref"}>Два холодильника</Link>
    </>
  );
};
