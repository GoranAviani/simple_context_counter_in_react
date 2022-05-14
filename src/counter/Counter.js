import React, {useContext} from 'react';
import CounterContext from "../context/CounterContext";



const Counter = () => {
    const ctx = useContext(CounterContext)

    const addHandler = () => {
        ctx.setCouterState(ctx.counter + 1)
    }

    return(
        <div>
            counter
            <p>
                {ctx.counter}
            </p>
            <button onClick={addHandler}>+</button>
            <button>-</button>

        </div>
    )
}

export default Counter;