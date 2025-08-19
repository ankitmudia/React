/*Functional Components Lifecycle (Hooks)

Functional components don’t have lifecycle methods, instead they use useEffect and useLayoutEffect.
*/
import React, { useEffect, useState } from "react";

export default function FunctionalLifeCycle() {
  const [count, setCount] = useState(0);

  // 👉 Component Did Mount + Will Unmount
  useEffect(() => {
    console.log("🟢 Component Did Mount");

    return () => {
      console.log("🔴 Component Will Unmount");
    };
  }, []);

  // 👉 Component Did Update (for `count`)
  useEffect(() => {
    if (count > 0) {
      console.log("🔵 Component Did Update: count changed ->", count);
    }
  }, [count]);

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid black" }}>
      <h3>FunctionalLifeCycle</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
