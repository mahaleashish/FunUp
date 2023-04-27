import React, { useState } from 'react';



export default function Counter() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h2 style={{ marginTop: "300px" }}>Count:{count}</h2>
            <button style={{ color: "green", fontSize: "large", cursor: "pointer", marginRight: "14px" }} onClick={increment}>Click to increase count</button>
            <button style={{ color: "purple", fontSize: "large", cursor: "pointer" }} onClick={decrement}>Click to decrease count</button>

        </div>
    )
}