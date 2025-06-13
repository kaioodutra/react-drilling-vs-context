import { useArmazem } from "./armazemContext";

export default function ComponentContext2() {
  const { produto } = useArmazem();
  return (
    <div>
      <h3>{produto}</h3>
    </div>
  );
}
