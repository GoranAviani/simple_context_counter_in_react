import './App.css';

import Dashboard from "./dashboard/Dashboard";

import CounterContext from "./context/CounterContext";

function App() {
  return (
    <CounterContext className="App">
      <Dashboard/>
    </CounterContext>
  );
}

export default App;
