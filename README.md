# React: Context API vs Props Drilling

Esse conteúdo apresenta uma analogia visual **lúdica** e **prática** para entender como o **Context API** resolve o problema de **props drilling** no React.

<div align="center" alt="Mapa conceitual Props vs Context no React">
  <img src="https://raw.githubusercontent.com/kaioodutra/react-drilling-vs-context/refs/heads/main/docs/mind-map.png"/>
</div>

---

## 🔍 Problema: Props Drilling

Imagine que você tem um dado importante (como o nome e a função que altera um produto) no `Component1`, mas quem realmente precisa usar esse dado está no `Component3`. Para isso, você é obrigado a passar os dados por todos os componentes intermediários, mesmo que eles **não façam nada com eles**. Vamos ao exemplo prático:

```jsx
//component1.jsx

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


//component2.jsx

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


//component3.jsx

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
```

📌 Isso é o **props drilling**: um excesso de repasse de propriedades.

---

## ✅ Solução: Context API

Com o `Context API`, você pode **fornecer dados globalmente** a qualquer componente filho, sem precisar fazer esse repasse manual. É como se todos os componentes dentro de um “armazém” pudessem acessar e alterar diretamente os produtos guardados lá dentro.

---

<div align="center" alt="Ilustração conceitual Props vs Context no React">
  <img src="https://raw.githubusercontent.com/kaioodutra/react-drilling-vs-context/refs/heads/main/docs/illustration.png"/>
</div>

---

### 🧠 Analogias

| Conceito React     | Analogia Visual                          |
| ------------------ | ---------------------------------------- |
| `props`            | Produto e/ou função entregue manualmente |
| `Context.Provider` | Armazém com gerente                      |
| `useContext`       | Rampa de acesso ao armazém               |
| `setProduto`       | Gerente organizando os produtos          |
| Componentes filhos | Clientes pegando direto no armazém       |

---

### 🧪 Exemplo prático com Context API

```jsx
//armazemContext.jsx

import { createContext, useContext, useState } from "react";

// Criação do contexto (armazém)
const ArmazemContext = createContext();

// Provider que armazena o produto e permite alteração (gerente do armazém)
export function ArmazemProvider({ children }) {
  const [produto, setProduto] = useState("Arroz");

  return (
    // Abre as portas do armazém e disponibiliza os produtos e o gerente pra quem estiver dentro
    <ArmazemContext.Provider value={{ produto, setProduto }}>
      {children}
    </ArmazemContext.Provider>
  );
}

// Hook para acesso fácil (rampa de acesso ao armazém)
export function useArmazem() {
  return useContext(ArmazemContext);
}


//App.jsx

import { ArmazemProvider } from "./context/armazemContext";
import "./index.css";

import ComponentContext1 from "./context/componentContext1";

function App() {
  return (
    <div>
      <h1>React (Props Drilling Vs Context API)</h1>
      <ArmazemProvider>
        <ComponentContext1 />
      </ArmazemProvider>
    </div>
  );
}

export default App;


//componentContext1.jsx

import ComponentContext2 from "./componentContext2";
import ComponentContext3 from "./componentContext3";

export default function ComponentContext1() {
  return (
    <div>
      <h1>Armazem Context API</h1>
      <ComponentContext2 />
      <ComponentContext3 />
    </div>
  );
}


//componentContext2.jsx

import { useArmazem } from "./armazemContext";

export default function ComponentContext2() {
  const { produto } = useArmazem();
  return (
    <div>
      <h3>{produto}</h3>
    </div>
  );
}


//componentContext3.jsx

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
```

---

> 💡 Dica: Clone o projeto, altere os produtos, adicione temas ou autenticação, e pratique compondo contextos reais!

Este conteúdo foi criado com o intuito de ser **lúdico e simples**, facilitando o entendimento para quem tem dificuldades com `Context API` ou para aspirantes no universo do **React**.

**Repositório do "Projeto":** <a href="https://github.com/kaioodutra/react-drilling-vs-context" target="_blank">
react-drilling-vs-context
</a>

😄 _Obrigado pela leitura!_
