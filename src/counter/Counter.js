import React, {useContext} from 'react';
import CounterContext from "../context/CounterContext";


const Counter = () => {
    const ctx = useContext(CounterContext)
    console.log(ctx)

    return (
        <div>
            <p>
                {ctx.counter}
            </p>
            <button onClick={ctx.addHandler}>+</button>
            <button onClick={ctx.removeHandler}>-</button>

        </div>
    )
}

export default Counter;