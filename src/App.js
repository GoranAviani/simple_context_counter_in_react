import './App.css';

import Dashboard from "./dashboard/Dashboard";

import CounterContext from "./context/CounterContext";

function App() {

  return (
    <CounterContext.Provider value={{counter: 0}} className="App">
      <Dashboard/>
    </CounterContext.Provider>
  );
}

export default App;
