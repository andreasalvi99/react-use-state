import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// ?? Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

// ?? CSS
import "../src/assets/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
