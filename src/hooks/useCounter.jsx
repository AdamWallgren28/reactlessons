import { useState } from 'react';

export function useCounter (intitialCount = 0) {
    let [count, setCount] = useState(intitialCount);

    let increment = () => setCount(count + 1);
    let decrement = () => setCount(count - 1);
    let reset = () => setCount(intitialCount);
﻿
    return [count, increment, decrement, reset];
}