import { Planogramma } from "../../Components/Planogramma/Planogramma";
import { arra } from "../../data/refs/refs";
export const TwoRef = () => {
  return (
    <div>
      Two Ref
      {arra.map(() => (
        <Planogramma key={Math.random()} />
      ))}
      {arra.map(() => (
        <Planogramma key={Math.random()} />
      ))}
    </div>
  );
};
