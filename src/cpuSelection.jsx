import React from "react";

const CpuSelection = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {props &&
        props.cpus.map((cpu, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              margin: "10px",
            }}
          >
            <h1>{cpu.name}</h1>
            <p>{cpu.price}KWD</p>
            <button onClick={() => props.setCpuUnit(index)}> add Cpu</button>
          </div>
        ))}
    </div>
  );
};

export default CpuSelection;
