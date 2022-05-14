import './App.css';

import Dashboard from "./dashboard/Dashboard";

import CounterContext from "./context/CounterContext";
import {useState} from "react";

function App() {

    const [counterState, setCouterState] = useState(0)
    const {CounterCon} = CounterContext

    const addHandler = () => {
        setCouterState(counterState + 1)
    }

    const removeHandler = () => {
        setCouterState(counterState - 1)

    }

    return (
        <CounterContext.Provider
            value={{counter: CounterCon, addHandler: addHandler, removeHandler: removeHandler}}>
            <div className="App">
                {counterState}

            </div>
            <Dashboard/>
        </CounterContext.Provider>
    );
}

export default App;
