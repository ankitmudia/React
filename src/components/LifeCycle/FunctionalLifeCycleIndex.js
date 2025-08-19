import React, { useState } from "react";
import FunctionalLifeCycle from "./FunctionalLifeCycle";

export default function FunctionalLifeCycleIndex() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div>FunctionalLifeCycleIndex</div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "unmount" : "mount"}
      </button>
      {show && <FunctionalLifeCycle />}
    </>
  );
}
