import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TrustVerify } from "./screens/TrustVerify";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TrustVerify />
  </StrictMode>,
);
