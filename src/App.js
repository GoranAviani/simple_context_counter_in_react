import './App.css';

import Dashboard from "./dashboard/Dashboard";

import CounterContext from "./context/CounterContext";
import {useState} from "react";

function App() {

    const [counterState, setCouterState] = useState(0)


  return (
    <CounterContext.Provider value={{counter: counterState, setCouterState: setCouterState}} className="App">
      <Dashboard/>
    </CounterContext.Provider>
  );
}

export default App;
