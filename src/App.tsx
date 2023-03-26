import React from "react";
import "./App.css";
import ParamEditor from "./ParamEditor";
import { Model, Param } from "./types";

function App() {
  const params: Param[] = [
    {
      id: 1,
      name: "Назначение",
      type: "string",
    },
    {
      id: 2,
      name: "Длина",
      type: "string",
    },
  ];

  const model: Model = {
    paramValues: [
      {
        paramId: 1,
        value: "повседневное",
      },
      {
        paramId: 2,
        value: "макси",
      },
    ],
    colors: [],
  };

  return (
    <div className="App">
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
