import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, incrementByAmount, incrementAsync, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)) || 0)}>Add Amount</button>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount)) || 0)}>Add Async</button>
      </div>
    </div>
  );
}

export default Counter;