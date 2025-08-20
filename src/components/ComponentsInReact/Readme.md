# 🧩 Components in React

## ✅ Definition
A component is a **small, reusable piece of UI** (like a button, navbar, or form).  
React apps are built by combining many such components.

---

## ⚡ Types
1. **Functional Components**
   - Functions that return JSX.
   - Use **hooks** for state & lifecycle.
   - Modern & preferred.

2. **Class Components**
   - ES6 classes extending `React.Component`.
   - Use **this.state** + lifecycle methods.
   - Older, mostly in legacy code.

---

## 🔑 Key Differences

| Feature             | Functional Component       | Class Component            |
|---------------------|----------------------------|----------------------------|
| Syntax              | Function                  | ES6 Class                 |
| State               | `useState`, `useReducer`  | `this.state`, `setState`  |
| Lifecycle           | `useEffect`               | Lifecycle methods         |
| Modern Usage        | ✅ Yes                    | ❌ Rare                   |

---

## 📝 Easy Memory
👉 *“Functional = Hooks. Class = Lifecycle methods.”*
