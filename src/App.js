import { useState } from "react";
import "./App.css";
import CpuSelection from "./cpuSelection";
import MotherboardSelector from "./MotherboardSelector";

function App() {
  const [cpu, setCpu] = useState(null);
  const [motherboard, setMotherboard] = useState(null);
  // const [ram, setRam] = useState(null);
  const [total, setTotal] = useState(0);
  const [cpuSelection, setCpuSelection] = useState(true);
  const [motherboadSelection, setMotherboardSelection] = useState(false);

  const CpuList = [
    { name: "i5 1100", interface: 1155, maxRam: 16, price: 100 },
    { name: "i7 1200", interface: 1156, maxRam: 32, price: 200 },
    { name: "i3 1100", interface: 1157, maxRam: 8, price: 50 },
  ];

  const motherboardList = [
    { name: "B550", interface: 1155, maxRam: 16, price: 35 },
    { name: "B604", interface: 1156, maxRam: 32, price: 45 },
    { name: "B953", interface: 1157, maxRam: 8, price: 20 },
  ];

  const setCpuUnit = (item) => {
    setCpuSelection(false);
    setCpu(CpuList[item]);
    setTotal(total + CpuList[item].price);
    setMotherboardSelection(true);
  };

  const setMotherboardUnit = (item) => {
    setMotherboardSelection(false);
    setMotherboard(motherboardList[item]);
    setTotal(total + motherboardList[item].price);
  };

  const backButtonLogicMotherboard = () => {
    setMotherboardSelection(false);
    setCpuSelection(true);
    setCpu(null);
    setMotherboard(null);
    setTotal(0);
  };

  const backButtonLogicRam = () => {
    setMotherboardSelection(true);
    setCpuSelection(false);
    //setCpu(null);
    setTotal(total - motherboard.price);
    setMotherboard(null);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h1>Order</h1>
        {cpu && <p>CPU: {cpu.name}</p>}
        {motherboard && <p>Motherboard: {motherboard.name}</p>}

        <p>total: {total} kwd</p>
      </div>

      {!cpuSelection && !motherboadSelection && (
        <button onClick={() => backButtonLogicRam()}>Back</button>
      )}

      {cpuSelection && <CpuSelection cpus={CpuList} setCpuUnit={setCpuUnit} />}
      {!cpuSelection && motherboadSelection && (
        <MotherboardSelector
          cpu={cpu}
          setMotherboardUnit={setMotherboardUnit}
          motherboards={motherboardList}
          backButtonLogicMotherboard={backButtonLogicMotherboard}
        />
      )}
    </div>
  );
}

export default App;
