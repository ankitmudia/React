/*1. Class Components Lifecycle

React breaks it into three phases:

✅ Mounting (when component is created & inserted into DOM)

constructor() → initialize state & bind methods.

static getDerivedStateFromProps(props, state) → rarely used, sync state with props.

render() → returns JSX (pure function, no side effects).

componentDidMount() → runs after first render, good for API calls, subscriptions, DOM manipulations.

✅ Updating (when props or state changes)
static getDerivedStateFromProps() → again runs before render.

shouldComponentUpdate(nextProps, nextState) → performance optimization (decide re-render or not).

render() → re-runs.

getSnapshotBeforeUpdate(prevProps, prevState) → capture some DOM info (like scroll position) before re-render.

componentDidUpdate(prevProps, prevState, snapshot) → runs after re-render; good for API calls that depend on updated DOM.

✅ Unmounting (when component is removed from DOM)

componentWillUnmount() → cleanup: remove listeners, cancel API requests, clear timers, etc.
*/
import React from "react";
export default class ClassExample extends React.Component {
  constructor() {
    console.log("1. constructor");
    super();
  }
  static getDerivedStateFromProps() {
    console.log("2. getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("3. render");
    return <div>Hello</div>;
  }
  componentDidMount() {
    console.log("4. componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("5. shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("6. getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("7. componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("8. componentWillUnmount");
  }
}


