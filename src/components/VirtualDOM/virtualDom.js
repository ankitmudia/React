// virtualDom.js
// Notes on Virtual DOM in React

import React, { useState } from "react";

export default function VirtualDOMNotes() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Virtual DOM Demo</h1>

      {/* Example: Updating state triggers Virtual DOM update */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <hr />

      <h2>Concept</h2>
      <ul>
        <li>Virtual DOM is a lightweight copy of the real DOM (JS object).</li>
        <li>React keeps a virtual DOM to optimize rendering.</li>
        <li>On updates: React creates a new VDOM → diffs with old VDOM → updates only changed nodes in real DOM.</li>
        <li>Uses reconciliation algorithm with keys for list items.</li>
        <li>Faster than direct DOM updates for large apps.</li>
      </ul>

      <h2>Example Flow (Counter Update)</h2>
      <ol>
        <li>Click button → State updates (count + 1)</li>
        <li>React builds a new Virtual DOM tree</li>
        <li>Diffing: compares old vs new</li>
        <li>Only <code>&lt;p&gt;Count&lt;/p&gt;</code> is updated in real DOM</li>
      </ol>
    </>
  );
}

/*
🔹 Quick Virtual DOM Interview Notes:
1. Virtual DOM = in-memory JS object representation of real DOM.
2. Improves performance by minimizing direct DOM updates.
3. Process: State Change → New VDOM → Diffing → Real DOM update.
4. Keys are crucial for list rendering efficiency.
5. Not a browser feature; React’s internal optimization.
6. Real DOM updates are costly because layout, paint, reflow happen.
7. Virtual DOM allows React to batch updates → smooth UI.
*/