import { useAppSelector } from "../../store/hooks";
import { SearchInput } from "../SearchInput/SearchInput";

import s from "./Header.module.css";

export const Header = () => {
  const selector = useAppSelector((state) => state);

  const beers = selector.beersStore.beers;

  return (
    <div className={s.wrp}>
      <h2>Планограмма ПД</h2>
      <div>Всего номенклатур в ассортименте: {beers.length}</div>
      <SearchInput />
    </div>
  );
};
