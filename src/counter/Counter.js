import React, {useContext} from 'react';
import CounterContext from "../context/CounterContext";
import './Counter.css'

const Counter = () => {
    const ctx = useContext(CounterContext)
    console.log(ctx)

    return (
        <div className="counter">
            <div className="number">
                {ctx.counter}
            </div>
            <span className="buttons">
                <button onClick={ctx.addHandler}>+</button>
                <button onClick={ctx.removeHandler}>-</button>
            </span>

        </div>
    )
}

export default Counter;