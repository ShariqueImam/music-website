import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
import Animator from "./components/UI/Animator";

import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="overflow-x-hidden bg-[#0b0b0b]">
      <App />
    </div>
  </React.StrictMode>
);
