import './App.css';

import Dashboard from "./dashboard/Dashboard";

import CounterContext from "./context/CounterContext";
import {useState} from "react";

function App() {

    const [counterState, setCouterState] = useState(0)


  return (
    <CounterContext.Provider class="App"
                             value={{counter: counterState, setCouterState: setCouterState}} className="App">
        {counterState}
        <Dashboard/>
    </CounterContext.Provider>
  );
}

export default App;
