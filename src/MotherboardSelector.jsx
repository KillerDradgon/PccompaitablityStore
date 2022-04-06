import React from "react";
import CpuSelection from "./cpuSelection";

const MotherboardSelector = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <button onClick={() => props.backButtonLogicMotherboard()}>Back</button>

      {props &&
        props.motherboards.map((item, index) => (
          <>
            {item.interface == props.cpu.interface && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  margin: "10px",
                }}
              >
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <button onClick={() => props.setMotherboardUnit(index)}>
                  Add MotherBoard
                </button>
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default MotherboardSelector;
