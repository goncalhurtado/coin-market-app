import "./sass/vendors/main.scss";
import NavApp from "./components/NavApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Crypto from "./pages/Crypto";
import Learn from "./pages/Learn";
import Community from "./pages/Community";
import React from "react";

function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="community" element={<Community />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </>
  );
}

export default App;
