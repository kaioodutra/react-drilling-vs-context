export default function Component3(props) {
  return (
    <div>
      <h3>{props.produtoHerdado}</h3>
      <button
        onClick={() =>
          props.setProdutoHerdado(() =>
            props.produtoHerdado === "Arroz" ? "Feijão" : "Arroz"
          )
        }
      >
        Alterar Produto
      </button>
    </div>
  );
}
