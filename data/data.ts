import uuid from "react-uuid";

export interface IBeers {
  id: string;
  title: string;
  isInStock: boolean;
}

export const beers: IBeers[] = [
  {
    id: uuid(),
    title:
      "Пиво Грольш Премиум Пилснер светл. 5,0% фильтр. 0,5 ж/б шт Голландия",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Евер Пилснер светл. 4,9% фильтр. 0,5 ж/б шт Германия",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Калнапилис Оригинал св. фильт., алк.5 30л % Литва",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Канапинис светлое пастеризованное 5,1% 1 л.",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Канапинис темное пастеризованное 5,3% 1 л.",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Клаусталер Драй Хопп (Анфильтеред) б/а бут. 0,33л Германия",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Клаусталер Ориджинал б/а бут. 0,33л Германия",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Кромбахер Пилс ж/б 0,5л 4,8%",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Патронус Вайссбир н/ф 5,0% 0,5",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Радебергер Пилснер светлое фильт.паст. 4,8% 0,5л Германия",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Самсон 1795 Темный Лагер 4,5% 0,5",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Самсон 1795 Чешский Лагер 4,7% 0,5",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Самсон 1795 Чешский Лагер 5,1% 0,5л",
    isInStock: true,
  },
  {
    id: uuid(),
    title: "Пиво Самсон 1795 Экста Хоппед Лагер 4,9% 0,5",
    isInStock: true,
  },
];
