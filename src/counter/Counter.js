import React, {useContext} from 'react';
import CounterContext from "../context/CounterContext";



const Counter = () => {
    const ctx = useContext(CounterContext)
    return(
        <div>
            {ctx.counter}
            counter
        </div>
    )
}

export default Counter;