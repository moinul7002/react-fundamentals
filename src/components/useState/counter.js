import React, { useState } from "react";

const CounterExample = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={}>
          Decrease
        </button>
        <button className="btn" onClick={}>
          Reset
        </button>
        <button className="btn" onClick={}>
          Increase
        </button>
      </section>
    </>
  );
};

export default CounterExample;
