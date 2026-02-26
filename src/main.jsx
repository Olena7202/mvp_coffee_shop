import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";         // <- тут ім’я файлу без .jsx
import "./styles/App.css";       // <- якщо твій CSS в папці styles

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);