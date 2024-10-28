import { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { addBeer } from "../../../store/beersSlice";

export const AddBeer = () => {
  const [addBeerValue, setAddBeerValue] = useState("");

  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        type="text"
        value={addBeerValue}
        onChange={(e) => setAddBeerValue(e.target.value)}
      />
      <button onClick={() => dispatch(addBeer(addBeerValue))}>
        Добавить новую позицию
      </button>
    </div>
  );
};
