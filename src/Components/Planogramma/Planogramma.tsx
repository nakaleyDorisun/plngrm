import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { SearchInput } from "../SearchInput/SearchInput";
import { Warning } from "../../UI/Warning";
import { ButtonSearch } from "../../UI/ButtonSearch";
import { ButtonDefault } from "../../UI/ButtonDefault";

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

  const addBeerToPlanogrammHandler = (title: string) => {
    setValue(title);
    setIsChecked(false);
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
            <ButtonSearch onClick={chooseBeerHandler} />
          ) : (
            <ButtonDefault onClick={chooseBeerHandler}>
              Нет данных
            </ButtonDefault>
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
                <ButtonDefault
                  onClick={() => addBeerToPlanogrammHandler(b.title)}
                >
                  Add
                </ButtonDefault>
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
