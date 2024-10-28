import { Button } from "antd";
import { FC, ReactNode } from "react";

interface IProprs {
  children: ReactNode;
  onClick?: (title: any) => void; // разобраться с mouse event
}

export const ButtonDefault: FC<IProprs> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
