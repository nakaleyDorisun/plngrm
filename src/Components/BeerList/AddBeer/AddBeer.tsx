import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addBeer } from "../../../store/beersSlice";
import { Warning } from "../../../UI/Warning";
import { ButtonDefault } from "../../../UI/ButtonDefault";
import { Input } from "antd";

export const AddBeer = () => {
  const [addBeerValue, setAddBeerValue] = useState("");
  const [allowAddBeer, setAllowAddBeer] = useState(true);

  const selector = useAppSelector((state) => state);
  const beers = selector.beersStore.beers;

  const addBeerHandler = () => {
    if (beers.length && addBeerValue) {
      dispatch(addBeer(addBeerValue));
      setAddBeerValue("");
    } else {
      setAllowAddBeer((p) => !p);
    }
  };

  const dispatch = useAppDispatch();
  return (
    <div>
      <Input
        type="text"
        value={addBeerValue}
        onChange={(e) => {
          setAddBeerValue(e.target.value);
          setAllowAddBeer(true);
        }}
      />
      <ButtonDefault onClick={addBeerHandler}>
        Добавить новую позицию
      </ButtonDefault>

      <div>{allowAddBeer ? null : <Warning>Введите название</Warning>}</div>
    </div>
  );
};
