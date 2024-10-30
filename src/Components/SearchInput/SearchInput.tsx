import { useState } from "react";
import { filterBeers } from "../../store/beersSlice";
import { useAppDispatch } from "../../store/hooks";

import { Input } from "antd";

export const SearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <Input
        type="text"
        value={searchInputValue}
        placeholder="Введите название для поиска"
        onChange={(e) => {
          setSearchInputValue(e.target.value);
          dispatch(filterBeers(e.target.value));
        }}
      />
    </div>
  );
};
