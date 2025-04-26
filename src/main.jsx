import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
