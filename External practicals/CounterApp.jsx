import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <p>Count</p>
      <div className="count-display">{count}</div>
      <button className="increment-btn" onClick={() => setCount(count + 1)}>
        + Increment
      </button>
      </div>
  );
}
