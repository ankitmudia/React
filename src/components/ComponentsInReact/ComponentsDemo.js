// ComponentsDemo.js
import React, { useState } from "react";

// ✅ Functional Component
function FunctionalCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>⚡ Functional Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ✅ Class Component
class ClassCounter extends Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <h3>🏛 Class Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// ✅ Demo Wrapper
export default function ComponentsDemo() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>🧩 Components Demo</h2>
      <FunctionalCounter />
      <ClassCounter />
    </div>
  );
}
