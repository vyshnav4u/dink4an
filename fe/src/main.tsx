import { StrictMode } from "react";
import { init, events, app } from "@neutralinojs/lib";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

init();

events.on("windowClose", () => {
  app.exit();
});
