import { useArmazem } from "./armazemContext";

export default function ComponentContext3() {
  const { produto, setProduto } = useArmazem();
  return (
    <div>
      <button
        onClick={() => setProduto(produto === "Arroz" ? "Feijão" : "Arroz")}
      >
        Alterar Produto
      </button>
    </div>
  );
}
