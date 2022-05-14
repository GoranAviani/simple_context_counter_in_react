import React, {useContext} from 'react';
import CounterContext from "../context/CounterContext";



const Counter = () => {
    const ctx = useContext(CounterContext)


    return(
        <div>
            <button onClick={ctx.addHandler}>+</button>
            <button onClick={ctx.removeHandler}>-</button>

        </div>
    )
}

export default Counter;