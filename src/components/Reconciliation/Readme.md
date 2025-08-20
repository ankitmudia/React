# 🔄 Reconciliation in React

## ✅ Definition
Reconciliation is the process React uses to compare the **new Virtual DOM** with the **previous Virtual DOM** and update only the changed parts in the **real DOM**.

---

## ⚡ Key Points
- React uses a **diffing algorithm** for efficiency.
- **Different element type →** replace the node.
- **Same element type →** update attributes only.
- **Lists need keys →** helps React track items and avoid re-renders.

---

## 📝 Easy Memory
👉 *“Reconciliation = React’s way of finding differences and updating only what changed.”*
