// ReconciliationDemo.js
import React, { useState } from "react";

export default function ReconciliationDemo() {
    const [items, setItems] = useState(["🍎 Apple", "🍌 Banana", "🍇 Grape"]);

    const handleUpdate = () => {
        // Replace Banana with Mango
        setItems(["🍎 Apple", "🥭 Mango", "🍇 Grape"]);
    };

    return (
        <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
            <h3>🔄 Reconciliation Demo</h3>

            <p>Click the button to update the list.</p>

            <button onClick={handleUpdate}>Update List</button>

            <h4>❌ Without Keys</h4>
            <ul>
                {items.map((item, index) => (
                    <li>{item}</li> // no key → React may re-render unnecessarily
                ))}
            </ul>

            <h4>✅ With Keys</h4>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li> // key → React efficiently updates only changed node
                ))}
            </ul>
        </div>
    );
}
