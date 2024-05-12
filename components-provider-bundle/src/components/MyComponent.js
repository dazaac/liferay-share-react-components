import React, { useState } from "react";

export default function MyComponent(props) {

    const [count, setCount] = useState(0);   

    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <span>Clicks count:{count} </span><br/>
            <button onClick={() => setCount(count+1)}>Add click</button>
        </div>
    )
}