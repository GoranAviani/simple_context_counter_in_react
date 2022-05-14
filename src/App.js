import './App.css';

import Dashboard from "./dashboard/Dashboard";

import CounterContext from "./context/CounterContext";
import {useState} from "react";

function App() {

    const [counterState, setCouterState] = useState(0)
    const {CounterCtx} = CounterContext.counter

    const addHandler = () => {
        setCouterState(counterState + 1)
    }

    const removeHandler = () => {
        setCouterState(counterState - 1)
    }

    return (
        <CounterContext.Provider
            value={{counter: counterState, addHandler: addHandler, removeHandler: removeHandler}}>
            <Dashboard/>
        </CounterContext.Provider>
    );
}

export default App;
