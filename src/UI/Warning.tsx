import { FC, ReactNode } from "react";

interface IProprs {
  children: ReactNode;
}

export const Warning: FC<IProprs> = ({ children }) => {
  return <div style={{ color: "red" }}>{children}</div>;
};
