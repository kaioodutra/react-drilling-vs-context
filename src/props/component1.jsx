import { useState } from "react";
import Component2 from "./component2";

export default function Component1() {
  const produtoInicial = "Arroz";

  const [produtoHerdado, setProdutoHerdado] = useState(produtoInicial);

  return (
    <div>
      <h1>Armazem Props Drilling</h1>
      <Component2
        produtoHerdado={produtoHerdado}
        setProdutoHerdado={setProdutoHerdado}
      />
    </div>
  );
}
