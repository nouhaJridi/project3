import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MyClass from "./item.js";

function App() {
  return (
    <>
      <MyClass />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
