import { Switch } from "antd";

type ISwitch = {
  onChange: () => void;
};

export const SwitchTheme = ({ onChange }: ISwitch) => {
  return <Switch defaultChecked onChange={onChange} />;
};
