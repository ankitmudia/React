# 🔹 React Interview Topics (Concepts + Implementation)

This guide covers the **essential React concepts, theories, and implementations** commonly asked in frontend interviews.  
Use it as a roadmap for systematic preparation.

---

## 1. Core React
- JSX, Virtual DOM, Reconciliation (how React updates UI efficiently)
- Components: Functional vs Class
- Props vs State (immutable vs mutable)
- Conditional rendering (`&&`, ternary, functions)
- Lists and keys (why keys are important)

---

## 2. React Lifecycle
- **Class lifecycle methods**: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`
- **Functional lifecycle with hooks**: `useEffect` (mount, update, unmount patterns)
- StrictMode double invoke behavior

---

## 3. Hooks (Most Asked Area)
- `useState`, `useEffect` (dependencies, cleanup, infinite loop traps)
- `useContext` (avoid prop drilling)
- `useReducer` (local state management alternative to Redux)
- `useRef` (DOM access, storing values without re-render)
- `useMemo`, `useCallback` (performance optimizations, preventing re-renders)
- **Custom hooks** (when and why to make one)

---

## 4. State Management
- Props drilling problem
- Context API vs Redux
- Redux basics: `actions`, `reducers`, `store`, `dispatch`
- Redux Toolkit (modern way: `createSlice`, `configureStore`)
- Middleware (thunk, saga basics)

---

## 5. Event Handling
- Synthetic events vs native events
- Event delegation in React
- Passing arguments to event handlers

---

## 6. Forms & Controlled Components
- Controlled vs uncontrolled inputs
- `onChange` handlers and state binding
- Form validation (basic custom + libraries like Formik/Yup)

---

## 7. Performance Optimization
- Re-rendering problems
- `React.memo`, `useMemo`, `useCallback` usage
- Virtualization (`react-window`, `react-virtualized`)
- Code splitting & lazy loading (`React.lazy`, `Suspense`)

---

## 8. Routing
- React Router basics (`<Route>`, `<Link>`, `<Navigate>`)
- Nested routes
- Programmatic navigation (`useNavigate`)
- Protected routes (auth guards)

---

## 9. Error Handling
- Error boundaries (class components only)
- Try/catch inside async functions

---

## 10. APIs & Side Effects
- Fetching data with `fetch` / Axios
- Handling loading & error states
- Cancellation (`AbortController`)
- Integration with Redux Thunks / RTK Query

---

## 11. Advanced Topics
- Higher Order Components (HOCs)
- Render props pattern
- Portals (`ReactDOM.createPortal`)
- Refs + forwardRef
- Context with reducers (like mini-Redux)

---

## 12. Testing
- Unit testing with Jest + React Testing Library
- Snapshot testing basics
- Mocking API calls

---

## 13. React 18+ Features
- Concurrent rendering basics
- `useTransition`, `useDeferredValue`
- Automatic batching of state updates
- Suspense for data fetching (conceptual)

---

## 14. System Design / Architecture
- Folder structure best practices
- Large-scale state management
- Component reusability & design system
- Performance monitoring (lazy load, splitting, caching strategies)

---

📌 **Focus Areas for 4+ YOE Interviews**
- Hooks (especially `useEffect`, `useMemo`, `useCallback`)
- Redux Toolkit & Context API
- Performance Optimization
- React 18 features
- Architecture & scaling large React apps
