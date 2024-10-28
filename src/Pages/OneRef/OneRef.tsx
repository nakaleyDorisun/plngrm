import { Planogramma } from "../../Components/Planogramma/Planogramma";
import { arra } from "../../data/refs/refs";
export const OneRef = () => {
  return (
    <div>
      One Ref
      {arra.map(() => (
        <Planogramma key={Math.random()} />
      ))}
    </div>
  );
};
