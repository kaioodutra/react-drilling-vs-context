import Component3 from "./component3";

export default function Component2(props) {
  return (
    <div>
      <Component3
        produtoHerdado={props.produtoHerdado}
        setProdutoHerdado={props.setProdutoHerdado}
      />
    </div>
  );
}
