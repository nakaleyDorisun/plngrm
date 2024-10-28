import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { SearchInput } from "../SearchInput/SearchInput";
import { Warning } from "../../UI/Warning";

export const Planogramma = () => {
  const selector = useAppSelector((state) => state);

  const originalData = selector.beersStore.beers;
  const modifiedData = selector.beersStore.modifiedBeers;
  const isMatch = selector.beersStore.isMatch;
  const isData = originalData.length || modifiedData.length ? true : false;

  const currentData = originalData ? originalData : modifiedData;

  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");

  const correctData = originalData.length ? originalData : modifiedData;

  const chooseBeerHandler = () => {
    if (correctData.length) {
      setIsChecked((p) => !p);
    }
  };

  useEffect(() => {
    if (!currentData.some((beer) => beer.title === value)) {
      setValue("");
    }
  }, [originalData, modifiedData]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {isChecked || isData ? (
            <button onClick={chooseBeerHandler}>...</button>
          ) : (
            <button onClick={chooseBeerHandler}>нет данных</button>
          )}
        </div>
        <div>{currentData.length ? value : null}</div>
      </div>

      {isChecked ? (
        <div>
          <SearchInput />
          {isMatch ? (
            currentData.map((b) => (
              <li key={b.id} style={{ display: "flex" }}>
                <p>{b.title}</p>
                <button
                  onClick={() => {
                    setValue(b.title);
                    setIsChecked(false);
                  }}
                >
                  Add
                </button>
              </li>
            ))
          ) : (
            <Warning>Введите название</Warning>
          )}
        </div>
      ) : null}
    </>
  );
};
