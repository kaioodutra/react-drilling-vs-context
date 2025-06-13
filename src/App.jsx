import { ArmazemProvider } from "./context/armazemContext";
import "./index.css";
import Component1 from "./props/component1";

import ComponentContext1 from "./context/componentContext1";

function App() {
  return (
    <div>
      <h1>React (Props Drilling Vs Context API)</h1>
      <Component1 />
      <ArmazemProvider>
        <ComponentContext1 />
      </ArmazemProvider>
    </div>
  );
}

export default App;
