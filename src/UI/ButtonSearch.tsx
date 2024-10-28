import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

interface IProprs {
  onClick: () => void;
}

export const ButtonSearch: FC<IProprs> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      type="primary"
      shape="circle"
      icon={<SearchOutlined />}
    />
  );
};
