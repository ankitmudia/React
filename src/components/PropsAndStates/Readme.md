# 🔄 Props vs State in React

## ✅ Definition
- **Props** = Data passed **from parent to child**. They are **read-only (immutable)**.  
- **State** = Data **managed inside a component**. It can **change (mutable)**.

---

## 🔑 Key Differences

| Feature        | Props                          | State                       |
|----------------|-------------------------------|-----------------------------|
| Ownership      | Passed from parent to child   | Managed inside component    |
| Mutability     | **Immutable** (read-only)     | **Mutable** (can change)    |
| Usage          | Configure a component         | Store & update data locally |
| Update         | Controlled by parent          | Controlled by the component |

---

## 💡 Easy Analogy
- **Props = Ingredients given to a chef** 🥦🍅 (cannot change).  
- **State = Chef’s cooking process** 🍳 (can change while cooking).

---

## 📝 Easy Memory
👉 *Props = External, Read-only. State = Internal, Changeable.*
