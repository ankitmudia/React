// PropsVsStateDemo.js
import React, { useState } from "react";

// ✅ Child Component
function Counter({ title }) {
  const [count, setCount] = useState(0); // state (mutable, local)

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{title}</h3> {/* props (immutable, from parent) */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ✅ Parent Component
export default function PropsVsStateDemo() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>🔄 Props vs State Demo</h2>
      {/* Passing props */}
      <Counter title="Counter 1 (prop passed from parent)" />
      <Counter title="Counter 2 (same component, different prop)" />
    </div>
  );
}
