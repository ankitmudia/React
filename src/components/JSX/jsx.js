// jsx.js
// Notes on JSX in React

import React from "react";

export default function JSXNotes() {
  // Basic Example of JSX
  const element = <h1>Hello JSX!</h1>;
  // Behind the scenes -> React.createElement("h1", null, "Hello JSX!")

  // Example of using dynamic values
  const name = "Ankit";
  const user = { firstName: "Ankit", lastName: "Mudia" };
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const count = 3;
  const isLoggedIn = true;

  return (
    <>
      {/* 1. JSX must return a single root element */}
      <div>
        <h2>1. Single Root Element</h2>
        <p>This is wrapped inside a parent div or fragment.</p>
      </div>

      {/* 2. JSX with expressions */}
      <div>
        <h2>2. Embedding Expressions</h2>
        <p>Hello, {name}</p>
        <p>Formatted Name: {formatName(user)}</p>
        <p>2 + 2 = {2 + 2}</p>
      </div>

      {/* 3. Conditional Rendering */}
      <div>
        <h2>3. Conditional Rendering</h2>
        {isLoggedIn ? <p>Welcome User ✅</p> : <p>Please log in ❌</p>}
        {count > 0 && <p>You have {count} items.</p>}
      </div>

      {/* 4. Children in JSX */}
      <div>
        <h2>4. JSX Children</h2>
        <div>
          <h3>Nested Elements</h3>
          <button>Click Me</button>
        </div>
      </div>

      {/* 5. Inline Styles */}
      <div>
        <h2>5. Inline Styles</h2>
        <p style={{ color: "blue", backgroundColor: "lightgray" }}>
          This is styled using an inline style object
        </p>
      </div>

      {/* 6. Fragments */}
      <>
        <h2>6. Fragments</h2>
        <p>Group multiple elements without extra DOM nodes.</p>
      </>

      {/* 7. Special Cases */}
      <div>
        <h2>7. Special Cases</h2>
        <p>{false}</p> {/* Renders nothing */}
        <p>{null}</p> {/* Renders nothing */}
        <p>{undefined}</p> {/* Renders nothing */}
        <p>{0}</p> {/* Renders 0 */}
      </div>
    </>
  );
}

/*
🔹 Quick JSX Interview Notes:
1. JSX = JavaScript XML (syntactic sugar over React.createElement).
2. Must return a single root element (use div or Fragment).
3. Attributes use camelCase -> className, onClick.
4. Use {} for JavaScript expressions, not statements.
5. false/null/undefined -> ignored by JSX, but 0 is rendered.
6. Inline styles -> use JS objects, keys in camelCase.
7. Lowercase tags = HTML elements, Uppercase = React Components.
8. JSX compiles to React element objects (not HTML strings).
*/
