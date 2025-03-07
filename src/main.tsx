import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elemento root não encontrado");
}
