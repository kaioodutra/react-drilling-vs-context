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
