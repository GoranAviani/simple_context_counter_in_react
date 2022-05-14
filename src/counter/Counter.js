import React, {useContext} from 'react';
import CounterContext from "../context/CounterContext";



const Counter = () => {
    const ctx = useContext(CounterContext)
    return(
        <div>
            counter
            <p>
                {ctx.counter}
            </p>

        </div>
    )
}

export default Counter;