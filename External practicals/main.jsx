import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp />
    <App />
  </React.StrictMode>
);
