import { useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isInStockChange, refreshInStock, start } from "../../store/beersSlice";
import { AddBeer } from "./AddBeer/AddBeer";

import s from "./BeerList.module.css";
import { Link } from "react-router-dom";
import { Warning } from "../../UI/Warning";
import { ButtonDefault } from "../../UI/ButtonDefault";
import { Pagination } from "../Pagination/Pagination";
import { IBeers } from "../../../data/data";
import { ThemeContext } from "../../context/NightTheme";

export const BeerList = () => {
  const selector = useAppSelector((state) => state);
  const beers = selector.beersStore.beers;
  const themeContext = useContext(ThemeContext);

  const [showAll, setShowAll] = useState(false);

  const [buttonValue, setButtonValue] = useState(false);

  const items = beers.length - 1;

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage] = useState(10);

  const isMatch = selector.beersStore.isMatch;
  const isBeerListShowed = beers && showAll && isMatch;
  const isInStockChangeHandler = (id: string) => dispatch(isInStockChange(id));
  const isShowed = !buttonValue ? "Показать" : "Скрыть";
  const isNight = themeContext?.theme ? `${s.wrp} + '' + ${s.nght}` : s.wrp;

  const dispatch = useAppDispatch();

  const showAllHandler = () => {
    dispatch(start());
    setShowAll((p) => !p);
    setButtonValue((p) => !p);
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const refreshStockHandler = () => {
    dispatch(refreshInStock());
  };

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const beersToRender: IBeers[] = beers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <div className={isNight}>
        <div>
          <ButtonDefault onClick={showAllHandler}>{isShowed}</ButtonDefault>
          <ButtonDefault onClick={refreshStockHandler}>
            Обновить ассортимент
          </ButtonDefault>

          {isBeerListShowed ? (
            beersToRender.map((beer) => (
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
          <Pagination
            totalItems={items}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
          />
          <Link to={"/onestoreref"}>Один холодильник</Link>
          <Link to={"/twostoreref"}>Два холодильника</Link>
        </div>
        <AddBeer />
      </div>
    </>
  );
};
