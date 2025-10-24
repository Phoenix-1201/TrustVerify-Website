import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TrustVerify } from "./screens/TrustVerify";
import { Survey } from "./screens/Survey";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TrustVerify />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  </StrictMode>,
);
